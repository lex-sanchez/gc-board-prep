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
            <h1 className="text-3xl font-bold">{section.title}</h1>
            <div className="flex">
              {Array.from({ length: section.importance }, (_, i) => (
                <Star key={i} className="h-5 w-5 fill-warning text-warning" />
              ))}
            </div>
            {isCompleted && (
              <CheckCircle className="h-6 w-6 text-green-600" />
            )}
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{section.estimatedReadTime} min read</span>
            </div>
            <div className={cn(
              "px-2 py-1 rounded-full text-xs font-medium",
              section.importance === 3 ? "bg-red-100 text-red-700" :
              section.importance === 2 ? "bg-yellow-100 text-yellow-700" :
              "bg-green-100 text-green-700"
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
            <Button onClick={onComplete} size="sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark Complete
            </Button>
          )}
        </div>
      </div>

      {/* Quick Lookup Table */}
      {quickLookup && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              🔍 {quickLookup.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    {quickLookup.headers.map((header, index) => (
                      <th key={index} className="text-left p-3 font-semibold text-sm bg-muted/50">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {quickLookup.rows.map((row, index) => (
                    <tr key={row.id} className={cn(
                      "border-b hover:bg-muted/50 transition-colors",
                      index % 2 === 0 ? "bg-background" : "bg-muted/20"
                    )}>
                      {row.cells.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-3 text-sm">
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
        </Card>
      )}

      {/* Main Content */}
      <Card>
        <CardContent className="p-8">
          <div 
            className="prose prose-lg max-w-none [&>div]:space-y-4"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </CardContent>
      </Card>

      {/* Mnemonics Section */}
      {section.mnemonics && section.mnemonics.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              🧠 Memory Aids & Mnemonics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {section.mnemonics.map((mnemonic, index) => (
                <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-sm text-purple-700 font-medium">{mnemonic}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

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
                  <div key={question.id} className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-3">Question {index + 1}:</h4>
                    <p className="mb-4">{question.question}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      {Object.entries(question.options).map(([key, value]) => (
                        <div key={key} className="flex items-start gap-2 p-2 rounded bg-muted/50">
                          <span className="font-semibold text-sm w-6">{key})</span>
                          <span className="text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                    <details className="text-sm">
                      <summary className="cursor-pointer font-semibold text-primary hover:text-primary/80">
                        Show Answer & Explanation
                      </summary>
                      <div className="mt-3 p-3 bg-green-50 rounded border border-green-200">
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
            variant="outline"
            onClick={onPrevious}
            disabled={!hasPrevious}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          {totalSections > 0 && (
            <div className="text-sm text-muted-foreground px-4">
              {currentIndex + 1} of {totalSections}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {!isCompleted && (
            <Button onClick={onComplete} variant="outline">
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark Complete
            </Button>
          )}
          <Button
            onClick={onNext}
            disabled={!hasNext}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}