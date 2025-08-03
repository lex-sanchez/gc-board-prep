import { createContext, useContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { 
  Flashcard, 
  FlashcardSession, 
  FlashcardPreferences, 
  FlashcardContextType, 
  StudyMode
} from '@/types/flashcard';
import { FlashcardParser } from '@/utils/flashcardParser';
import { useFlashcardsData } from '@/hooks/useFlashcards';

// Actions for the reducer
type FlashcardAction =
  | { type: 'SET_CARDS'; payload: Flashcard[] }
  | { type: 'NEXT_CARD' }
  | { type: 'PREVIOUS_CARD' }
  | { type: 'FLIP_CARD' }
  | { type: 'SET_CURRENT_INDEX'; payload: number }
  | { type: 'TOGGLE_MARK_FOR_REVIEW' }
  | { type: 'SET_CONFIDENCE'; payload: 'low' | 'medium' | 'high' }
  | { type: 'SET_STUDY_MODE'; payload: StudyMode }
  | { type: 'SET_SELECTED_TOPICS'; payload: number[] }
  | { type: 'SHUFFLE_CARDS' }
  | { type: 'RESET_SESSION' }
  | { type: 'UPDATE_PREFERENCES'; payload: Partial<FlashcardPreferences> }
  | { type: 'LOAD_FROM_STORAGE'; payload: { session: FlashcardSession; preferences: FlashcardPreferences } };

// Initial state
const initialSession: FlashcardSession = {
  cards: [],
  currentIndex: 0,
  studyMode: 'sequential',
  selectedTopics: [1, 2, 3, 4, 5, 6],
  markedCards: [],
  isCardFlipped: false,
  sessionStats: {
    totalCards: 0,
    viewedCards: 0,
    markedForReview: 0,
    startTime: new Date(),
    confidenceBreakdown: { low: 0, medium: 0, high: 0 },
    sessionDuration: 0
  }
};

const initialPreferences: FlashcardPreferences = {
  defaultStudyMode: 'sequential',
  autoAdvanceOnFlip: false,
  showProgress: true,
  enableKeyboardShortcuts: true,
  selectedTopics: [1, 2, 3, 4, 5, 6]
};

// State interface
interface FlashcardState {
  session: FlashcardSession;
  preferences: FlashcardPreferences;
  allCards: Flashcard[];
}

const initialState: FlashcardState = {
  session: initialSession,
  preferences: initialPreferences,
  allCards: []
};

// Reducer
function flashcardReducer(state: FlashcardState, action: FlashcardAction): FlashcardState {
  switch (action.type) {
    case 'SET_CARDS': {
      const allCards = action.payload;
      const filteredCards = getFilteredCards(allCards, state.session.studyMode, state.session.selectedTopics);
      
      return {
        ...state,
        allCards,
        session: {
          ...state.session,
          cards: filteredCards,
          currentIndex: 0,
          isCardFlipped: false,
          sessionStats: {
            ...state.session.sessionStats,
            totalCards: filteredCards.length,
            startTime: new Date()
          }
        }
      };
    }

    case 'NEXT_CARD': {
      const nextIndex = Math.min(state.session.currentIndex + 1, state.session.cards.length - 1);
      return {
        ...state,
        session: {
          ...state.session,
          currentIndex: nextIndex,
          isCardFlipped: false,
          sessionStats: {
            ...state.session.sessionStats,
            viewedCards: Math.max(state.session.sessionStats.viewedCards, nextIndex + 1)
          }
        }
      };
    }

    case 'PREVIOUS_CARD': {
      const prevIndex = Math.max(state.session.currentIndex - 1, 0);
      return {
        ...state,
        session: {
          ...state.session,
          currentIndex: prevIndex,
          isCardFlipped: false
        }
      };
    }

    case 'FLIP_CARD':
      return {
        ...state,
        session: {
          ...state.session,
          isCardFlipped: !state.session.isCardFlipped
        }
      };

    case 'SET_CURRENT_INDEX':
      return {
        ...state,
        session: {
          ...state.session,
          currentIndex: Math.max(0, Math.min(action.payload, state.session.cards.length - 1)),
          isCardFlipped: false
        }
      };

    case 'TOGGLE_MARK_FOR_REVIEW': {
      const currentCard = state.session.cards[state.session.currentIndex];
      if (!currentCard) return state;

      const updatedCards = state.session.cards.map(card =>
        card.id === currentCard.id
          ? { ...card, isMarkedForReview: !card.isMarkedForReview }
          : card
      );

      const updatedAllCards = state.allCards.map(card =>
        card.id === currentCard.id
          ? { ...card, isMarkedForReview: !card.isMarkedForReview }
          : card
      );

      const markedCount = updatedCards.filter(card => card.isMarkedForReview).length;

      return {
        ...state,
        allCards: updatedAllCards,
        session: {
          ...state.session,
          cards: updatedCards,
          sessionStats: {
            ...state.session.sessionStats,
            markedForReview: markedCount
          }
        }
      };
    }

    case 'SET_CONFIDENCE': {
      const currentCard = state.session.cards[state.session.currentIndex];
      if (!currentCard) return state;

      const updatedCards = state.session.cards.map(card =>
        card.id === currentCard.id
          ? { ...card, confidence: action.payload, lastReviewedAt: new Date() }
          : card
      );

      const updatedAllCards = state.allCards.map(card =>
        card.id === currentCard.id
          ? { ...card, confidence: action.payload, lastReviewedAt: new Date() }
          : card
      );

      // Update confidence breakdown
      const confidenceBreakdown = { ...state.session.sessionStats.confidenceBreakdown };
      confidenceBreakdown[action.payload] = (confidenceBreakdown[action.payload] || 0) + 1;

      return {
        ...state,
        allCards: updatedAllCards,
        session: {
          ...state.session,
          cards: updatedCards,
          sessionStats: {
            ...state.session.sessionStats,
            confidenceBreakdown
          }
        }
      };
    }

    case 'SET_STUDY_MODE': {
      const filteredCards = getFilteredCards(state.allCards, action.payload, state.session.selectedTopics);
      
      return {
        ...state,
        session: {
          ...state.session,
          studyMode: action.payload,
          cards: filteredCards,
          currentIndex: 0,
          isCardFlipped: false,
          sessionStats: {
            ...state.session.sessionStats,
            totalCards: filteredCards.length
          }
        }
      };
    }

    case 'SET_SELECTED_TOPICS': {
      const filteredCards = getFilteredCards(state.allCards, state.session.studyMode, action.payload);
      
      return {
        ...state,
        session: {
          ...state.session,
          selectedTopics: action.payload,
          cards: filteredCards,
          currentIndex: 0,
          isCardFlipped: false,
          sessionStats: {
            ...state.session.sessionStats,
            totalCards: filteredCards.length
          }
        }
      };
    }

    case 'SHUFFLE_CARDS': {
      const shuffledCards = FlashcardParser.shuffleFlashcards(state.session.cards);
      
      return {
        ...state,
        session: {
          ...state.session,
          cards: shuffledCards,
          currentIndex: 0,
          isCardFlipped: false
        }
      };
    }

    case 'RESET_SESSION':
      return {
        ...state,
        session: {
          ...initialSession,
          cards: state.session.cards,
          selectedTopics: state.session.selectedTopics,
          studyMode: state.session.studyMode,
          sessionStats: {
            ...initialSession.sessionStats,
            totalCards: state.session.cards.length,
            startTime: new Date()
          }
        }
      };

    case 'UPDATE_PREFERENCES':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          ...action.payload
        }
      };

    case 'LOAD_FROM_STORAGE':
      return {
        ...state,
        session: action.payload.session,
        preferences: action.payload.preferences
      };

    default:
      return state;
  }
}

