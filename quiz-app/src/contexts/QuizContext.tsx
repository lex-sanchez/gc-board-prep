import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react'
import { type Question, type QuizSession, type UserAnswer, type QuizMode, type QuestionCategory, type QuizProgress, type UserPreferences } from '@/types/quiz'
import { shuffleArray } from '@/lib/utils'
import questionsData from '@/data/questions.json'

interface QuizState {
  // Current session
  currentSession: QuizSession | null
  currentQuestionIndex: number
  questions: Question[]
  userAnswers: UserAnswer[]
  
  // Quiz progress
  progress: QuizProgress
  
  // User preferences
  preferences: UserPreferences
  
  // History
  completedSessions: QuizSession[]
  
  // Loading states
  isLoading: boolean
  error: string | null
}

type QuizAction =
  | { type: 'START_QUIZ'; payload: { mode: QuizMode; category: QuestionCategory | 'mixed'; selectedTopics: string[]; questionCount?: number } }
  | { type: 'ANSWER_QUESTION'; payload: { questionId: string; selectedAnswer: string; timeSpent: number } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' }
  | { type: 'JUMP_TO_QUESTION'; payload: { index: number } }
  | { type: 'FLAG_QUESTION'; payload: { questionId: string; flagged: boolean } }
  | { type: 'FINISH_QUIZ' }
  | { type: 'RESET_QUIZ' }
  | { type: 'UPDATE_PREFERENCES'; payload: Partial<UserPreferences> }
  | { type: 'LOAD_QUIZ_DATA' }
  | { type: 'SET_ERROR'; payload: string }

const initialState: QuizState = {
  currentSession: null,
  currentQuestionIndex: 0,
  questions: [],
  userAnswers: [],
  progress: {
    currentQuestionIndex: 0,
    totalQuestions: 0,
    timeElapsed: 0,
    isComplete: false
  },
  preferences: {
    preferredMode: 'practice',
    showExplanationsImmediately: true,
    enableTimer: false,
    defaultTimeLimit: 60,
    shuffleQuestions: true,
    shuffleAnswers: false
  },
  completedSessions: [],
  isLoading: false,
  error: null
}

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'START_QUIZ': {
      const { mode, category, selectedTopics, questionCount } = action.payload
      
      // Filter questions based on selection
      let filteredQuestions = questionsData as Question[]
      
      if (category !== 'mixed') {
        filteredQuestions = filteredQuestions.filter(q => q.category === category)
      }
      
      if (selectedTopics.length > 0) {
        filteredQuestions = filteredQuestions.filter(q => selectedTopics.includes(q.topic))
      }
      
      // Shuffle questions if enabled
      if (state.preferences.shuffleQuestions) {
        filteredQuestions = shuffleArray(filteredQuestions)
      }
      
      // Limit question count if specified
      if (questionCount && questionCount < filteredQuestions.length) {
        filteredQuestions = filteredQuestions.slice(0, questionCount)
      }
      
      const session: QuizSession = {
        id: `quiz_${Date.now()}`,
        mode,
        category,
        selectedTopics,
        questions: filteredQuestions,
        answers: [],
        startTime: new Date(),
        completed: false,
        score: {
          correct: 0,
          total: filteredQuestions.length,
          percentage: 0,
          byTopic: {}
        }
      }
      
      return {
        ...state,
        currentSession: session,
        questions: filteredQuestions,
        userAnswers: [],
        currentQuestionIndex: 0,
        progress: {
          currentQuestionIndex: 0,
          totalQuestions: filteredQuestions.length,
          timeElapsed: 0,
          isComplete: false
        },
        error: null
      }
    }
    
    case 'ANSWER_QUESTION': {
      const { questionId, selectedAnswer, timeSpent } = action.payload
      
      if (!state.currentSession) return state
      
      const question = state.questions.find(q => q.id === questionId)
      if (!question) return state
      
      const isCorrect = selectedAnswer === question.correctAnswer
      
      const userAnswer: UserAnswer = {
        questionId,
        selectedAnswer: selectedAnswer as 'A' | 'B' | 'C' | 'D',
        isCorrect,
        timeSpent,
        flagged: false,
        timestamp: new Date()
      }
      
      // Update or add the answer
      const existingAnswerIndex = state.userAnswers.findIndex(a => a.questionId === questionId)
      let updatedAnswers: UserAnswer[]
      
      if (existingAnswerIndex >= 0) {
        updatedAnswers = [...state.userAnswers]
        updatedAnswers[existingAnswerIndex] = userAnswer
      } else {
        updatedAnswers = [...state.userAnswers, userAnswer]
      }
      
      // Calculate updated score
      const correctAnswers = updatedAnswers.filter(a => a.isCorrect).length
      const percentage = Math.round((correctAnswers / state.questions.length) * 100)
      
      // Calculate by-topic scores
      const byTopic: Record<string, { correct: number; total: number }> = {}
      state.questions.forEach(q => {
        if (!byTopic[q.topic]) {
          byTopic[q.topic] = { correct: 0, total: 0 }
        }
        byTopic[q.topic].total++
        
        const answer = updatedAnswers.find(a => a.questionId === q.id)
        if (answer && answer.isCorrect) {
          byTopic[q.topic].correct++
        }
      })
      
      const updatedSession: QuizSession = {
        ...state.currentSession,
        answers: updatedAnswers,
        score: {
          correct: correctAnswers,
          total: state.questions.length,
          percentage,
          byTopic
        }
      }
      
      return {
        ...state,
        currentSession: updatedSession,
        userAnswers: updatedAnswers
      }
    }
    
    case 'NEXT_QUESTION': {
      const nextIndex = Math.min(state.currentQuestionIndex + 1, state.questions.length - 1)
      return {
        ...state,
        currentQuestionIndex: nextIndex,
        progress: {
          ...state.progress,
          currentQuestionIndex: nextIndex
        }
      }
    }
    
    case 'PREVIOUS_QUESTION': {
      const prevIndex = Math.max(state.currentQuestionIndex - 1, 0)
      return {
        ...state,
        currentQuestionIndex: prevIndex,
        progress: {
          ...state.progress,
          currentQuestionIndex: prevIndex
        }
      }
    }
    
    case 'JUMP_TO_QUESTION': {
      const { index } = action.payload
      const clampedIndex = Math.max(0, Math.min(index, state.questions.length - 1))
      return {
        ...state,
        currentQuestionIndex: clampedIndex,
        progress: {
          ...state.progress,
          currentQuestionIndex: clampedIndex
        }
      }
    }
    
    case 'FLAG_QUESTION': {
      const { questionId, flagged } = action.payload
      const updatedAnswers = state.userAnswers.map(answer =>
        answer.questionId === questionId
          ? { ...answer, flagged }
          : answer
      )
      
      // If answer doesn't exist yet, create it
      if (!state.userAnswers.find(a => a.questionId === questionId)) {
        const question = state.questions.find(q => q.id === questionId)
        if (question) {
          updatedAnswers.push({
            questionId,
            selectedAnswer: 'A', // Placeholder, will be updated when actually answered
            isCorrect: false,
            timeSpent: 0,
            flagged,
            timestamp: new Date()
          })
        }
      }
      
      return {
        ...state,
        userAnswers: updatedAnswers,
        currentSession: state.currentSession
          ? { ...state.currentSession, answers: updatedAnswers }
          : null
      }
    }
    
    case 'FINISH_QUIZ': {
      if (!state.currentSession) return state
      
      const completedSession: QuizSession = {
        ...state.currentSession,
        endTime: new Date(),
        completed: true
      }
      
      return {
        ...state,
        currentSession: completedSession,
        completedSessions: [...state.completedSessions, completedSession],
        progress: {
          ...state.progress,
          isComplete: true
        }
      }
    }
    
    case 'RESET_QUIZ': {
      return {
        ...state,
        currentSession: null,
        currentQuestionIndex: 0,
        questions: [],
        userAnswers: [],
        progress: {
          currentQuestionIndex: 0,
          totalQuestions: 0,
          timeElapsed: 0,
          isComplete: false
        },
        error: null
      }
    }
    
    case 'UPDATE_PREFERENCES': {
      const updatedPreferences = { ...state.preferences, ...action.payload }
      return {
        ...state,
        preferences: updatedPreferences
      }
    }
    
    case 'SET_ERROR': {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    }
    
    default:
      return state
  }
}

