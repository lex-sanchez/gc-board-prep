export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  topic: Topic;
  topicNumber: number;
  questionNumber: number;
  isMarkedForReview: boolean;
  lastReviewedAt?: Date;
  confidence?: 'low' | 'medium' | 'high';
}

export interface Topic {
  id: string;
  name: string;
  number: number;
}

export interface FlashcardSession {
  cards: Flashcard[];
  currentIndex: number;
  studyMode: StudyMode;
  selectedTopics: number[];
  markedCards: string[];
  sessionStats: SessionStats;
  isCardFlipped: boolean;
}

export type StudyMode = 'sequential' | 'byTopic' | 'shuffle' | 'reviewOnly';

export interface SessionStats {
  totalCards: number;
  viewedCards: number;
  markedForReview: number;
  startTime: Date;
  confidenceBreakdown: Record<string, number>;
  sessionDuration: number;
}

export interface FlashcardPreferences {
  defaultStudyMode: StudyMode;
  autoAdvanceOnFlip: boolean;
  showProgress: boolean;
  enableKeyboardShortcuts: boolean;
  selectedTopics: number[];
}

// Topic definitions matching the quick-fire questions structure
export const FLASHCARD_TOPICS: Record<number, Topic> = {
  1: { id: 'topic1', name: 'Chromosomal Disorders', number: 1 },
  2: { id: 'topic2', name: 'Cancer Genetics', number: 2 },
  3: { id: 'topic3', name: 'Organ System Disorders', number: 3 },
  4: { id: 'topic4', name: 'Neurological & Developmental', number: 4 },
  5: { id: 'topic5', name: 'Metabolic Disorders', number: 5 },
  6: { id: 'topic6', name: 'Specialized Organ Systems', number: 6 }
} as const;

export interface FlashcardContextType {
  session: FlashcardSession;
  preferences: FlashcardPreferences;
  // Loading states
  loading: boolean;
  error: string | null;
  // Actions
  nextCard: () => void;
  previousCard: () => void;
  flipCard: () => void;
  toggleMarkForReview: () => void;
  setConfidence: (confidence: 'low' | 'medium' | 'high') => void;
  setStudyMode: (mode: StudyMode) => void;
  setSelectedTopics: (topics: number[]) => void;
  shuffleCards: () => void;
  resetSession: () => void;
  // State
  canGoNext: boolean;
  canGoPrevious: boolean;
  currentCard?: Flashcard;
  progressPercentage: number;
}