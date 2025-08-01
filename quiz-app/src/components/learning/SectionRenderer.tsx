import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Star, Clock, Bookmark, BookmarkCheck, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { StudySection, LookupTable } from '@/types/learning'

interface SectionRendererProps {
  section: StudySection
  isCompleted?: boolean
  isBookmarked?: boolean
  onComplete?: () => void
  onBookmark?: () => void
  quickLookup?: LookupTable
  onPrevious?: () => void
  onNext?: () => void
  hasPrevious?: boolean
  hasNext?: boolean
  currentIndex?: number
  totalSections?: number
}

export function SectionRenderer({ 
  section, 
  isCompleted = false,
  isBookmarked = false,
  onComplete,
  onBookmark,
  quickLookup,
  onPrevious,
  onNext,
  hasPrevious = false,
  hasNext = false,
  currentIndex = 0,
  totalSections = 0
}: SectionRendererProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">{section.title}</h1>
            <div className="flex">
              {Array.from({ length: section.importance }, (_, i) => (
                <Star key={i} className="h-5 w-5 fill-warning text-warning" />
              ))}
            </div>
            {isCompleted && (
              <div className="completion-badge">
                <CheckCircle className="h-4 w-4" />
                Completed
              </div>
            )}
          </div>
          <div className="section-metadata">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{section.estimatedReadTime} min read</span>
            </div>
            <div className={cn(
              "priority-badge",
              section.importance === 3 ? "high" :
              section.importance === 2 ? "medium" :
              "low"
            )}>
              {section.importance === 3 ? "High Priority" :
               section.importance === 2 ? "Medium Priority" : "Low Priority"}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onBookmark}
            className={cn(
              "flex items-center gap-2",
              isBookmarked && "bg-primary/10 border-primary text-primary"
            )}
          >
            {isBookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </Button>
          
          {!isCompleted && (
            <Button 
              className="section-action-button"
              onClick={onComplete} 
              size="sm"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark Complete
            </Button>
          )}
        </div>
      </div>

      {/* Quick Lookup Table */}
      {quickLookup && (
        <div className="lookup-table-container">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              🔍 {quickLookup.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    {quickLookup.headers.map((header, index) => (
                      <th key={index}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {quickLookup.rows.map((row) => (
                    <tr key={row.id}>
                      {row.cells.map((cell, cellIndex) => (
                        <td key={cellIndex}>
                          {cellIndex === 0 ? (
                            <span className="font-semibold">{cell}</span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </div>
      )}

      {/* Main Content */}
      <div className="content-container">
        <div 
          className="prose-enhanced"
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      </div>

      {/* Memory Aids & Mnemonics with enhanced styling */}
      <div className="syndrome-card syndrome-card-medium mnemonics-card">
        <div className="syndrome-card-overlay"></div>
        
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            🧠 Memory Aids & Mnemonics
          </h3>
          
          <div className="space-y-3">
            {section.mnemonics.map((mnemonic, index) => (
              <div key={index} className="mnemonic-card-enhanced">
                <p className="text-sm font-medium leading-relaxed">{mnemonic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Practice Questions */}
      {section.practiceQuestions && section.practiceQuestions.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                🎯 Practice Questions
              </CardTitle>
              <Button 
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Hide" : "Show"} Questions
              </Button>
            </div>
          </CardHeader>
          {isExpanded && (
            <CardContent>
              <div className="space-y-4">
                {section.practiceQuestions.map((question, index) => (
                  <div key={question.id} className="practice-question-card">
                    <h4 className="font-semibold mb-3">Question {index + 1}:</h4>
                    <p className="mb-4">{question.question}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      {Object.entries(question.options).map(([key, value]) => (
                        <div key={key} className="practice-option">
                          <span className="font-semibold text-sm w-6">{key})</span>
                          <span className="text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                    <details className="text-sm">
                      <summary className="cursor-pointer font-semibold text-primary hover:text-primary/80">
                        Show Answer & Explanation
                      </summary>
                      <div className="answer-reveal">
                        <p className="font-semibold text-green-700 mb-2">
                          Correct Answer: {question.correctAnswer}) {question.options[question.correctAnswer]}
                        </p>
                        <p className="text-green-700">{question.explanation}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      )}

      {/* Section Navigation */}
      <div className="flex justify-between items-center pt-6 border-t">
        <div className="flex items-center gap-2">
          <Button
            className="nav-button"
            variant="outline"
            onClick={onPrevious}
            disabled={!hasPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          {totalSections > 0 && (
            <div className="section-progress-indicator">
              {currentIndex + 1} of {totalSections}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {!isCompleted && (
            <Button 
              className="section-action-button"
              onClick={onComplete} 
              variant="outline"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark Complete
            </Button>
          )}
          <Button
            className="nav-button"
            onClick={onNext}
            disabled={!hasNext}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}