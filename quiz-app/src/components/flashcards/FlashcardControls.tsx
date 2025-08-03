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
    <div className={cn("flex flex-col md:flex-row items-center justify-between gap-4", className)}>
      {/* Navigation controls */}
      <div className="flex items-center gap-2">
        {/* Jump to start */}
        {onJumpToStart && (
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10"
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
          className="h-10 w-10"
          disabled={!canGoPrevious}
          onClick={onPrevious}
          title="Previous card (← arrow key)"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        {/* Flip card */}
        <Button
          variant="default"
          className="min-w-[120px] relative"
          onClick={onFlip}
          title="Flip card (spacebar)"
        >
          <RotateCw className={cn(
            "h-4 w-4 mr-2 transition-transform duration-500",
            isFlipped && "rotate-180"
          )} />
          {isFlipped ? 'Show Question' : 'Show Answer'}
        </Button>
        
        {/* Next card */}
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10"
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
            className="h-10 w-10"
            disabled={currentIndex === totalCards - 1}
            onClick={onJumpToEnd}
            title="Jump to last card"
          >
            <SkipForward className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {/* Action buttons */}
      <div className="flex items-center gap-2">
        {/* Auto-play toggle */}
        {onToggleAutoPlay && (
          <Button
            variant={isAutoPlay ? "default" : "outline"}
            size="sm"
            className="gap-2"
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
          className="gap-2"
          onClick={onToggleMark}
          title="Mark for review (M key)"
        >
          <Bookmark className={cn(
            "h-4 w-4 transition-colors",
            isMarked && "fill-current"
          )} />
          {isMarked ? 'Unmark' : 'Mark'}
        </Button>
        
        {/* Shuffle */}
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={onShuffle}
          title="Shuffle cards (S key)"
        >
          <Shuffle className="h-4 w-4" />
          Shuffle
        </Button>
      </div>
    </div>
  );
}