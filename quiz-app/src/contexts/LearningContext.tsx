import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react'
import type { LearningState, LearningProgress, LearningPreferences, StudyTopic } from '@/types/learning'

// Import study guide data
import studyGuideIndex from '@/data/study-guides/index.json'

interface LearningContextType {
  state: LearningState
  dispatch: React.Dispatch<LearningAction>
  // Helper functions
  getTopics: () => StudyTopic[]
  getTopic: (topicId: string) => StudyTopic | null
  getProgress: (topicId: string) => LearningProgress
  updateProgress: (topicId: string, updates: Partial<LearningProgress>) => void
  markSectionComplete: (topicId: string, sectionId: string) => void
  toggleBookmark: (topicId: string, sectionId: string) => void
  updateNote: (sectionId: string, note: string) => void
  updatePreferences: (preferences: Partial<LearningPreferences>) => void
  getOverallProgress: () => { completed: number; total: number; percentage: number }
}

type LearningAction =
  | { type: 'SET_CURRENT_TOPIC'; payload: string }
  | { type: 'SET_CURRENT_SECTION'; payload: string }
  | { type: 'UPDATE_PROGRESS'; payload: { topicId: string; updates: Partial<LearningProgress> } }
  | { type: 'MARK_SECTION_COMPLETE'; payload: { topicId: string; sectionId: string } }
  | { type: 'TOGGLE_BOOKMARK'; payload: { topicId: string; sectionId: string } }
  | { type: 'UPDATE_NOTE'; payload: { sectionId: string; note: string } }
  | { type: 'UPDATE_PREFERENCES'; payload: Partial<LearningPreferences> }
  | { type: 'LOAD_SAVED_DATA'; payload: { progress: Record<string, LearningProgress>; preferences: LearningPreferences } }

const initialPreferences: LearningPreferences = {
  fontSize: 'medium',
  theme: 'auto',
  showProgressIndicators: true,
  autoBookmarkImportantSections: true
}

const initialState: LearningState = {
  currentTopic: undefined,
  currentSection: undefined,
  progress: {},
  bookmarks: [],
  notes: {},
  preferences: initialPreferences
}

function learningReducer(state: LearningState, action: LearningAction): LearningState {
  switch (action.type) {
    case 'SET_CURRENT_TOPIC': {
      return {
        ...state,
        currentTopic: action.payload,
        currentSection: undefined
      }
    }

    case 'SET_CURRENT_SECTION': {
      return {
        ...state,
        currentSection: action.payload
      }
    }

    case 'UPDATE_PROGRESS': {
      const { topicId, updates } = action.payload
      const currentProgress = state.progress[topicId] || createInitialProgress(topicId)
      
      return {
        ...state,
        progress: {
          ...state.progress,
          [topicId]: {
            ...currentProgress,
            ...updates,
            lastAccessed: new Date()
          }
        }
      }
    }

    case 'MARK_SECTION_COMPLETE': {
      const { topicId, sectionId } = action.payload
      const currentProgress = state.progress[topicId] || createInitialProgress(topicId)
      const completedSections = new Set(currentProgress.completedSections)
      
      if (!completedSections.has(sectionId)) {
        completedSections.add(sectionId)
      }
      
      // Calculate completion rate based on topic's total sections
      const topic = getTopicById(topicId)
      const totalSections = topic?.sectionCount || 1
      const completionRate = Math.round((completedSections.size / totalSections) * 100)
      
      return {
        ...state,
        progress: {
          ...state.progress,
          [topicId]: {
            ...currentProgress,
            completedSections: Array.from(completedSections),
            completionRate,
            lastAccessed: new Date()
          }
        }
      }
    }

    case 'TOGGLE_BOOKMARK': {
      const { topicId, sectionId } = action.payload
      const currentProgress = state.progress[topicId] || createInitialProgress(topicId)
      const bookmarkedSections = new Set(currentProgress.bookmarkedSections)
      const globalBookmarks = new Set(state.bookmarks)
      
      if (bookmarkedSections.has(sectionId)) {
        bookmarkedSections.delete(sectionId)
        globalBookmarks.delete(sectionId)
      } else {
        bookmarkedSections.add(sectionId)
        globalBookmarks.add(sectionId)
      }
      
      return {
        ...state,
        bookmarks: Array.from(globalBookmarks),
        progress: {
          ...state.progress,
          [topicId]: {
            ...currentProgress,
            bookmarkedSections: Array.from(bookmarkedSections),
            lastAccessed: new Date()
          }
        }
      }
    }

    case 'UPDATE_NOTE': {
      const { sectionId, note } = action.payload
      return {
        ...state,
        notes: {
          ...state.notes,
          [sectionId]: note
        }
      }
    }

    case 'UPDATE_PREFERENCES': {
      return {
        ...state,
        preferences: {
          ...state.preferences,
          ...action.payload
        }
      }
    }

    case 'LOAD_SAVED_DATA': {
      const { progress, preferences } = action.payload
      return {
        ...state,
        progress,
        preferences
      }
    }

    default:
      return state
  }
}

