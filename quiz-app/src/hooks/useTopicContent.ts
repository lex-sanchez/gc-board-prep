import { useState, useEffect, useCallback } from 'react'
import type { StudyTopic } from '@/types/learning'

// TODO: Create actual ContentService when needed
const ContentService = {
  getCachedTopic: (_topicId: string) => null,
  isLoading: (_topicId: string) => false,
  loadTopicContent: async (_topicId: string) => {
    throw new Error('ContentService not implemented yet')
  },
  clearCache: () => {},
  loadTopicIndex: async () => {
    throw new Error('ContentService not implemented yet')
  },
  preloadTopics: async (_topicIds: string[]) => {
    throw new Error('ContentService not implemented yet')
  }
}

export interface UseTopicContentReturn {
  topic: StudyTopic | null
  loading: boolean
  error: string | null
  refetch: () => void
  isDynamicContent: boolean
}

/**
 * Hook for loading topic content with caching and error handling
 */
export function useTopicContent(topicId: string | undefined): UseTopicContentReturn {
  const [topic, setTopic] = useState<StudyTopic | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isDynamicContent, setIsDynamicContent] = useState(false)

  const loadTopic = useCallback(async () => {
    if (!topicId) {
      setLoading(false)
      setError('No topic ID provided')
      setIsDynamicContent(false)
      return
    }

    // Check cache first for immediate response
    const cachedTopic = ContentService.getCachedTopic(topicId)
    if (cachedTopic) {
      setTopic(cachedTopic)
      setLoading(false)
      setError(null)
      setIsDynamicContent(true)
      return
    }

    // If already loading, wait for it
    if (ContentService.isLoading(topicId)) {
      try {
        const loadedTopic = await ContentService.loadTopicContent(topicId)
        setTopic(loadedTopic)
        setError(null)
        setIsDynamicContent(true)
      } catch (err) {
        console.error(`Error loading topic ${topicId}:`, err)
        // Try fallback approach
        const fallbackResult = await tryFallbackLoading(topicId, err)
        setTopic(fallbackResult.topic)
        setError(fallbackResult.error)
        setIsDynamicContent(fallbackResult.isDynamic)
      } finally {
        setLoading(false)
      }
      return
    }

    // Start loading
    setLoading(true)
    setError(null)

    try {
      const loadedTopic = await ContentService.loadTopicContent(topicId)
      setTopic(loadedTopic)
      setError(null)
      setIsDynamicContent(true)
    } catch (err) {
      console.error(`Error loading topic ${topicId}:`, err)
      // Try fallback approach
      const fallbackResult = await tryFallbackLoading(topicId, err)
      setTopic(fallbackResult.topic)
      setError(fallbackResult.error)
      setIsDynamicContent(fallbackResult.isDynamic)
    } finally {
      setLoading(false)
    }
  }, [topicId])

  const refetch = useCallback(() => {
    if (topicId) {
      // Clear cache for this topic to force refresh
      ContentService.clearCache()
      loadTopic()
    }
  }, [topicId, loadTopic])

  useEffect(() => {
    loadTopic()
  }, [loadTopic])

  return {
    topic,
    loading,
    error,
    refetch,
    isDynamicContent
  }
}

/**
 * Fallback loading strategy when dynamic content fails
 */
async function tryFallbackLoading(topicId: string, originalError: any): Promise<{
  topic: StudyTopic | null
  error: string | null
  isDynamic: boolean
}> {
  console.log(`Attempting fallback loading for topic ${topicId}`)
  
  try {
    // Create a minimal topic structure as fallback
    const fallbackTopic: StudyTopic = {
      id: topicId,
      title: `Study Topic ${topicId.toUpperCase()}`,
      description: 'Content is temporarily unavailable. Please try refreshing the page.',
      sections: [{
        id: 'placeholder',
        title: 'Content Loading',
        content: 'The study content for this topic is currently being loaded. Please refresh the page to try again.',
        importance: 1,
        subsections: [],
        practiceQuestions: [],
        mnemonics: [],
        estimatedReadTime: 1
      }],
      quickLookup: [],
      objectives: [],
      estimatedTime: 1,
      difficulty: 'Beginner',
      importance: 1,
      tags: [],
      sectionCount: 1
    }

    return {
      topic: fallbackTopic,
      error: `Content temporarily unavailable: ${originalError instanceof Error ? originalError.message : 'Unknown error'}`,
      isDynamic: false
    }
  } catch (fallbackError) {
    console.error('Fallback loading also failed:', fallbackError)
    
    return {
      topic: null,
      error: `Failed to load content: ${originalError instanceof Error ? originalError.message : 'Unknown error'}`,
      isDynamic: false
    }
  }
}

/**
 * Hook for loading the topics index
 */
export function useTopicIndex() {
  const [index, setIndex] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadIndex = async () => {
      try {
        setLoading(true)
        setError(null)
        const indexData = await ContentService.loadTopicIndex()
        setIndex(indexData)
      } catch (err) {
        console.error('Error loading topic index:', err)
        setError(err instanceof Error ? err.message : 'Failed to load topic index')
      } finally {
        setLoading(false)
      }
    }

    loadIndex()
  }, [])

  return { index, loading, error }
}

/**
 * Hook for preloading topics (useful for performance optimization)
 */
export function useTopicPreloader() {
  const [preloading, setPreloading] = useState(false)

  const preloadTopics = useCallback(async (topicIds: string[]) => {
    setPreloading(true)
    try {
      await ContentService.preloadTopics(topicIds)
    } catch (error) {
      console.warn('Error preloading topics:', error)
    } finally {
      setPreloading(false)
    }
  }, [])

  return {
    preloadTopics,
    preloading
  }
}