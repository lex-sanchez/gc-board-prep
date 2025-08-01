import { useState } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quiz } from '@/components/quiz/Quiz'
import { useQuiz } from '@/contexts/QuizContext'
import { CORE_TOPICS, ADVANCED_DOMAINS } from '@/types/quiz'
import { Brain, Award, Play, Settings, Timer, BookOpen } from 'lucide-react'
import metadata from '@/data/metadata.json'

function QuizSelection() {
  const { startQuiz } = useQuiz()
  const navigate = useNavigate()
  const [selectedMode, setSelectedMode] = useState<'practice' | 'timed'>('practice')
  
  const handleStartQuiz = (category: 'core' | 'advanced' | 'mixed', topics?: string[]) => {
    const selectedTopics = topics || []
    startQuiz(selectedMode, category, selectedTopics)
    navigate('/quiz/practice')
  }
  
  return (
    <div className="space-y-8">
      <div className="quiz-hero-section">
        <h1 className="hero-title">Choose Your Practice Mode</h1>
        <p className="text-lg text-muted-foreground">
          Select the type of questions and practice mode that best fits your study needs
        </p>
      </div>
      
      {/* Mode Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Practice Mode
          </CardTitle>
          <CardDescription>
            Choose how you want to practice
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => setSelectedMode('practice')}
              className={`mode-selection-card text-left ${
                selectedMode === 'practice' ? 'selected' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="mode-icon">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Practice Mode</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Untimed practice with immediate explanations
                  </p>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => setSelectedMode('timed')}
              className={`mode-selection-card text-left ${
                selectedMode === 'timed' ? 'selected' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="mode-icon">
                  <Timer className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Timed Mode</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Board exam simulation with time pressure
                  </p>
                </div>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>
      
      {/* Question Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Core Topics */}
        <div className="quiz-category-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-primary" />
              Core Practice Questions ({metadata.coreQuestions} questions)
            </CardTitle>
            <CardDescription className="text-base">
              Master fundamental genetic counseling concepts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              {Object.entries(CORE_TOPICS).map(([key, name]) => {
                const topicData = metadata.topics[name]
                return (
                  <div key={key} className="quiz-topic-item">
                    <span className="text-sm font-medium">{name}</span>
                    <span className="quiz-topic-count">
                      {topicData?.count || 0} questions
                    </span>
                  </div>
                )
              })}
            </div>
            
            <Button 
              className="w-full button-enhanced" 
              onClick={() => handleStartQuiz('core')}
            >
              <Play className="h-4 w-4 mr-2" />
              Practice All Core Topics
            </Button>
          </CardContent>
        </div>
        
        {/* Advanced Domains */}
        <div className="quiz-category-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Award className="h-6 w-6 text-accent" />
              Advanced Practice Questions ({metadata.advancedQuestions} questions)
            </CardTitle>
            <CardDescription className="text-base">
              Challenge yourself with specialized domains
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {Object.entries(ADVANCED_DOMAINS).map(([key, name]) => {
                const domainData = metadata.domains[name]
                return (
                  <div key={key} className="quiz-topic-item">
                    <span className="text-sm font-medium">{name}</span>
                    <span className="quiz-topic-count">
                      {domainData?.count || 0} questions
                    </span>
                  </div>
                )
              })}
            </div>
            
            <Button 
              className="w-full" 
              variant="outline"
              onClick={() => handleStartQuiz('advanced')}
            >
              <Play className="h-4 w-4 mr-2" />
              Practice Advanced Domains
            </Button>
          </CardContent>
        </div>
      </div>
      
      {/* Mixed Practice - All Questions */}
      <div className="mixed-practice-card">
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">Mixed Practice Session</h3>
            <p className="text-muted-foreground text-lg">
              Practice with questions from all topics and domains combined ({metadata.totalQuestions} total questions)
            </p>
          </div>
          <button 
            className="mixed-practice-button"
            onClick={() => handleStartQuiz('mixed')}
          >
            <Play className="h-5 w-5 mr-3" />
            Mixed Practice (All Questions)
          </button>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="quiz-progress-card">
        <CardHeader>
          <CardTitle className="text-xl">Your Progress</CardTitle>
          <CardDescription>
            Track your improvement over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="progress-stat-item primary-stat">
              <p className="progress-stat-number">0</p>
              <p className="text-sm text-muted-foreground">Quizzes Completed</p>
            </div>
            <div className="progress-stat-item success-stat">
              <p className="progress-stat-number">--%</p>
              <p className="text-sm text-muted-foreground">Average Score</p>
            </div>
            <div className="progress-stat-item accent-stat">
              <p className="progress-stat-number">0</p>
              <p className="text-sm text-muted-foreground">Questions Answered</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link to="/progress">
              <Button variant="ghost" className="hover:bg-primary/10">
                View Detailed Progress →
              </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </div>
  )
}

export function QuizPage() {
  return (
    <Routes>
      <Route path="/" element={<QuizSelection />} />
      <Route path="/practice" element={<Quiz showExplanations={true} />} />
    </Routes>
  )
}