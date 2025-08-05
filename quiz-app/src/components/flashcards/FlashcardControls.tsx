import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight, 
  RotateCw, 
  Bookmark, 
  Shuffle, 
  SkipForward,
  SkipBack,
  Play,
  Pause
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FlashcardControlsProps {
  currentIndex: number;
  totalCards: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
  isFlipped: boolean;
  isMarked: boolean;
  isAutoPlay?: boolean;
  onNext: () => void;
  onPrevious: () => void;
  onFlip: () => void;
  onToggleMark: () => void;
  onShuffle: () => void;
  onToggleAutoPlay?: () => void;
  onJumpToStart?: () => void;
  onJumpToEnd?: () => void;
  className?: string;
}

export function FlashcardControls({
  currentIndex,
  totalCards,
  canGoNext,
  canGoPrevious,
  isFlipped,
  isMarked,
  isAutoPlay = false,
  onNext,
  onPrevious,
  onFlip,
  onToggleMark,
  onShuffle,
  onToggleAutoPlay,
  onJumpToStart,
  onJumpToEnd,
  className
}: FlashcardControlsProps) {
  return (
    <div className={cn(
      "stats-card p-6 bg-gradient-to-r from-card/95 to-secondary/10 backdrop-blur-sm border-primary/20",
      className
    )}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Navigation controls */}
        <div className="flex items-center gap-3">
          {/* Jump to start */}
          {onJumpToStart && (
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 button-enhanced hover:scale-110 transition-all duration-200"
              disabled={currentIndex === 0}
              onClick={onJumpToStart}
              title="Jump to first card"
            >
              <SkipBack className="h-4 w-4" />
            </Button>
          )}
          
          {/* Previous card */}
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 button-enhanced hover:scale-110 transition-all duration-200"
            disabled={!canGoPrevious}
            onClick={onPrevious}
            title="Previous card (← arrow key)"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          {/* Flip card */}
          <Button
            variant="default"
            className="min-w-[140px] button-enhanced px-6 py-3 text-base font-semibold hover:scale-105 transition-all duration-200 relative overflow-hidden"
            onClick={onFlip}
            title="Flip card (spacebar)"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <RotateCw className={cn(
              "h-5 w-5 mr-2 transition-transform duration-500 relative z-10",
              isFlipped && "rotate-180"
            )} />
            <span className="relative z-10">
              {isFlipped ? 'Show Question' : 'Show Answer'}
            </span>
          </Button>
          
          {/* Next card */}
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 button-enhanced hover:scale-110 transition-all duration-200"
            disabled={!canGoNext}
            onClick={onNext}
            title="Next card (→ arrow key)"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          
          {/* Jump to end */}
          {onJumpToEnd && (
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 button-enhanced hover:scale-110 transition-all duration-200"
              disabled={currentIndex === totalCards - 1}
              onClick={onJumpToEnd}
              title="Jump to last card"
            >
              <SkipForward className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {/* Auto-play toggle */}
          {onToggleAutoPlay && (
            <Button
              variant={isAutoPlay ? "default" : "outline"}
              size="sm"
              className={cn(
                "gap-2 px-4 py-2 font-semibold hover:scale-105 transition-all duration-200",
                isAutoPlay 
                  ? "button-enhanced bg-gradient-to-r from-primary to-accent text-primary-foreground" 
                  : "button-enhanced bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20"
              )}
              onClick={onToggleAutoPlay}
              title="Toggle auto-play"
            >
              {isAutoPlay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              Auto-play
            </Button>
          )}
          
          {/* Mark for review */}
          <Button
            variant={isMarked ? "secondary" : "outline"}
            size="sm"
            className={cn(
              "gap-2 px-4 py-2 font-semibold hover:scale-105 transition-all duration-200",
              isMarked 
                ? "button-enhanced bg-gradient-to-r from-warning/20 to-warning/30 border-warning/40 text-warning" 
                : "button-enhanced bg-gradient-to-r from-warning/10 to-accent/10 border-warning/20"
            )}
            onClick={onToggleMark}
            title="Mark for review (M key)"
          >
            <Bookmark className={cn(
              "h-4 w-4 transition-all duration-200",
              isMarked && "fill-current scale-110"
            )} />
            {isMarked ? 'Unmark' : 'Mark'}
          </Button>
          
          {/* Shuffle */}
          <Button
            variant="outline"
            size="sm"
            className="gap-2 px-4 py-2 font-semibold button-enhanced bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20 hover:scale-105 transition-all duration-200"
            onClick={onShuffle}
            title="Shuffle cards (S key)"
          >
            <Shuffle className="h-4 w-4 hover:rotate-180 transition-transform duration-300" />
            Shuffle
          </Button>
        </div>
      </div>
    </div>
  );
}