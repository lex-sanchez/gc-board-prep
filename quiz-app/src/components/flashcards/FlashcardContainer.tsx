import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FlashcardCard } from './FlashcardCard';
import { FlashcardControls } from './FlashcardControls';
import { FlashcardProgress } from './FlashcardProgress';
import { FlashcardFilters } from './FlashcardFilters';
import { StudyModeSelector } from './StudyModeSelector';
import { useFlashcards } from '@/contexts/FlashcardContext';
import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import { AlertCircle, Settings, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FlashcardContainerProps {
  className?: string;
}

export function FlashcardContainer({ className }: FlashcardContainerProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [showModeSelector, setShowModeSelector] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [autoPlayInterval, setAutoPlayInterval] = useState<NodeJS.Timeout | null>(null);

  const {
    session,
    loading,
    error,
    nextCard,
    previousCard,
    flipCard,
    toggleMarkForReview,
    setConfidence,
    shuffleCards,
    setStudyMode,
    setSelectedTopics,
    canGoNext,
    canGoPrevious,
    currentCard,
    // progressPercentage (unused)
  } = useFlashcards();

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && currentCard && !session.isCardFlipped) {
      const interval = setTimeout(() => {
        flipCard();
      }, 3000); // Auto-flip after 3 seconds
      
      setAutoPlayInterval(interval);
      return () => clearTimeout(interval);
    }
    
    if (autoPlay && currentCard && session.isCardFlipped) {
      const interval = setTimeout(() => {
        if (canGoNext) {
          nextCard();
        } else {
          setAutoPlay(false); // Stop auto-play at end
        }
      }, 2000); // Auto-advance after 2 seconds
      
      setAutoPlayInterval(interval);
      return () => clearTimeout(interval);
    }

    return () => {
      if (autoPlayInterval) {
        clearTimeout(autoPlayInterval);
        setAutoPlayInterval(null);
      }
    };
  }, [autoPlay, currentCard, session.isCardFlipped, canGoNext, nextCard, flipCard]);

  // Keyboard navigation
  useKeyboardNavigation({
    enabled: true,
    onEscape: () => {
      setShowFilters(false);
      setShowModeSelector(false);
      setAutoPlay(false);
    }
  });

  const handleToggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
    if (autoPlayInterval) {
      clearTimeout(autoPlayInterval);
      setAutoPlayInterval(null);
    }
  };

  const handleJumpToStart = () => {
    // This would need to be implemented in the context
    setSelectedTopics(session.selectedTopics); // Reset to trigger index 0
  };

  const handleJumpToEnd = () => {
    // This would need to be implemented in the context
    // For now, we can simulate by going to last card
    for (let i = session.currentIndex; i < session.cards.length - 1; i++) {
      if (canGoNext) nextCard();
    }
  };

  const getCardCounts = () => {
    const byTopic: Record<number, number> = {};
    session.cards.forEach(card => {
      byTopic[card.topicNumber] = (byTopic[card.topicNumber] || 0) + 1;
    });
    
    return {
      total: session.cards.length,
      byTopic,
      marked: session.cards.filter(card => card.isMarkedForReview).length
    };
  };

  // Loading state
  if (loading) {
    return (
      <div className={cn("flex items-center justify-center min-h-[400px]", className)}>
        <div className="text-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
          <div>
            <h3 className="font-semibold">Loading Flashcards...</h3>
            <p className="text-sm text-muted-foreground">
              Preparing your study materials
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={cn("space-y-4", className)}>
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Failed to load flashcards: {error}
          </AlertDescription>
        </Alert>
        <div className="text-center">
          <Button onClick={() => window.location.reload()} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  // No cards state
  if (session.cards.length === 0) {
    return (
      <div className={cn("text-center space-y-4", className)}>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">No Cards Available</h3>
          <p className="text-muted-foreground">
            {session.studyMode === 'reviewOnly' 
              ? "You haven't marked any cards for review yet. Mark some cards while studying to create a review set."
              : "No flashcards match your current filter settings. Try selecting different topics or study modes."
            }
          </p>
        </div>
        
        <div className="flex justify-center gap-2">
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(true)}
          >
            <Settings className="h-4 w-4 mr-2" />
            Change Filters
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setShowModeSelector(true)}
          >
            Change Study Mode
          </Button>
        </div>
      </div>
    );
  }

  const cardCounts = getCardCounts();

  return (
    <div className={cn("space-y-6", className)}>
      {/* Settings panels */}
      {showModeSelector && (
        <div className="space-y-4">
          <StudyModeSelector
            currentMode={session.studyMode}
            onModeSelect={(mode) => {
              setStudyMode(mode);
              setShowModeSelector(false);
            }}
            cardCounts={cardCounts}
          />
          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => setShowModeSelector(false)}
            >
              <X className="h-4 w-4 mr-2" />
              Close
            </Button>
          </div>
        </div>
      )}

      {showFilters && (
        <div className="space-y-4">
          <FlashcardFilters
            selectedTopics={session.selectedTopics}
            onTopicsChange={(topics) => {
              setSelectedTopics(topics);
              setShowFilters(false);
            }}
            cardCounts={cardCounts.byTopic}
            onClose={() => setShowFilters(false)}
          />
        </div>
      )}

      {/* Main flashcard interface */}
      {!showModeSelector && !showFilters && currentCard && (
        <>
          {/* Progress indicator */}
          <FlashcardProgress
            currentIndex={session.currentIndex}
            totalCards={session.cards.length}
            sessionStats={session.sessionStats}
            markedCount={session.markedCards.length}
          />

          {/* Main flashcard */}
          <div className="flex justify-center">
            <FlashcardCard
              card={currentCard}
              isFlipped={session.isCardFlipped}
              onFlip={flipCard}
              onConfidence={setConfidence}
              showConfidenceButtons={session.isCardFlipped}
            />
          </div>

          {/* Controls */}
          <FlashcardControls
            currentIndex={session.currentIndex}
            totalCards={session.cards.length}
            canGoNext={canGoNext}
            canGoPrevious={canGoPrevious}
            isFlipped={session.isCardFlipped}
            isMarked={currentCard.isMarkedForReview}
            isAutoPlay={autoPlay}
            onNext={nextCard}
            onPrevious={previousCard}
            onFlip={flipCard}
            onToggleMark={toggleMarkForReview}
            onShuffle={shuffleCards}
            onToggleAutoPlay={handleToggleAutoPlay}
            onJumpToStart={handleJumpToStart}
            onJumpToEnd={handleJumpToEnd}
          />

          {/* Quick settings */}
          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowModeSelector(true)}
            >
              Study Mode: {session.studyMode}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(true)}
            >
              <Settings className="h-4 w-4 mr-2" />
              Topics ({session.selectedTopics.length})
            </Button>
          </div>
        </>
      )}
    </div>
  );
}