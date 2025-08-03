import { useEffect } from 'react';
import { FlashcardContainer } from '@/components/flashcards/FlashcardContainer';
import { FlashcardProvider } from '@/contexts/FlashcardContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Layers, Keyboard, Target, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function FlashcardContent() {
  // Set page title
  useEffect(() => {
    document.title = 'Flashcards - Genetic Counseling Practice';
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold flex items-center justify-center gap-3">
            <Layers className="h-8 w-8 text-primary" />
            Quick-Fire Flashcards
          </h1>
          <p className="text-xl text-muted-foreground">
            Master genetic counseling concepts with interactive flashcard practice
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Badge variant="secondary" className="gap-1">
            <Target className="h-3 w-3" />
            120+ Questions
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Keyboard className="h-3 w-3" />
            Keyboard Shortcuts
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            Progress Tracking
          </Badge>
        </div>
      </div>

      {/* Keyboard shortcuts help */}
      <Card className="mb-8 bg-muted/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Keyboard className="h-5 w-5" />
            Keyboard Shortcuts
          </CardTitle>
          <CardDescription>
            Use these shortcuts for faster navigation and better study flow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="space-y-1">
              <div className="font-semibold">Navigation</div>
              <div className="text-muted-foreground">
                <kbd className="px-2 py-1 bg-background rounded text-xs">Space</kbd> Flip card
              </div>
              <div className="text-muted-foreground">
                <kbd className="px-2 py-1 bg-background rounded text-xs">←→</kbd> Navigate
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold">Actions</div>
              <div className="text-muted-foreground">
                <kbd className="px-2 py-1 bg-background rounded text-xs">M</kbd> Mark review
              </div>
              <div className="text-muted-foreground">
                <kbd className="px-2 py-1 bg-background rounded text-xs">S</kbd> Shuffle
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold">Confidence</div>
              <div className="text-muted-foreground">
                <kbd className="px-2 py-1 bg-background rounded text-xs">1</kbd> Hard
              </div>
              <div className="text-muted-foreground">
                <kbd className="px-2 py-1 bg-background rounded text-xs">2</kbd> Medium
              </div>
              <div className="text-muted-foreground">
                <kbd className="px-2 py-1 bg-background rounded text-xs">3</kbd> Easy
              </div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold">Other</div>
              <div className="text-muted-foreground">
                <kbd className="px-2 py-1 bg-background rounded text-xs">Esc</kbd> Close menus
              </div>
              <div className="text-muted-foreground">
                <kbd className="px-2 py-1 bg-background rounded text-xs">F</kbd> Fullscreen
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main flashcard interface */}
      <FlashcardContainer />

      {/* Study tips */}
      <Card className="mt-8 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">Study Tips</CardTitle>
          <CardDescription>
            Maximize your learning with these evidence-based strategies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <h4 className="font-semibold">Active Recall</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Try to answer before flipping the card</li>
                <li>• Say your answer out loud</li>
                <li>• Compare your answer with the correct one</li>
                <li>• Mark difficult cards for focused review</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Spaced Repetition</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Review marked cards more frequently</li>
                <li>• Use shuffle mode to avoid pattern recognition</li>
                <li>• Rate your confidence honestly</li>
                <li>• Return to difficult topics regularly</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function FlashcardsPage() {
  return (
    <FlashcardProvider>
      <FlashcardContent />
    </FlashcardProvider>
  );
}