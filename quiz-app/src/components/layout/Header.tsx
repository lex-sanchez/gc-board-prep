import { Link } from 'react-router-dom'
import { Brain } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 pl-5 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">GC Quiz</span>
        </Link>
        
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            to="/"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Dashboard
          </Link>
          <Link
            to="/learn"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Study Guides
          </Link>
          <Link
            to="/quiz"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Practice Quiz
          </Link>
          <Link
            to="/flashcards"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Flashcards
          </Link>
          <Link
            to="/practice"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Jean's Board Practice
          </Link>
          <Link
            to="/progress"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Progress
          </Link>
        </nav>
      </div>
    </header>
  )
}