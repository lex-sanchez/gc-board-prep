import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import boardPracticeIndex from '@/data/board-practice/index.json'
import { comprehensivePracticeQuestions } from '@/data/board-practice/practice-questions-comprehensive'
import { domain1bPracticeQuestions } from '@/data/board-practice/practice-questions-domain1b'
import { domain3bPracticeQuestions } from '@/data/board-practice/practice-questions-domain3b'
import { domain4aPracticeQuestions } from '@/data/board-practice/practice-questions-domain4a'
import { domain5dPracticeQuestions } from '@/data/board-practice/practice-questions-domain5d'
import type { BoardPracticeMaterial } from '@/types/board-practice'

export function PracticeQuestionsView() {
  const { questionSetId } = useParams<{ questionSetId: string }>()
  const navigate = useNavigate()
  
  const material = boardPracticeIndex.materials.find(m => m.id === questionSetId) as BoardPracticeMaterial | undefined
  
  // Get questions based on questionSetId
  const questions = questionSetId === 'practice-questions-comprehensive' ? comprehensivePracticeQuestions :
                   questionSetId === 'practice-questions-domain1b' ? domain1bPracticeQuestions :
                   questionSetId === 'practice-questions-domain3b' ? domain3bPracticeQuestions :
                   questionSetId === 'practice-questions-domain4a' ? domain4aPracticeQuestions :
                   questionSetId === 'practice-questions-domain5d' ? domain5dPracticeQuestions : []
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({})
  const [showExplanations, setShowExplanations] = useState<Record<string, boolean>>({})
  const [showFeedback, setShowFeedback] = useState<Record<string, boolean>>({})
  const [score, setScore] = useState<number | null>(null)

  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
    // Show immediate feedback when answer is selected
    setShowFeedback(prev => ({
      ...prev,
      [questionId]: true
    }))
  }

  const handleShowExplanation = (questionId: string) => {
    setShowExplanations(prev => ({
      ...prev,
      [questionId]: true
    }))
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const calculateScore = () => {
    const correct = questions.filter(q => 
      selectedAnswers[q.id] === q.correctAnswer
    ).length
    setScore(Math.round((correct / questions.length) * 100))
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (!material || !currentQuestion) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Questions Not Found</h1>
        <p className="text-muted-foreground">The requested practice questions could not be found.</p>
        <Button onClick={() => navigate('/practice')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Board Practice
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="study-breadcrumb">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/practice')}
              className="p-0 h-auto font-normal hover:text-foreground"
            >
              Board Practice
            </Button>
            <span>/</span>
            <span>{material.title}</span>
          </div>
          <h1 className="text-2xl font-bold">{material.title}</h1>
          <p className="text-muted-foreground">{material.description}</p>
        </div>
        
        <Button 
          variant="outline" 
          onClick={() => navigate('/practice')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Materials
        </Button>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <div className="w-48 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
        
        {score !== null && (
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-semibold">Score: {score}%</span>
          </div>
        )}
      </div>

      {/* Question Card */}
      <Card className="practice-question-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Question {currentQuestionIndex + 1}</CardTitle>
            <div className="flex items-center gap-2">
              <Badge 
                variant="outline" 
                className={getDifficultyColor(currentQuestion.difficulty)}
              >
                {currentQuestion.difficulty}
              </Badge>
              <Badge variant="outline">
                Domain {currentQuestion.domain}
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Question Text */}
          <p className="text-base leading-relaxed">{currentQuestion.question}</p>
          
          {/* Answer Options */}
          <div className="space-y-2">
            {Object.entries(currentQuestion.options).map(([letter, text]) => {
              const isSelected = selectedAnswers[currentQuestion.id] === letter
              const isCorrect = letter === currentQuestion.correctAnswer
              const showResult = showFeedback[currentQuestion.id]
              
              return (
                <button
                  key={letter}
                  onClick={() => handleAnswerSelect(currentQuestion.id, letter)}
                  disabled={showResult}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    showResult
                      ? isCorrect
                        ? 'bg-green-50 border-green-500 text-green-800'
                        : isSelected
                        ? 'bg-red-50 border-red-500 text-red-800'
                        : 'bg-gray-50 border-gray-200'
                      : isSelected
                      ? 'bg-primary/10 border-primary text-primary'
                      : 'hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <span className="font-medium">{letter})</span> {text}
                </button>
              )
            })}
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {showFeedback[currentQuestion.id] && !showExplanations[currentQuestion.id] && (
              <Button 
                onClick={() => handleShowExplanation(currentQuestion.id)}
                variant="outline"
              >
                Show Explanation
              </Button>
            )}
            
            {questions.every(q => selectedAnswers[q.id]) && score === null && (
              <Button onClick={calculateScore} className="ml-auto">
                Calculate Score
              </Button>
            )}
          </div>
          
          {/* Explanation */}
          {showExplanations[currentQuestion.id] && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2">Explanation:</h4>
              <p className="text-sm leading-relaxed">{currentQuestion.explanation}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-3">
                {currentQuestion.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={handlePreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          Previous Question
        </Button>
        
        <Button
          variant="outline"
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next Question
        </Button>
      </div>
    </div>
  )
}