import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Flashcard } from '@/types/flashcard';
import { RotateCw } from 'lucide-react';

interface FlashcardCardProps {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
  onConfidence?: (confidence: 'low' | 'medium' | 'high') => void;
  className?: string;
  showConfidenceButtons?: boolean;
}

export function FlashcardCard({ 
  card, 
  isFlipped, 
  onFlip, 
  onConfidence,
  className,
  showConfidenceButtons = true
}: FlashcardCardProps) {
  const handleConfidenceClick = (confidence: 'low' | 'medium' | 'high', event: React.MouseEvent) => {
    event.stopPropagation();
    onConfidence?.(confidence);
  };

  return (
    <div className={cn("relative mx-auto w-full max-w-2xl", className)}>
      {/* Card flip container */}
      <div 
        className={cn(
          "aspect-[3/2] relative transition-transform duration-700 cursor-pointer",
          "transform-style-preserve-3d hover:scale-[1.02]",
          isFlipped && "rotate-y-180"
        )}
        onClick={onFlip}
      >
        {/* Front of card (Question) */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <Card className="h-full bg-gradient-to-br shadow-lg transition-shadow from-primary/5 to-primary/10 border-primary/20 hover:shadow-xl">
            <CardContent className="flex flex-col justify-center items-center p-8 h-full md:p-12">
              <div className="space-y-4 w-full text-center">
                {/* Topic badge */}
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  Topic {card.topicNumber} • Question {card.questionNumber}
                </span>
                
                {/* Question text */}
                <h3 className="text-xl font-semibold leading-relaxed md:text-2xl text-foreground">
                  {card.question}
                </h3>
                
                {/* Click hint */}
                <div className="flex gap-2 justify-center items-center mt-8 text-sm text-muted-foreground">
                  <RotateCw className="w-4 h-4" />
                  <span>Click to reveal answer</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Back of card (Answer) */}
        <div className="absolute inset-0 w-full h-full rotate-y-180 backface-hidden">
          <Card className="h-full bg-gradient-to-br shadow-lg from-accent/5 to-accent/10 border-accent/20">
            <CardContent className="flex flex-col justify-center p-8 h-full md:p-12">
              <div className="space-y-6 w-full">
                {/* Answer badge */}
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium rounded-full bg-accent/10 text-accent">
                    Answer
                  </span>
                </div>
                
                {/* Answer text */}
                <p className="text-lg leading-relaxed text-center md:text-xl text-foreground">
                  {card.answer}
                </p>
                
                {/* Confidence buttons */}
                {showConfidenceButtons && (
                  <div className="flex gap-2 justify-center mt-6" onClick={(e) => e.stopPropagation()}>
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn(
                        "text-destructive border-destructive/30 hover:bg-destructive/10",
                        card.confidence === 'low' && "bg-destructive/10 border-destructive"
                      )}
                      onClick={(e) => handleConfidenceClick('low', e)}
                    >
                      Hard
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn(
                        "text-warning border-warning/30 hover:bg-warning/10",
                        card.confidence === 'medium' && "bg-warning/10 border-warning"
                      )}
                      onClick={(e) => handleConfidenceClick('medium', e)}
                    >
                      Medium
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn(
                        "text-success border-success/30 hover:bg-success/10",
                        card.confidence === 'high' && "bg-success/10 border-success"
                      )}
                      onClick={(e) => handleConfidenceClick('high', e)}
                    >
                      Easy
                    </Button>
                  </div>
                )}
                
                {/* Click hint for back */}
                <div className="flex gap-2 justify-center items-center mt-4 text-sm text-muted-foreground">
                  <RotateCw className="w-4 h-4" />
                  <span>Click to flip back</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Card metadata (outside the flip container) */}
      <div className="mt-4 text-sm text-center text-muted-foreground">
        <div className="flex gap-4 justify-center items-center">
          <span>{card.topic.name}</span>
          {card.confidence && (
            <span className={cn(
              "px-2 py-1 rounded-full text-xs font-medium",
              card.confidence === 'low' && "bg-destructive/10 text-destructive",
              card.confidence === 'medium' && "bg-warning/10 text-warning",
              card.confidence === 'high' && "bg-success/10 text-success"
            )}>
              {card.confidence === 'low' && 'Hard'}
              {card.confidence === 'medium' && 'Medium'}
              {card.confidence === 'high' && 'Easy'}
            </span>
          )}
          {card.isMarkedForReview && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              Marked for Review
            </span>
          )}
        </div>
      </div>
    </div>
  );
}