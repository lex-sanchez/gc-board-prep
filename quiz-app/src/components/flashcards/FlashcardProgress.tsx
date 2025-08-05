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
      <div className="stats-card mx-auto w-full max-w-4xl p-6">
        {/* Main progress indicator */}
        <div className="flex justify-between items-center mb-4 text-sm">
          <span className="font-semibold text-foreground">
            Card {currentIndex + 1} of {totalCards}
          </span>
          <span className="font-semibold text-primary">
            {Math.round(progressPercentage)}% Progress
          </span>
        </div>
        
        <div className="relative mb-6">
          <Progress 
            value={progressPercentage} 
            className="h-3 bg-gradient-to-r from-muted/30 to-muted/50 shadow-inner" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full opacity-50 blur-sm pointer-events-none"></div>
        </div>
        
        {/* Detailed stats */}
        {showDetailed && (
          <div className="space-y-6">
            {/* Top stats row */}
            <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
              <div className="stats-card p-4 hover:scale-105 transition-transform">
                <div className="flex gap-3 items-center">
                  <div className="stats-icon">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="stats-number text-lg">{formattedDuration}</div>
                    <div className="text-xs text-muted-foreground font-medium">Study Time</div>
                  </div>
                </div>
              </div>
              
              <div className="stats-card p-4 hover:scale-105 transition-transform">
                <div className="flex gap-3 items-center">
                  <div className="stats-icon">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="stats-number text-lg">{sessionStats.viewedCards}</div>
                    <div className="text-xs text-muted-foreground font-medium">Cards Viewed</div>
                  </div>
                </div>
              </div>
              
              <div className="stats-card p-4 hover:scale-105 transition-transform">
                <div className="flex gap-3 items-center">
                  <div className="stats-icon">
                    <Bookmark className="w-5 h-5 text-warning" />
                  </div>
                  <div>
                    <div className="stats-number text-lg">{markedCount}</div>
                    <div className="text-xs text-muted-foreground font-medium">Marked</div>
                  </div>
                </div>
              </div>
              
              <div className="stats-card p-4 hover:scale-105 transition-transform">
                <div className="flex gap-3 items-center">
                  <div className="stats-icon">
                    <TrendingUp className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="stats-number text-lg">{Math.round(completionPercentage)}%</div>
                    <div className="text-xs text-muted-foreground font-medium">Complete</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Confidence breakdown */}
            {Object.values(sessionStats.confidenceBreakdown).some(count => count > 0) && (
              <div className="space-y-4">
                <h4 className="text-title text-center">Confidence Breakdown</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="stats-card p-4 bg-gradient-to-br from-destructive/10 to-destructive/20 border-destructive/20 hover:scale-105 transition-transform">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-destructive">Hard</span>
                      <span className="stats-number text-destructive">
                        {sessionStats.confidenceBreakdown.low || 0}
                      </span>
                    </div>
                  </div>
                  <div className="stats-card p-4 bg-gradient-to-br from-warning/10 to-warning/20 border-warning/20 hover:scale-105 transition-transform">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-warning">Medium</span>
                      <span className="stats-number text-warning">
                        {sessionStats.confidenceBreakdown.medium || 0}
                      </span>
                    </div>
                  </div>
                  <div className="stats-card p-4 bg-gradient-to-br from-success/10 to-success/20 border-success/20 hover:scale-105 transition-transform">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-success">Easy</span>
                      <span className="stats-number text-success">
                        {sessionStats.confidenceBreakdown.high || 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Secondary progress bar for completion */}
            {completionPercentage !== progressPercentage && (
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-semibold text-foreground">Overall Completion</span>
                  <span className="font-semibold text-accent">{Math.round(completionPercentage)}%</span>
                </div>
                <div className="relative">
                  <Progress 
                    value={completionPercentage} 
                    className="h-2 bg-gradient-to-r from-muted/30 to-muted/50 shadow-inner" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-full opacity-50 blur-sm pointer-events-none"></div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}