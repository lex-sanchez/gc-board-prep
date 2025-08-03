import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Filter, X, CheckCircle } from 'lucide-react';
import { FLASHCARD_TOPICS } from '@/types/flashcard';
import { cn } from '@/lib/utils';

interface FlashcardFiltersProps {
  selectedTopics: number[];
  onTopicsChange: (topics: number[]) => void;
  cardCounts?: Record<number, number>;
  className?: string;
  onClose?: () => void;
  showCardCounts?: boolean;
}

export function FlashcardFilters({
  selectedTopics,
  onTopicsChange,
  cardCounts = {},
  className,
  onClose,
  showCardCounts = true
}: FlashcardFiltersProps) {
  const allTopics = Object.keys(FLASHCARD_TOPICS).map(Number);
  const isAllSelected = selectedTopics.length === allTopics.length;
  const selectedCount = selectedTopics.length;

  const handleTopicToggle = (topicNumber: number) => {
    const newSelectedTopics = selectedTopics.includes(topicNumber)
      ? selectedTopics.filter(t => t !== topicNumber)
      : [...selectedTopics, topicNumber];
    
    onTopicsChange(newSelectedTopics);
  };

  const handleSelectAll = () => {
    onTopicsChange(allTopics);
  };

  const handleSelectNone = () => {
    onTopicsChange([]);
  };

  const getTotalSelectedCards = () => {
    return selectedTopics.reduce((total, topic) => {
      return total + (cardCounts[topic] || 0);
    }, 0);
  };

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter Topics
            {selectedCount < allTopics.length && (
              <Badge variant="secondary" className="ml-2">
                {selectedCount} of {allTopics.length}
              </Badge>
            )}
          </CardTitle>
          {onClose && (
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        {showCardCounts && (
          <p className="text-sm text-muted-foreground">
            {getTotalSelectedCards()} cards selected from {selectedCount} topic{selectedCount !== 1 ? 's' : ''}
          </p>
        )}
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Quick actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSelectAll}
              disabled={isAllSelected}
              className="gap-2"
            >
              <CheckCircle className="h-4 w-4" />
              Select All
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleSelectNone}
              disabled={selectedTopics.length === 0}
              className="gap-2"
            >
              <X className="h-4 w-4" />
              Clear All
            </Button>
          </div>
          
          {/* Topic checkboxes */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-muted-foreground">Topics</h4>
            <div className="grid grid-cols-1 gap-3">
              {allTopics.map(topicNumber => {
                const topic = FLASHCARD_TOPICS[topicNumber];
                const isSelected = selectedTopics.includes(topicNumber);
                const cardCount = cardCounts[topicNumber] || 0;
                
                return (
                  <label
                    key={topicNumber}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                      isSelected 
                        ? "bg-primary/5 border-primary/20" 
                        : "bg-background hover:bg-muted/50 border-border"
                    )}
                  >
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => handleTopicToggle(topicNumber)}
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          Topic {topicNumber}: {topic.name}
                        </span>
                        {showCardCounts && (
                          <Badge 
                            variant={isSelected ? "default" : "outline"}
                            className="text-xs"
                          >
                            {cardCount} cards
                          </Badge>
                        )}
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
          
          {/* Summary */}
          {selectedTopics.length > 0 && (
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Selected topics:
                </span>
                <span className="font-medium">
                  {selectedTopics.sort().join(', ')}
                </span>
              </div>
              
              {showCardCounts && (
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-muted-foreground">
                    Total cards:
                  </span>
                  <span className="font-medium">
                    {getTotalSelectedCards()}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}