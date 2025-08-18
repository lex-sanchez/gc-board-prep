export type BoardPracticeMaterialType = 
  | 'study-guide' 
  | 'quick-reference' 
  | 'scenario-based' 
  | 'reference' 
  | 'practice-questions'

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export interface BoardPracticeMaterial {
  id: string
  title: string
  description: string
  type: BoardPracticeMaterialType
  difficulty: DifficultyLevel
  tags: string[]
  estimatedTime: number
  importance: number // 1-3 stars
  sectionCount?: number
  questionCount?: number
  domain: string
}

export interface BoardPracticeSection {
  id: string
  title: string
  content: string // Processed HTML content
  importance: number // 1-3 stars
  subsections: BoardPracticeSubsection[]
  estimatedReadTime: number
  tags: string[]
}

export interface StudySection {
  id: string
  title: string
  content: string // HTML content
  importance: number // 1-3 stars
  estimatedReadTime: number
}

export interface BoardPracticeSubsection {
  id: string
  title: string
  content: string
  level: number // heading level (h1, h2, h3, etc.)
}

export interface PracticeQuestion {
  id: string
  question: string
  options: { A: string; B: string; C: string; D: string }
  correctAnswer: 'A' | 'B' | 'C' | 'D'
  explanation: string
  domain: string
  difficulty: DifficultyLevel
  tags: string[]
}

export interface QuickReferenceTable {
  id: string
  title: string
  headers: string[]
  rows: QuickReferenceTableRow[]
  description?: string
}

export interface QuickReferenceTableRow {
  id: string
  cells: string[]
}

export interface BoardPracticeCategory {
  title: string
  description: string
  icon: string
  materials: string[]
}

// Progress tracking for board practice materials
export interface BoardPracticeProgress {
  materialId: string
  completedSections: string[]
  bookmarkedSections: string[]
  notes: Record<string, string>
  timeSpent: number
  lastAccessed: Date
  completionRate: number
  questionsAnswered?: number
  correctAnswers?: number
}

export interface BoardPracticeState {
  currentMaterial?: string
  currentSection?: string
  progress: Record<string, BoardPracticeProgress>
  bookmarks: string[]
  notes: Record<string, string>
  preferences: BoardPracticePreferences
}

export interface BoardPracticePreferences {
  fontSize: 'small' | 'medium' | 'large'
  showProgressIndicators: boolean
  autoBookmarkImportantSections: boolean
}

// Search types
export interface BoardPracticeSearchResult {
  materialId: string
  sectionId?: string
  title: string
  snippet: string
  type: 'section' | 'table' | 'question' | 'definition'
  relevanceScore: number
}

// Component props
export interface MaterialCardProps {
  material: BoardPracticeMaterial
  progress: BoardPracticeProgress
  onStartStudying: (materialId: string) => void
}

export interface PracticeStudyProps {
  material: BoardPracticeMaterial
  currentSection?: string
  onProgressUpdate: (sectionId: string, completed: boolean) => void
  onBookmark: (sectionId: string, bookmarked: boolean) => void
}

export interface QuestionSetProps {
  questions: PracticeQuestion[]
  onAnswerSubmit: (questionId: string, answer: string, correct: boolean) => void
  progress: BoardPracticeProgress
}