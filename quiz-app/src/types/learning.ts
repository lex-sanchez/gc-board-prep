export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export interface StudyTopic {
  id: string
  title: string
  description: string
  sections?: StudySection[]
  quickLookup?: LookupTable[]
  objectives?: string[]
  estimatedTime: number
  difficulty: DifficultyLevel
  importance: number // 1-3 stars
  tags: string[]
  sectionCount?: number
}

export interface StudySection {
  id: string
  title: string
  content: string // Processed HTML content
  importance: number // 1-3 stars
  subsections: StudySubsection[]
  practiceQuestions: Question[]
  mnemonics: string[]
  estimatedReadTime: number
}

export interface StudySubsection {
  id: string
  title: string
  content: string
  level: number // heading level (h1, h2, h3, etc.)
}

export interface LookupTable {
  id: string
  title: string
  headers: string[]
  rows: LookupTableRow[]
}

export interface LookupTableRow {
  id: string
  cells: string[]
}

export interface Question {
  id: string
  question: string
  options: { A: string; B: string; C: string; D: string }
  correctAnswer: 'A' | 'B' | 'C' | 'D'
  explanation: string
}

// Learning Progress Types
export interface LearningProgress {
  topicId: string
  completedSections: string[]
  bookmarkedSections: string[]
  notes: Record<string, string>
  timeSpent: number
  lastAccessed: Date
  completionRate: number
}

export interface LearningState {
  currentTopic?: string
  currentSection?: string
  progress: Record<string, LearningProgress>
  bookmarks: string[]
  notes: Record<string, string>
  preferences: LearningPreferences
}

export interface LearningPreferences {
  fontSize: 'small' | 'medium' | 'large'
  theme: 'light' | 'dark' | 'auto'
  showProgressIndicators: boolean
  autoBookmarkImportantSections: boolean
}

// Search Types
export interface SearchResult {
  topicId: string
  sectionId: string
  title: string
  snippet: string
  type: 'section' | 'table' | 'definition' | 'mnemonic'
  relevanceScore: number
}

export interface SearchIndex {
  [key: string]: SearchResult[]
}

// Table of Contents Types
export interface TOCItem {
  id: string
  title: string
  level: number
  completed: boolean
  bookmarked: boolean
  children?: TOCItem[]
  estimatedTime?: number
}

// Navigation Types
export interface BreadcrumbItem {
  label: string
  href?: string
}

// Component Props Types
export interface TopicCardProps {
  topic: StudyTopic
  progress: LearningProgress
  onStartReading: (topicId: string) => void
}

export interface StudyContentProps {
  topic: StudyTopic
  currentSection?: string
  onProgressUpdate: (sectionId: string, completed: boolean) => void
  onBookmark: (sectionId: string, bookmarked: boolean) => void
}

export interface TableOfContentsProps {
  topic: StudyTopic
  currentSection?: string
  progress: LearningProgress
  onSectionClick: (sectionId: string) => void
}

export interface LearningStatsProps {
  overallProgress: number
  topicsCompleted: number
  totalTopics: number
  totalTimeSpent: number
  streakDays: number
}