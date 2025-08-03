import { useEffect, useCallback } from 'react';
import { useFlashcards } from '@/contexts/FlashcardContext';

interface UseKeyboardNavigationOptions {
  enabled?: boolean;
  onEscape?: () => void;
  onFullscreen?: () => void;
}

export function useKeyboardNavigation(options: UseKeyboardNavigationOptions = {}) {
  const { enabled = true, onEscape, onFullscreen } = options;
  const {
    nextCard,
    previousCard,
    flipCard,
    toggleMarkForReview,
    setConfidence,
    shuffleCards,
    canGoNext,
    canGoPrevious,
    preferences
  } = useFlashcards();

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    // Don't handle keyboard shortcuts if disabled or if user is typing in an input
    if (!enabled || !preferences.enableKeyboardShortcuts) {
      return;
    }

    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      return;
    }

    // Prevent default behavior for handled keys
    const handledKeys = [' ', 'ArrowLeft', 'ArrowRight', 'm', 's', '1', '2', '3', 'Escape', 'f'];
    if (handledKeys.includes(event.key)) {
      event.preventDefault();
    }

    switch (event.key) {
      case ' ': // Spacebar - flip card
        flipCard();
        break;
        
      case 'ArrowLeft': // Previous card
        if (canGoPrevious) {
          previousCard();
        }
        break;
        
      case 'ArrowRight': // Next card
        if (canGoNext) {
          nextCard();
        }
        break;
        
      case 'm': // Mark for review
      case 'M':
        toggleMarkForReview();
        break;
        
      case 's': // Shuffle
      case 'S':
        shuffleCards();
        break;
        
      case '1': // Low confidence
        setConfidence('low');
        break;
        
      case '2': // Medium confidence
        setConfidence('medium');
        break;
        
      case '3': // High confidence
        setConfidence('high');
        break;
        
      case 'Escape': // Escape
        if (onEscape) {
          onEscape();
        }
        break;
        
      case 'f': // Fullscreen toggle
      case 'F':
        if (onFullscreen) {
          onFullscreen();
        }
        break;
        
      default:
        return; // Don't prevent default for unhandled keys
    }
  }, [
    enabled,
    preferences.enableKeyboardShortcuts,
    flipCard,
    nextCard,
    previousCard,
    toggleMarkForReview,
    setConfidence,
    shuffleCards,
    canGoNext,
    canGoPrevious,
    onEscape,
    onFullscreen
  ]);

  useEffect(() => {
    if (!enabled || !preferences.enableKeyboardShortcuts) {
      return;
    }

    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress, enabled, preferences.enableKeyboardShortcuts]);

  // Return the keyboard shortcuts for display in UI
  return {
    shortcuts: [
      { key: 'Space', description: 'Flip card' },
      { key: '← →', description: 'Navigate cards' },
      { key: 'M', description: 'Mark for review' },
      { key: 'S', description: 'Shuffle cards' },
      { key: '1,2,3', description: 'Set confidence' },
      { key: 'Esc', description: 'Exit' },
      { key: 'F', description: 'Fullscreen' }
    ]
  };
}