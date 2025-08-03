import { Progress } from '@/components/ui/progress';
import { Clock, Bookmark, TrendingUp, Target } from 'lucide-react';
import type { SessionStats } from '@/types/flashcard';
import { useSessionTimer } from '@/hooks/useFlashcards';

interface FlashcardProgressProps {
  currentIndex: number;
  totalCards: number;
  sessionStats: SessionStats;
  markedCount: number;
  className?: string;
  showDetailed?: boolean;
}

export function FlashcardProgress({
  currentIndex,
  totalCards,
  sessionStats,
  markedCount,
  className,
  showDetailed = true
}: FlashcardProgressProps) {
  const { formattedDuration } = useSessionTimer(sessionStats.startTime);
  
  const progressPercentage = totalCards > 0 ? ((currentIndex + 1) / totalCards) * 100 : 0;
  const completionPercentage = totalCards > 0 ? (sessionStats.viewedCards / totalCards) * 100 : 0;
  
  return (
    <div className={className}>
      <div className="mx-auto mb-6 w-full max-w-2xl">
        {/* Main progress indicator */}
        <div className="flex justify-between items-center mb-2 text-sm text-muted-foreground">
          <span>Card {currentIndex + 1} of {totalCards}</span>
          <span>{Math.round(progressPercentage)}% Progress</span>
        </div>
        
        <Progress 
          value={progressPercentage} 
          className="mb-4 h-2" 
        />
        
        {/* Detailed stats */}
        {showDetailed && (
          <div className="space-y-4">
            {/* Top stats row */}
            <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
              <div className="flex gap-2 items-center">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">{formattedDuration}</div>
                  <div className="text-xs text-muted-foreground">Study Time</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-center">
                <Target className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">{sessionStats.viewedCards}</div>
                  <div className="text-xs text-muted-foreground">Cards Viewed</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-center">
                <Bookmark className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">{markedCount}</div>
                  <div className="text-xs text-muted-foreground">Marked</div>
                </div>
              </div>
              
              <div className="flex gap-2 items-center">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="font-medium">{Math.round(completionPercentage)}%</div>
                  <div className="text-xs text-muted-foreground">Complete</div>
                </div>
              </div>
            </div>
            
            {/* Confidence breakdown */}
            {Object.values(sessionStats.confidenceBreakdown).some(count => count > 0) && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Confidence Breakdown</h4>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="flex justify-between items-center p-2 rounded bg-destructive/10">
                    <span className="font-medium text-destructive">Hard</span>
                    <span className="text-destructive">{sessionStats.confidenceBreakdown.low || 0}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-warning/10">
                    <span className="font-medium text-warning">Medium</span>
                    <span className="text-warning">{sessionStats.confidenceBreakdown.medium || 0}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-success/10">
                    <span className="font-medium text-success">Easy</span>
                    <span className="text-success">{sessionStats.confidenceBreakdown.high || 0}</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Secondary progress bar for completion */}
            {completionPercentage !== progressPercentage && (
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>Overall Completion</span>
                  <span>{Math.round(completionPercentage)}%</span>
                </div>
                <Progress 
                  value={completionPercentage} 
                  className="h-1" 
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}