function createInitialProgress(topicId: string): LearningProgress {
  return {
    topicId,
    completedSections: [],
    bookmarkedSections: [],
    notes: {},
    timeSpent: 0,
    lastAccessed: new Date(),
    completionRate: 0
  }
}

// Helper function to get topic by ID
function getTopicById(topicId: string): any {
  return studyGuideIndex.topics.find(topic => topic.id === topicId)
}

const LearningContext = createContext<LearningContextType | null>(null)

export function LearningProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(learningReducer, initialState)

  // Load saved data from localStorage on mount
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('gc-learning-progress')
      const savedPreferences = localStorage.getItem('gc-learning-preferences')
      
      if (savedProgress || savedPreferences) {
        dispatch({
          type: 'LOAD_SAVED_DATA',
          payload: {
            progress: savedProgress ? JSON.parse(savedProgress) : {},
            preferences: savedPreferences ? JSON.parse(savedPreferences) : initialPreferences
          }
        })
      }
    } catch (error) {
      console.error('Error loading saved learning data:', error)
    }
  }, [])

  // Save progress to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('gc-learning-progress', JSON.stringify(state.progress))
    } catch (error) {
      console.error('Error saving learning progress:', error)
    }
  }, [state.progress])

  // Save preferences to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem('gc-learning-preferences', JSON.stringify(state.preferences))
    } catch (error) {
      console.error('Error saving learning preferences:', error)
    }
  }, [state.preferences])

  // Helper functions
  const getTopics = (): StudyTopic[] => {
    return studyGuideIndex.topics as StudyTopic[]
  }

  const getTopic = (topicId: string): StudyTopic | null => {
    const topic = studyGuideIndex.topics.find(t => t.id === topicId)
    return (topic as StudyTopic) || null
  }

  const getProgress = (topicId: string): LearningProgress => {
    return state.progress[topicId] || createInitialProgress(topicId)
  }

  const updateProgress = (topicId: string, updates: Partial<LearningProgress>) => {
    dispatch({ type: 'UPDATE_PROGRESS', payload: { topicId, updates } })
  }

  const markSectionComplete = (topicId: string, sectionId: string) => {
    dispatch({ type: 'MARK_SECTION_COMPLETE', payload: { topicId, sectionId } })
  }

  const toggleBookmark = (topicId: string, sectionId: string) => {
    dispatch({ type: 'TOGGLE_BOOKMARK', payload: { topicId, sectionId } })
  }

  const updateNote = (sectionId: string, note: string) => {
    dispatch({ type: 'UPDATE_NOTE', payload: { sectionId, note } })
  }

  const updatePreferences = (preferences: Partial<LearningPreferences>) => {
    dispatch({ type: 'UPDATE_PREFERENCES', payload: preferences })
  }

  const getOverallProgress = () => {
    const topics = getTopics()
    const totalSections = topics.reduce((sum, topic) => sum + (topic.sectionCount || 0), 0)
    const completedSections = Object.values(state.progress).reduce(
      (sum, progress) => sum + progress.completedSections.length, 0
    )
    
    return {
      completed: completedSections,
      total: totalSections,
      percentage: totalSections > 0 ? Math.round((completedSections / totalSections) * 100) : 0
    }
  }

  const value: LearningContextType = {
    state,
    dispatch,
    getTopics,
    getTopic,
    getProgress,
    updateProgress,
    markSectionComplete,
    toggleBookmark,
    updateNote,
    updatePreferences,
    getOverallProgress
  }

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  )
}

export function useLearning() {
  const context = useContext(LearningContext)
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider')
  }
  return context
}