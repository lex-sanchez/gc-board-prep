import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { QuizProvider } from '@/contexts/QuizContext'
import { Home } from '@/pages/Home'
import { QuizPage } from '@/pages/QuizPage'

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
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/*" element={<QuizPage />} />
            <Route path="/progress" element={<ProgressPage />} />
          </Routes>
        </Layout>
      </QuizProvider>
    </Router>
  )
}

export default App