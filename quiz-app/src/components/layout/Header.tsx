import { Link } from 'react-router-dom'
import { Brain } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pl-5">
      <div className="container flex h-14 items-center">
        <Link to="/" className="flex items-center space-x-2 mr-6">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">GC Quiz</span>
        </Link>
        
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            to="/"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Dashboard
          </Link>
          <Link
            to="/learn"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Study Guides
          </Link>
          <Link
            to="/quiz"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Practice Quiz
          </Link>
          <Link
            to="/progress"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Progress
          </Link>
        </nav>
      </div>
    </header>
  )
}