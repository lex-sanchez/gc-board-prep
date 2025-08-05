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
    <div className="dashboard-container">
      {/* Hero Section */}
      <div className="dashboard-section">
        <div className="hero-background">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <h1 className="hero-title flex items-center justify-center gap-3">
            <Layers className="h-8 w-8 text-primary" />
            Quick-Fire Flashcards
          </h1>
          <p className="hero-subtitle">
            Master genetic counseling concepts with interactive flashcard practice. 
            Use active recall and spaced repetition for optimal learning.
          </p>

          {/* Feature highlights with glass morphism */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Badge 
              variant="secondary" 
              className="gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <Target className="h-4 w-4" />
              120+ Questions
            </Badge>
            <Badge 
              variant="secondary" 
              className="gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-secondary/10 border-accent/20 backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <Keyboard className="h-4 w-4" />
              Keyboard Shortcuts
            </Badge>
            <Badge 
              variant="secondary" 
              className="gap-2 px-4 py-2 bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20 backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <Clock className="h-4 w-4" />
              Progress Tracking
            </Badge>
          </div>
        </div>
      </div>

      {/* Keyboard shortcuts help */}
      <div className="dashboard-section">
        <Card className="stats-card">
          <CardHeader>
            <CardTitle className="text-title flex items-center gap-2">
              <Keyboard className="h-5 w-5" />
              Keyboard Shortcuts
            </CardTitle>
            <CardDescription className="text-subtitle">
              Use these shortcuts for faster navigation and better study flow
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="space-y-2">
                <div className="font-semibold text-foreground">Navigation</div>
                <div className="text-muted-foreground space-y-1">
                  <div>
                    <kbd className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs font-medium">Space</kbd> 
                    <span className="ml-2">Flip card</span>
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-xs font-medium">←→</kbd>
                    <span className="ml-2">Navigate</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-foreground">Actions</div>
                <div className="text-muted-foreground space-y-1">
                  <div>
                    <kbd className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-xs font-medium">M</kbd>
                    <span className="ml-2">Mark review</span>
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-xs font-medium">S</kbd>
                    <span className="ml-2">Shuffle</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-foreground">Confidence</div>
                <div className="text-muted-foreground space-y-1">
                  <div>
                    <kbd className="px-2 py-1 bg-destructive/10 border border-destructive/20 rounded text-xs font-medium">1</kbd>
                    <span className="ml-2">Hard</span>
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-warning/10 border border-warning/20 rounded text-xs font-medium">2</kbd>
                    <span className="ml-2">Medium</span>
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-success/10 border border-success/20 rounded text-xs font-medium">3</kbd>
                    <span className="ml-2">Easy</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-foreground">Other</div>
                <div className="text-muted-foreground space-y-1">
                  <div>
                    <kbd className="px-2 py-1 bg-secondary/10 border border-secondary/20 rounded text-xs font-medium">Esc</kbd>
                    <span className="ml-2">Close menus</span>
                  </div>
                  <div>
                    <kbd className="px-2 py-1 bg-secondary/10 border border-secondary/20 rounded text-xs font-medium">F</kbd>
                    <span className="ml-2">Fullscreen</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main flashcard interface */}
      <div className="dashboard-section">
        <FlashcardContainer />
      </div>

      {/* Study tips */}
      <div className="dashboard-section">
        <Card className="study-tips-card">
          <CardHeader>
            <CardTitle className="text-title">Study Tips for Success</CardTitle>
            <CardDescription className="text-subtitle">
              Maximize your learning with these evidence-based strategies for optimal retention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="study-tip-section">
                <h4 className="study-tip-title">Active Recall Practice</h4>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  <li>• Try to answer before flipping the card</li>
                  <li>• Say your answer out loud for better retention</li>
                  <li>• Compare your answer with the correct one thoroughly</li>
                  <li>• Mark difficult cards for focused review sessions</li>
                </ul>
              </div>
              <div className="study-tip-section">
                <h4 className="study-tip-title">Spaced Repetition Method</h4>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  <li>• Review marked cards more frequently than others</li>
                  <li>• Use shuffle mode to avoid pattern recognition</li>
                  <li>• Rate your confidence honestly for better tracking</li>
                  <li>• Return to difficult topics in future sessions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
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