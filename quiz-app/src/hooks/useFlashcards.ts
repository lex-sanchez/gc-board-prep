import { useState, useEffect } from 'react';
import type { Flashcard } from '@/types/flashcard';

interface UseFlashcardsDataReturn {
  flashcards: Flashcard[];
  loading: boolean;
  error: string | null;
  loadFlashcards: () => Promise<void>;
  refreshFlashcards: () => Promise<void>;
}

/**
 * Hook for loading and managing flashcard data
 */
export function useFlashcardsData(): UseFlashcardsDataReturn {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadFlashcards = async () => {
    try {
      setLoading(true);
      setError(null);

      // First try to load from localStorage
      const storedCards = localStorage.getItem('flashcard-all-cards');
      if (storedCards) {
        const cards = JSON.parse(storedCards);
        setFlashcards(cards);
        setLoading(false);
        return;
      }

      // Load from JSON file
      const loadedFlashcards = await loadFlashcardsFromJSON();
      setFlashcards(loadedFlashcards);
      
      // Save to localStorage for future use
      localStorage.setItem('flashcard-all-cards', JSON.stringify(loadedFlashcards));
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load flashcards');
      console.error('Error loading flashcards:', err);
    } finally {
      setLoading(false);
    }
  };

  const refreshFlashcards = async () => {
    // Clear localStorage and reload
    localStorage.removeItem('flashcard-all-cards');
    await loadFlashcards();
  };

  useEffect(() => {
    loadFlashcards();
  }, []);

  return {
    flashcards,
    loading,
    error,
    loadFlashcards,
    refreshFlashcards
  };
}

/**
 * Load flashcards from JSON file
 */
async function loadFlashcardsFromJSON(): Promise<Flashcard[]> {
  try {
    // Import the JSON file directly (bundled in build)
    const flashcardsData = await import('@/data/flashcards.json');
    const rawFlashcards = flashcardsData.flashcards;

    // Convert to Flashcard objects with proper types
    return rawFlashcards.map((card: any) => ({
      id: card.id,
      question: card.question,
      answer: card.answer,
      topic: card.topic,
      topicNumber: card.topicNumber,
      questionNumber: card.questionNumber,
      isMarkedForReview: false,
      confidence: undefined,
      lastReviewedAt: undefined
    } as Flashcard));
  } catch (error) {
    console.error('Error loading flashcards from JSON:', error);
    throw new Error('Failed to load flashcards data');
  }
}

/**
 * Helper hook for formatting session duration
 */
export function useSessionTimer(startTime: Date) {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = Math.floor((now.getTime() - startTime.getTime()) / 1000);
      setDuration(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    duration,
    formattedDuration: formatDuration(duration)
  };
}