// Helper function to filter cards based on study mode and selected topics
function getFilteredCards(allCards: Flashcard[], studyMode: StudyMode, selectedTopics: number[]): Flashcard[] {
  let filteredCards = FlashcardParser.filterByTopics(allCards, selectedTopics);
  
  if (studyMode === 'reviewOnly') {
    filteredCards = FlashcardParser.filterMarkedForReview(filteredCards);
  }
  
  if (studyMode === 'shuffle') {
    filteredCards = FlashcardParser.shuffleFlashcards(filteredCards);
  }
  
  return filteredCards;
}

// Context
const FlashcardContext = createContext<FlashcardContextType | undefined>(undefined);

// Storage keys
const STORAGE_KEYS = {
  SESSION: 'flashcard-session',
  PREFERENCES: 'flashcard-preferences',
  ALL_CARDS: 'flashcard-all-cards'
};

// Provider component
interface FlashcardProviderProps {
  children: ReactNode;
}

export function FlashcardProvider({ children }: FlashcardProviderProps) {
  const [state, dispatch] = useReducer(flashcardReducer, initialState);
  const { flashcards, loading, error } = useFlashcardsData();

  // Load flashcards from the hook
  useEffect(() => {
    if (flashcards.length > 0) {
      dispatch({ type: 'SET_CARDS', payload: flashcards });
    }
  }, [flashcards]);

  // Load data from localStorage on mount
  useEffect(() => {
    const loadStoredData = () => {
      try {
        const storedSession = localStorage.getItem(STORAGE_KEYS.SESSION);
        const storedPreferences = localStorage.getItem(STORAGE_KEYS.PREFERENCES);

        if (storedSession && storedPreferences) {
          dispatch({
            type: 'LOAD_FROM_STORAGE',
            payload: {
              session: JSON.parse(storedSession),
              preferences: JSON.parse(storedPreferences)
            }
          });
        }
      } catch (error) {
        console.error('Error loading stored flashcard data:', error);
      }
    };

    loadStoredData();
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(state.session));
      localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(state.preferences));
      if (state.allCards.length > 0) {
        localStorage.setItem(STORAGE_KEYS.ALL_CARDS, JSON.stringify(state.allCards));
      }
    } catch (error) {
      console.error('Error saving flashcard data to storage:', error);
    }
  }, [state]);

  // Context value
  const contextValue: FlashcardContextType = {
    session: state.session,
    preferences: state.preferences,
    loading,
    error,
    
    // Actions
    nextCard: () => dispatch({ type: 'NEXT_CARD' }),
    previousCard: () => dispatch({ type: 'PREVIOUS_CARD' }),
    flipCard: () => dispatch({ type: 'FLIP_CARD' }),
    toggleMarkForReview: () => dispatch({ type: 'TOGGLE_MARK_FOR_REVIEW' }),
    setConfidence: (confidence) => dispatch({ type: 'SET_CONFIDENCE', payload: confidence }),
    setStudyMode: (mode) => dispatch({ type: 'SET_STUDY_MODE', payload: mode }),
    setSelectedTopics: (topics) => dispatch({ type: 'SET_SELECTED_TOPICS', payload: topics }),
    shuffleCards: () => dispatch({ type: 'SHUFFLE_CARDS' }),
    resetSession: () => dispatch({ type: 'RESET_SESSION' }),
    
    // Computed state
    canGoNext: state.session.currentIndex < state.session.cards.length - 1,
    canGoPrevious: state.session.currentIndex > 0,
    currentCard: state.session.cards[state.session.currentIndex],
    progressPercentage: state.session.cards.length > 0 
      ? ((state.session.currentIndex + 1) / state.session.cards.length) * 100 
      : 0
  };

  return (
    <FlashcardContext.Provider value={contextValue}>
      {children}
    </FlashcardContext.Provider>
  );
}

// Hook to use the context
export function useFlashcards() {
  const context = useContext(FlashcardContext);
  if (context === undefined) {
    throw new Error('useFlashcards must be used within a FlashcardProvider');
  }
  return context;
}