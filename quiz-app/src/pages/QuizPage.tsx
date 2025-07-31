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
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Choose Your Practice Mode</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setSelectedMode('practice')}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedMode === 'practice' 
                  ? 'border-primary bg-primary/10' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Practice Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Untimed practice with immediate explanations
                  </p>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => setSelectedMode('timed')}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedMode === 'timed' 
                  ? 'border-primary bg-primary/10' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Timer className="h-6 w-6 text-warning" />
                <div>
                  <h3 className="font-semibold">Timed Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Board exam simulation with time pressure
                  </p>
                </div>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>
      
      {/* Question Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Core Topics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Core Practice Questions ({metadata.coreQuestions} questions)
            </CardTitle>
            <CardDescription>
              Master fundamental genetic counseling concepts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-2">
              {Object.entries(CORE_TOPICS).map(([key, name]) => {
                const topicData = metadata.topics[name]
                return (
                  <div key={key} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <span className="text-sm font-medium">{name}</span>
                    <span className="text-sm text-muted-foreground">
                      {topicData?.count || 0} questions
                    </span>
                  </div>
                )
              })}
            </div>
            
            <Button 
              className="w-full" 
              onClick={() => handleStartQuiz('core')}
            >
              <Play className="h-4 w-4 mr-2" />
              Practice All Core Topics
            </Button>
          </CardContent>
        </Card>
        
        {/* Advanced Domains */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Advanced Practice Questions ({metadata.advancedQuestions} questions)
            </CardTitle>
            <CardDescription>
              Challenge yourself with specialized domains
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
              {Object.entries(ADVANCED_DOMAINS).map(([key, name]) => {
                const domainData = metadata.domains[name]
                return (
                  <div key={key} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <span className="text-sm font-medium">{name}</span>
                    <span className="text-sm text-muted-foreground">
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
        </Card>
      </div>
      
      {/* Mixed Practice - All Questions */}
      <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Mixed Practice Session</h3>
              <p className="text-muted-foreground">
                Practice with questions from all topics and domains combined ({metadata.totalQuestions} total questions)
              </p>
            </div>
            <Button 
              size="lg"
              className="w-full max-w-md mx-auto text-base py-6"
              onClick={() => handleStartQuiz('mixed')}
            >
              <Play className="h-5 w-5 mr-2" />
              Mixed Practice (All Questions)
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
          <CardDescription>
            Track your improvement over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <p className="text-2xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground">Quizzes Completed</p>
            </div>
            <div className="text-center p-4 bg-success/10 rounded-lg">
              <p className="text-2xl font-bold text-success">--%</p>
              <p className="text-sm text-muted-foreground">Average Score</p>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <p className="text-2xl font-bold text-accent">0</p>
              <p className="text-sm text-muted-foreground">Questions Answered</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link to="/progress">
              <Button variant="ghost">
                View Detailed Progress →
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
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