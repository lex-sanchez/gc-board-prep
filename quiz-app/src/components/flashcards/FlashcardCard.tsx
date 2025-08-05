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
          "aspect-[3/2] relative transition-all duration-700 cursor-pointer",
          "transform-style-preserve-3d hover:scale-[1.02] hover:-translate-y-2",
          "group",
          isFlipped && "rotate-y-180"
        )}
        onClick={onFlip}
      >
        {/* Front of card (Question) */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <Card 
            className="practice-card h-full transition-all duration-500 group-hover:shadow-2xl group-hover:border-primary/40 border-2 border-border/40"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--secondary) / 0.3) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <CardContent className="flex flex-col justify-center items-center p-8 h-full md:p-12 relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="space-y-6 w-full text-center relative z-10">
                {/* Topic badge with enhanced styling */}
                <span className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary border border-primary/20 backdrop-blur-sm shadow-sm hover:scale-105 transition-transform">
                  Topic {card.topicNumber} • Question {card.questionNumber}
                </span>
                
                {/* Question text */}
                <h3 className="text-xl font-semibold leading-relaxed md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {card.question}
                </h3>
                
                {/* Click hint with animation */}
                <div className="flex gap-2 justify-center items-center mt-8 text-sm text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">
                  <RotateCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  <span className="font-medium">Click to reveal answer</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Back of card (Answer) */}
        <div className="absolute inset-0 w-full h-full rotate-y-180 backface-hidden">
          <Card 
            className="stats-card h-full transition-all duration-500 group-hover:shadow-2xl group-hover:border-accent/40 border-2 border-border/40"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--secondary) / 0.3) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            <CardContent className="flex flex-col justify-center p-8 h-full md:p-12 relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-primary/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="space-y-6 w-full relative z-10">
                {/* Answer badge with enhanced styling */}
                <div className="text-center">
                  <span className="inline-flex items-center px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-gradient-to-r from-accent/15 to-secondary/15 text-accent border border-accent/20 backdrop-blur-sm shadow-sm">
                    Answer
                  </span>
                </div>
                
                {/* Answer text */}
                <p className="text-lg leading-relaxed text-center md:text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                  {card.answer}
                </p>
                
                {/* Confidence buttons with enhanced styling */}
                {showConfidenceButtons && (
                  <div className="flex gap-3 justify-center mt-6" onClick={(e) => e.stopPropagation()}>
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn(
                        "button-enhanced text-destructive border-destructive/30 hover:bg-destructive/15 hover:scale-105 transition-all duration-200",
                        card.confidence === 'low' && "bg-destructive/15 border-destructive shadow-md"
                      )}
                      onClick={(e) => handleConfidenceClick('low', e)}
                    >
                      Hard
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn(
                        "button-enhanced text-warning border-warning/30 hover:bg-warning/15 hover:scale-105 transition-all duration-200",
                        card.confidence === 'medium' && "bg-warning/15 border-warning shadow-md"
                      )}
                      onClick={(e) => handleConfidenceClick('medium', e)}
                    >
                      Medium
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn(
                        "button-enhanced text-success border-success/30 hover:bg-success/15 hover:scale-105 transition-all duration-200",
                        card.confidence === 'high' && "bg-success/15 border-success shadow-md"
                      )}
                      onClick={(e) => handleConfidenceClick('high', e)}
                    >
                      Easy
                    </Button>
                  </div>
                )}
                
                {/* Click hint for back with animation */}
                <div className="flex gap-2 justify-center items-center mt-4 text-sm text-muted-foreground group-hover:text-accent/80 transition-colors duration-300">
                  <RotateCw className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-500" />
                  <span className="font-medium">Click to flip back</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Card metadata (outside the flip container) */}
      <div className="mt-6 text-sm text-center">
        <div className="flex gap-3 justify-center items-center flex-wrap">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-muted/20 to-secondary/20 text-muted-foreground font-medium border border-muted/30 backdrop-blur-sm">
            {card.topic.name}
          </span>
          {card.confidence && (
            <span className={cn(
              "px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm shadow-sm hover:scale-105 transition-transform",
              card.confidence === 'low' && "bg-gradient-to-r from-destructive/15 to-destructive/20 text-destructive border-destructive/30",
              card.confidence === 'medium' && "bg-gradient-to-r from-warning/15 to-warning/20 text-warning border-warning/30",
              card.confidence === 'high' && "bg-gradient-to-r from-success/15 to-success/20 text-success border-success/30"
            )}>
              {card.confidence === 'low' && 'Hard'}
              {card.confidence === 'medium' && 'Medium'}
              {card.confidence === 'high' && 'Easy'}
            </span>
          )}
          {card.isMarkedForReview && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary border border-primary/30 backdrop-blur-sm shadow-sm hover:scale-105 transition-transform">
              Marked for Review
            </span>
          )}
        </div>
      </div>
    </div>
  );
}