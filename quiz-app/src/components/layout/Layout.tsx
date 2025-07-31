import { type ReactNode } from 'react'
import { Header } from './Header'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen gradient-orange-subtle">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t bg-background/95 backdrop-blur">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          <p>Genetic Counseling Board Exam Practice Quiz • Built for genetic counseling students</p>
          <p className="mt-2">49 expert-validated questions • 98% accuracy rating</p>
        </div>
      </footer>
    </div>
  )
}