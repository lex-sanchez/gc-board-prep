import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip } from '@/components/ui/tooltip'
import { ChevronLeft, ChevronRight, RotateCcw, CheckCircle, Check } from 'lucide-react'
import { QuestionCard } from './QuestionCard'
import { useQuiz } from '@/contexts/QuizContext'
import { cn } from '@/lib/utils'

interface QuizProps {
  showExplanations?: boolean
  onComplete?: () => void
}

export function Quiz({ showExplanations = true, onComplete }: QuizProps) {
  const {
    state,
    getCurrentQuestion,
    getUserAnswer,
    answerQuestion,
    flagQuestion,
    nextQuestion,
    previousQuestion,
    jumpToQuestion,
    finishQuiz,
    getProgress,
    isQuestionAnswered
  } = useQuiz()
  
  const navigate = useNavigate()
  const currentQuestion = getCurrentQuestion()
  const currentAnswer = currentQuestion ? getUserAnswer(currentQuestion.id) : null
  const progress = getProgress()
  
  // Redirect if no active session
  useEffect(() => {
    if (!state.currentSession && !state.progress.isComplete) {
      navigate('/quiz')
    }
  }, [state.currentSession, state.progress.isComplete, navigate])
  
  if (!currentQuestion && !state.progress.isComplete) {
    return (
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">No Quiz Active</h2>
        <p className="text-muted-foreground">Please start a quiz first.</p>
        <Button onClick={() => navigate('/quiz')}>
          Start Quiz
        </Button>
      </div>
    )
  }
  
  // Quiz completed view
  if (state.progress.isComplete || !currentQuestion) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {state.currentSession && (
              <div className="text-center space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-success">
                      {state.currentSession.score.correct}
                    </p>
                    <p className="text-sm text-muted-foreground">Correct</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">
                      {state.currentSession.score.total}
                    </p>
                    <p className="text-sm text-muted-foreground">Total</p>
                  </div>
                  <div className="text-center">
                    <p className={cn(
                      "text-3xl font-bold",
                      state.currentSession.score.percentage >= 80 ? "text-success" :
                      state.currentSession.score.percentage >= 70 ? "text-warning" :
                      "text-destructive"
                    )}>
                      {state.currentSession.score.percentage}%
                    </p>
                    <p className="text-sm text-muted-foreground">Score</p>
                  </div>
                </div>
                
                {/* Topic Breakdown */}
                <div className="space-y-2">
                  <h4 className="font-semibold">Performance by Topic</h4>
                  <div className="space-y-2">
                    {Object.entries(state.currentSession.score.byTopic).map(([topic, scores]) => (
                      <div key={topic} className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm font-medium">{topic}</span>
                        <span className="text-sm">
                          {scores.correct}/{scores.total} ({Math.round((scores.correct/scores.total)*100)}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-center gap-4">
              <Button onClick={() => navigate('/quiz')} variant="outline">
                New Quiz
              </Button>
              <Button onClick={() => navigate('/progress')}>
                View Progress
              </Button>
              {onComplete && (
                <Button onClick={onComplete}>
                  Continue
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
  
  const handleAnswer = (selectedAnswer: string, timeSpent: number) => {
    answerQuestion(currentQuestion.id, selectedAnswer, timeSpent)
  }
  
  const handleFlag = (flagged: boolean) => {
    flagQuestion(currentQuestion.id, flagged)
  }
  
  const handleNext = () => {
    // Check if current question is answered before proceeding
    if (!currentQuestion || !isQuestionAnswered(currentQuestion.id)) {
      return
    }
    
    if (state.currentQuestionIndex < state.questions.length - 1) {
      nextQuestion()
    } else {
      // Last question - finish quiz
      finishQuiz()
    }
  }
  
  const handlePrevious = () => {
    previousQuestion()
  }
  
  const isLastQuestion = state.currentQuestionIndex >= state.questions.length - 1
  const isFirstQuestion = state.currentQuestionIndex === 0
  const isCurrentQuestionAnswered = currentQuestion ? isQuestionAnswered(currentQuestion.id) : false
  
  // Helper function to determine if a question navigation dot should be clickable
  const canNavigateToQuestion = (questionIndex: number): boolean => {
    // Always allow navigation to current question
    if (questionIndex === state.currentQuestionIndex) return true
    
    // Allow navigation to previous questions (answered or not - for review)
    if (questionIndex < state.currentQuestionIndex) return true
    
    // Block navigation to future questions
    return false
  }
  
  // Helper function to handle question navigation
  const handleQuestionNavigation = (questionIndex: number) => {
    if (canNavigateToQuestion(questionIndex)) {
      jumpToQuestion(questionIndex)
    }
  }
  
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/quiz')}
          className="text-muted-foreground"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Exit Quiz
        </Button>
        
        <div className="text-sm text-muted-foreground">
          Progress: {progress.answered} of {progress.total} answered ({progress.percentage}%)
        </div>
      </div>
      
      <QuestionCard
        question={currentQuestion}
        questionIndex={state.currentQuestionIndex}
        totalQuestions={state.questions.length}
        userAnswer={currentAnswer}
        showExplanation={showExplanations}
        onAnswer={handleAnswer}
        onFlag={handleFlag}
      />
      
      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={isFirstQuestion}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        
        <div className="flex items-center gap-2">
          {/* Question navigation dots */}
          <div className="flex gap-1">
            {state.questions.slice(0, 10).map((question, index) => {
              const answered = isQuestionAnswered(question.id)
              const isCurrent = index === state.currentQuestionIndex
              const canNavigate = canNavigateToQuestion(index)
              const isFuture = index > state.currentQuestionIndex
              
              return (
                <Tooltip
                  key={index}
                  content={
                    isFuture 
                      ? "Answer previous questions to unlock" 
                      : answered 
                        ? "Question answered - click to review" 
                        : isCurrent 
                          ? "Current question" 
                          : "Click to navigate"
                  }
                  disabled={!isFuture}
                >
                  <button
                    onClick={() => handleQuestionNavigation(index)}
                    disabled={!canNavigate}
                    className={cn(
                      "w-8 h-8 rounded-full text-xs font-medium transition-colors relative",
                      "disabled:cursor-not-allowed",
                      isCurrent ? "bg-primary text-primary-foreground ring-2 ring-primary/30" :
                      answered ? "bg-success/20 text-success hover:bg-success/30" :
                      canNavigate ? "bg-muted text-muted-foreground hover:bg-muted/80" :
                      "bg-muted/50 text-muted-foreground/50"
                    )}
                    aria-label={`Question ${index + 1}${
                      isCurrent ? ' (current)' : 
                      answered ? ' (answered)' : 
                      isFuture ? ' (locked)' : ''
                    }`}
                  >
                    {answered ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      index + 1
                    )}
                  </button>
                </Tooltip>
              )
            })}
            {state.questions.length > 10 && (
              <span className="text-muted-foreground px-2">...</span>
            )}
          </div>
        </div>
        
        <Tooltip 
          content="Answer the current question to continue"
          disabled={isCurrentQuestionAnswered}
        >
          <Button 
            onClick={handleNext}
            disabled={!isCurrentQuestionAnswered}
            className={cn(
              "transition-all duration-200",
              !isCurrentQuestionAnswered && "opacity-50 cursor-not-allowed"
            )}
            aria-label={`${
              isLastQuestion ? 'Finish Quiz' : 'Next Question'
            }${!isCurrentQuestionAnswered ? ' (answer current question first)' : ''}`}
          >
            {isLastQuestion ? 'Finish Quiz' : 'Next'}
            {!isLastQuestion && <ChevronRight className="h-4 w-4 ml-2" />}
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}