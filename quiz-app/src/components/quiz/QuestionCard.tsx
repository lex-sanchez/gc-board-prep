import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Flag, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { type Question, type UserAnswer } from '@/types/quiz'
import { cn } from '@/lib/utils'

interface QuestionCardProps {
  question: Question
  questionIndex: number
  totalQuestions: number
  userAnswer?: UserAnswer | null
  showExplanation?: boolean
  onAnswer: (selectedAnswer: string, timeSpent: number) => void
  onFlag?: (flagged: boolean) => void
}

export function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  userAnswer,
  showExplanation = false,
  onAnswer,
  onFlag
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [startTime] = useState(Date.now())
  const [timeSpent, setTimeSpent] = useState(0)
  const [hasAnswered, setHasAnswered] = useState(false)
  
  // Update selected answer if userAnswer exists
  useEffect(() => {
    if (userAnswer) {
      setSelectedAnswer(userAnswer.selectedAnswer)
      setTimeSpent(userAnswer.timeSpent)
      setHasAnswered(true)
    } else {
      setSelectedAnswer('')
      setHasAnswered(false)
      setTimeSpent(0)
    }
  }, [userAnswer, question.id])
  
  // Update time spent periodically
  useEffect(() => {
    if (hasAnswered) return
    
    const interval = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)
    
    return () => clearInterval(interval)
  }, [startTime, hasAnswered])
  
  const handleAnswerSelect = (answer: string) => {
    if (hasAnswered) return
    
    setSelectedAnswer(answer)
    const finalTimeSpent = Math.floor((Date.now() - startTime) / 1000)
    setTimeSpent(finalTimeSpent)
    setHasAnswered(true)
    onAnswer(answer, finalTimeSpent)
  }
  
  const handleFlag = () => {
    if (onFlag) {
      onFlag(!userAnswer?.flagged)
    }
  }
  
  const getAnswerOptionClass = (optionKey: string) => {
    const baseClass = "answer-option text-left"
    
    // Show selected state while choosing (before answering)
    if (!hasAnswered && selectedAnswer === optionKey) {
      return cn(baseClass, "selected")
    }
    
    if (!hasAnswered) {
      return baseClass
    }
    
    // Show correct/incorrect state after answering
    if (optionKey === question.correctAnswer) {
      return cn(baseClass, "correct")
    }
    
    if (optionKey === selectedAnswer && optionKey !== question.correctAnswer) {
      return cn(baseClass, "incorrect")
    }
    
    return baseClass
  }
  
  const getAnswerIcon = (optionKey: string) => {
    if (!hasAnswered) return null
    
    if (optionKey === question.correctAnswer) {
      return <CheckCircle className="h-5 w-5 text-success" />
    }
    
    if (optionKey === selectedAnswer && optionKey !== question.correctAnswer) {
      return <XCircle className="h-5 w-5 text-destructive" />
    }
    
    return null
  }
  
  const progressPercentage = ((questionIndex + 1) / totalQuestions) * 100
  
  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-caption">
          <span>Question {questionIndex + 1} of {totalQuestions}</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}</span>
            </div>
            {userAnswer?.flagged && (
              <div className="flex items-center gap-1 text-warning">
                <Flag className="h-4 w-4" />
                <span>Flagged</span>
              </div>
            )}
          </div>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
      
      {/* Question Card */}
      <Card className="question-card">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">
                  {question.category === 'core' ? 'Core Topic' : 'Advanced Domain'}
                </span>
                <span className="text-sm px-2 py-1 bg-accent text-accent-foreground rounded-full">
                  {question.topic}
                </span>
              </div>
              <CardTitle className="text-title leading-relaxed">
                {question.question}
              </CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleFlag}
              className={cn(
                "flex-shrink-0",
                userAnswer?.flagged && "text-warning"
              )}
            >
              <Flag className={cn(
                "h-4 w-4",
                userAnswer?.flagged && "fill-current"
              )} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Answer Options */}
          <div className="space-y-3">
            {Object.entries(question.options).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleAnswerSelect(key)}
                disabled={hasAnswered}
                className={getAnswerOptionClass(key)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-lg w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      {key}
                    </span>
                    <span className="text-sm">{value}</span>
                  </div>
                  {getAnswerIcon(key)}
                </div>
              </button>
            ))}
          </div>
          
          {/* Answer Feedback */}
          {hasAnswered && userAnswer && (
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-start gap-3">
                {userAnswer.isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive mt-0.5" />
                )}
                <div className="space-y-2">
                  <p className={cn(
                    "font-medium",
                    userAnswer.isCorrect ? "text-success" : "text-destructive"
                  )}>
                    {userAnswer.isCorrect ? "Correct!" : "Incorrect"}
                  </p>
                  {showExplanation && (
                    <div className="text-sm text-foreground/80">
                      <p className="mb-2">
                        <strong>Correct Answer:</strong> {question.correctAnswer}) {question.options[question.correctAnswer]}
                      </p>
                      <p>
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Show explanation if not answered but explanation should be shown */}
          {!hasAnswered && showExplanation && (
            <div className="mt-6 p-4 bg-info/10 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-info mt-0.5" />
                <div className="space-y-2">
                  <p className="font-medium text-info">Answer first to see explanation</p>
                  <p className="text-sm text-info/80">
                    Select your answer above to reveal the detailed explanation.
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}