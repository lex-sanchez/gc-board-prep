import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { QuizProvider } from '@/contexts/QuizContext'
import { LearningProvider } from '@/contexts/LearningContext'
import { Home } from '@/pages/Home'
import { QuizPage } from '@/pages/QuizPage'
import { LearningPage } from '@/pages/LearningPage'
import { FlashcardsPage } from '@/pages/FlashcardsPage'
import { BoardPracticePage } from '@/pages/BoardPracticePage'

// Placeholder components for routes
function ProgressPage() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">Progress & Statistics</h1>
      <p className="text-muted-foreground">Progress tracking coming soon...</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <QuizProvider>
        <LearningProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn/*" element={<LearningPage />} />
              <Route path="/quiz/*" element={<QuizPage />} />
              <Route path="/flashcards" element={<FlashcardsPage />} />
              <Route path="/practice/*" element={<BoardPracticePage />} />
              <Route path="/progress" element={<ProgressPage />} />
            </Routes>
          </Layout>
        </LearningProvider>
      </QuizProvider>
    </Router>
  )
}

export default App