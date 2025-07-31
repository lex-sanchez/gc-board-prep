export type QuestionCategory = 'core' | 'advanced'
export type AnswerOption = 'A' | 'B' | 'C' | 'D'
export type QuizMode = 'practice' | 'timed' | 'review'

export interface Question {
  id: string
  category: QuestionCategory
  topic: string
  questionNumber: string
  question: string
  options: {
    A: string
    B: string
    C: string
    D: string
  }
  correctAnswer: AnswerOption
  explanation: string
  tags?: string[]
}

export interface UserAnswer {
  questionId: string
  selectedAnswer: AnswerOption
  isCorrect: boolean
  timeSpent: number
  flagged: boolean
  timestamp: Date
}

export interface QuizSession {
  id: string
  mode: QuizMode
  category: QuestionCategory | 'mixed'
  selectedTopics: string[]
  questions: Question[]
  answers: UserAnswer[]
  startTime: Date
  endTime?: Date
  completed: boolean
  score: {
    correct: number
    total: number
    percentage: number
    byTopic: Record<string, { correct: number; total: number }>
  }
}

export interface QuizProgress {
  currentQuestionIndex: number
  totalQuestions: number
  timeElapsed: number
  isComplete: boolean
}

export interface UserPreferences {
  preferredMode: QuizMode
  showExplanationsImmediately: boolean
  enableTimer: boolean
  defaultTimeLimit: number // in minutes
  shuffleQuestions: boolean
  shuffleAnswers: boolean
}

export interface QuizStats {
  totalQuizzesTaken: number
  averageScore: number
  bestScore: number
  totalQuestionsAnswered: number
  correctAnswers: number
  topicPerformance: Record<string, {
    attempted: number
    correct: number
    averageScore: number
  }>
  recentSessions: QuizSession[]
}

// Core topic definitions
export const CORE_TOPICS = {
  'topic1': 'Chromosomal Disorders',
  'topic2': 'Cancer Genetics', 
  'topic3': 'Organ Systems A',
  'topic4': 'Neurological & Developmental',
  'topic5': 'Metabolic Disorders',
  'topic6': 'Specialized Systems'
} as const

// Advanced domain definitions  
export const ADVANCED_DOMAINS = {
  'pharmacogenomics': 'Pharmacogenomics',
  'population-genetics': 'Population Genetics',
  'ethical-scenarios': 'Ethical Scenarios',
  'prenatal-genetics': 'Prenatal Genetics',
  'variant-interpretation': 'Variant Interpretation',
  'psychosocial-counseling': 'Psychosocial Counseling',
  'professional-practice': 'Professional Practice',
  'reproductive-technologies': 'Reproductive Technologies',
  'risk-communication': 'Risk Communication',
  'emerging-technologies': 'Emerging Technologies'
} as const

export type CoreTopicKey = keyof typeof CORE_TOPICS
export type AdvancedDomainKey = keyof typeof ADVANCED_DOMAINS

export interface TopicInfo {
  id: string
  name: string
  description: string
  questionCount: number
  category: QuestionCategory
}