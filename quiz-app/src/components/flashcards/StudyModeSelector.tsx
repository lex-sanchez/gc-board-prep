import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  FolderOpen, 
  Shuffle, 
  Bookmark,
  List,
  RotateCcw,
  Target
} from 'lucide-react';
import type { StudyMode } from '@/types/flashcard';
import { cn } from '@/lib/utils';

interface StudyModeOption {
  mode: StudyMode;
  title: string;
  description: string;
  icon: React.ReactNode;
  recommended?: boolean;
  cardCount?: number;
}

interface StudyModeSelectorProps {
  currentMode: StudyMode;
  onModeSelect: (mode: StudyMode) => void;
  cardCounts: {
    total: number;
    byTopic: Record<number, number>;
    marked: number;
  };
  className?: string;
}

export function StudyModeSelector({
  currentMode,
  onModeSelect,
  cardCounts,
  className
}: StudyModeSelectorProps) {
  const studyModes: StudyModeOption[] = [
    {
      mode: 'sequential',
      title: 'Sequential Study',
      description: 'Study cards in order, topic by topic for structured learning',
      icon: <ArrowRight className="w-5 h-5" />,
      recommended: true,
      cardCount: cardCounts.total
    },
    {
      mode: 'byTopic',
      title: 'By Topic',
      description: 'Focus on specific topics to reinforce particular areas',
      icon: <FolderOpen className="w-5 h-5" />,
      cardCount: cardCounts.total
    },
    {
      mode: 'shuffle',
      title: 'Shuffle Mode',
      description: 'Random order for varied practice and better retention',
      icon: <Shuffle className="w-5 h-5" />,
      cardCount: cardCounts.total
    },
    {
      mode: 'reviewOnly',
      title: 'Review Marked',
      description: 'Study only cards you\'ve marked for review',
      icon: <Bookmark className="w-5 h-5" />,
      cardCount: cardCounts.marked
    }
  ];

  const getModeDescription = (mode: StudyMode): string => {
    switch (mode) {
      case 'sequential':
        return 'Cards are presented in numerical order by topic. Best for comprehensive review.';
      case 'byTopic':
        return 'Study cards from selected topics only. Great for focused practice.';
      case 'shuffle':
        return 'Cards are randomly ordered. Helps improve recall and reduces pattern recognition.';
      case 'reviewOnly':
        return 'Only cards marked for review are shown. Perfect for targeted practice.';
      default:
        return '';
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          <List className="w-5 h-5" />
          Study Mode
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          {getModeDescription(currentMode)}
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {studyModes.map((modeOption) => (
            <Button
              key={modeOption.mode}
              variant={currentMode === modeOption.mode ? "default" : "outline"}
              className={cn(
                "h-auto p-4 flex flex-col items-start text-left justify-start relative",
                currentMode === modeOption.mode && "ring-2 ring-primary/50"
              )}
              onClick={() => onModeSelect(modeOption.mode)}
              disabled={modeOption.mode === 'reviewOnly' && cardCounts.marked === 0}
            >
              {/* Recommended badge */}
              {modeOption.recommended && (
                <Badge 
                  variant="secondary" 
                  className="absolute top-2 right-2 text-xs"
                >
                  Recommended
                </Badge>
              )}
              
              <div className="flex gap-3 items-center mb-2 w-full">
                <div className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-lg",
                  currentMode === modeOption.mode 
                    ? "bg-primary-foreground/10" 
                    : "bg-muted"
                )}>
                  {modeOption.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{modeOption.title}</h3>
                  <div className="flex gap-2 items-center mt-1">
                    <span className="text-xs text-muted-foreground">
                      {modeOption.cardCount} cards
                    </span>
                    {modeOption.mode === 'reviewOnly' && cardCounts.marked === 0 && (
                      <span className="text-xs text-muted-foreground">
                        (No cards marked)
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-xs leading-relaxed text-muted-foreground">
                {modeOption.description}
              </p>
            </Button>
          ))}
        </div>
        
        {/* Quick actions */}
        <div className="flex gap-2 items-center pt-4 mt-4 border-t">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            onClick={() => onModeSelect('shuffle')}
          >
            <Shuffle className="w-4 h-4" />
            Quick Shuffle
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-2"
            onClick={() => onModeSelect('sequential')}
          >
            <RotateCcw className="w-4 h-4" />
            Start Over
          </Button>
          
          {cardCounts.marked > 0 && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1 gap-2"
              onClick={() => onModeSelect('reviewOnly')}
            >
              <Target className="w-4 h-4" />
              Review ({cardCounts.marked})
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}