const QuizContext = createContext<{
  state: QuizState
  dispatch: React.Dispatch<QuizAction>
  // Helper functions
  startQuiz: (mode: QuizMode, category: QuestionCategory | 'mixed', selectedTopics: string[], questionCount?: number) => void
  answerQuestion: (questionId: string, selectedAnswer: string, timeSpent: number) => void
  nextQuestion: () => void
  previousQuestion: () => void
  jumpToQuestion: (index: number) => void
  flagQuestion: (questionId: string, flagged: boolean) => void
  finishQuiz: () => void
  resetQuiz: () => void
  updatePreferences: (preferences: Partial<UserPreferences>) => void
  getCurrentQuestion: () => Question | null
  getUserAnswer: (questionId: string) => UserAnswer | null
  getProgress: () => { answered: number; total: number; percentage: number }
  isQuestionAnswered: (questionId: string) => boolean
} | null>(null)

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState)
  
  // Load saved data from localStorage on mount
  useEffect(() => {
    try {
      const savedPreferences = localStorage.getItem('gc-quiz-preferences')
      if (savedPreferences) {
        const preferences = JSON.parse(savedPreferences)
        dispatch({ type: 'UPDATE_PREFERENCES', payload: preferences })
      }
      
      const savedSessions = localStorage.getItem('gc-quiz-sessions')
      if (savedSessions) {
        // Note: In a full implementation, you'd restore completed sessions
        // For now, we'll just load preferences
      }
    } catch (error) {
      console.error('Error loading saved data:', error)
    }
  }, [])
  
  // Save preferences to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem('gc-quiz-preferences', JSON.stringify(state.preferences))
    } catch (error) {
      console.error('Error saving preferences:', error)
    }
  }, [state.preferences])
  
  // Helper functions
  const startQuiz = (mode: QuizMode, category: QuestionCategory | 'mixed', selectedTopics: string[], questionCount?: number) => {
    dispatch({ type: 'START_QUIZ', payload: { mode, category, selectedTopics, questionCount } })
  }
  
  const answerQuestion = (questionId: string, selectedAnswer: string, timeSpent: number) => {
    dispatch({ type: 'ANSWER_QUESTION', payload: { questionId, selectedAnswer, timeSpent } })
  }
  
  const nextQuestion = () => dispatch({ type: 'NEXT_QUESTION' })
  const previousQuestion = () => dispatch({ type: 'PREVIOUS_QUESTION' })
  const jumpToQuestion = (index: number) => dispatch({ type: 'JUMP_TO_QUESTION', payload: { index } })
  const flagQuestion = (questionId: string, flagged: boolean) => dispatch({ type: 'FLAG_QUESTION', payload: { questionId, flagged } })
  const finishQuiz = () => dispatch({ type: 'FINISH_QUIZ' })
  const resetQuiz = () => dispatch({ type: 'RESET_QUIZ' })
  const updatePreferences = (preferences: Partial<UserPreferences>) => dispatch({ type: 'UPDATE_PREFERENCES', payload: preferences })
  
  const getCurrentQuestion = (): Question | null => {
    if (!state.questions.length || state.currentQuestionIndex >= state.questions.length) {
      return null
    }
    return state.questions[state.currentQuestionIndex]
  }
  
  const getUserAnswer = (questionId: string): UserAnswer | null => {
    return state.userAnswers.find(answer => answer.questionId === questionId) || null
  }
  
  const getProgress = () => {
    const answered = state.userAnswers.filter(a => {
      // Check if answer has been actually set (not just the default placeholder)
      const question = state.questions.find(q => q.id === a.questionId)
      return question && a.timeSpent > 0 && a.selectedAnswer
    }).length
    const total = state.questions.length
    const percentage = total > 0 ? Math.round((answered / total) * 100) : 0
    return { answered, total, percentage }
  }

  const isQuestionAnswered = (questionId: string): boolean => {
    const answer = getUserAnswer(questionId)
    // A question is considered answered if:
    // 1. An answer exists
    // 2. The selected answer is not empty/undefined
    // 3. Time was spent (user actually engaged with the question)
    return answer !== null && 
           answer.selectedAnswer !== undefined && 
           answer.selectedAnswer !== null &&
           answer.selectedAnswer.length > 0 && 
           answer.timeSpent > 0
  }
  
  const value = {
    state,
    dispatch,
    startQuiz,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    jumpToQuestion,
    flagQuestion,
    finishQuiz,
    resetQuiz,
    updatePreferences,
    getCurrentQuestion,
    getUserAnswer,
    getProgress,
    isQuestionAnswered
  }
  
  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const context = useContext(QuizContext)
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider')
  }
  return context
}