import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
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
        <div className="stats-card p-8 text-center space-y-6 max-w-md">
          <div className="stats-icon mx-auto">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-title">Loading Flashcards</h3>
            <p className="text-subtitle">
              Preparing your study materials for optimal learning experience
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={cn("space-y-6", className)}>
        <div className="stats-card p-8 text-center space-y-6 max-w-md mx-auto">
          <div className="stats-icon mx-auto bg-destructive/10">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-title text-destructive">Loading Error</h3>
              <p className="text-subtitle">
                Failed to load flashcards: {error}
              </p>
            </div>
            <Button 
              onClick={() => window.location.reload()} 
              className="button-enhanced"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // No cards state
  if (session.cards.length === 0) {
    return (
      <div className={cn("text-center space-y-6", className)}>
        <div className="stats-card p-8 text-center space-y-6 max-w-lg mx-auto">
          <div className="stats-icon mx-auto bg-warning/10">
            <Settings className="h-8 w-8 text-warning" />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-title">No Cards Available</h3>
              <p className="text-subtitle">
                {session.studyMode === 'reviewOnly' 
                  ? "You haven't marked any cards for review yet. Mark some cards while studying to create a review set."
                  : "No flashcards match your current filter settings. Try selecting different topics or study modes."
                }
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(true)}
                className="button-enhanced"
              >
                <Settings className="h-4 w-4 mr-2" />
                Change Filters
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowModeSelector(true)}
                className="button-enhanced"
              >
                Change Study Mode
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const cardCounts = getCardCounts();

  return (
    <div className={cn("space-y-8", className)}>
      {/* Settings panels */}
      {showModeSelector && (
        <div className="dashboard-section">
          <div className="stats-card p-6 space-y-4">
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
                className="button-enhanced"
              >
                <X className="h-4 w-4 mr-2" />
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {showFilters && (
        <div className="dashboard-section">
          <div className="stats-card p-6">
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
        </div>
      )}

      {/* Main flashcard interface */}
      {!showModeSelector && !showFilters && currentCard && (
        <>
          {/* Progress indicator */}
          <div className="dashboard-section">
            <FlashcardProgress
              currentIndex={session.currentIndex}
              totalCards={session.cards.length}
              sessionStats={session.sessionStats}
              markedCount={session.markedCards.length}
            />
          </div>

          {/* Main flashcard */}
          <div className="dashboard-section">
            <div className="flex justify-center">
              <FlashcardCard
                card={currentCard}
                isFlipped={session.isCardFlipped}
                onFlip={flipCard}
                onConfidence={setConfidence}
                showConfidenceButtons={session.isCardFlipped}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="dashboard-section">
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
          </div>

          {/* Quick settings */}
          <div className="dashboard-section">
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowModeSelector(true)}
                className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 backdrop-blur-sm hover:scale-105 transition-transform"
              >
                Study Mode: {session.studyMode}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(true)}
                className="bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20 backdrop-blur-sm hover:scale-105 transition-transform"
              >
                <Settings className="h-4 w-4 mr-2" />
                Topics ({session.selectedTopics.length})
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}