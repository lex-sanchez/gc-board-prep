import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, Star, Bookmark } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { StudySection } from '@/types/learning'

interface TableOfContentsProps {
  sections: StudySection[]
  currentSectionId?: string
  completedSections: string[]
  bookmarkedSections: string[]
  onSectionClick: (sectionId: string) => void
}

export function TableOfContents({ 
  sections, 
  currentSectionId, 
  completedSections,
  bookmarkedSections,
  onSectionClick 
}: TableOfContentsProps) {
  const isCompleted = (sectionId: string) => completedSections.includes(sectionId)
  const isBookmarked = (sectionId: string) => bookmarkedSections.includes(sectionId)
  const isCurrent = (sectionId: string) => currentSectionId === sectionId

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle className="text-lg">Table of Contents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={cn(
                "w-full text-left p-3 rounded-lg transition-all duration-200",
                "hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary/50",
                isCurrent(section.id) 
                  ? "bg-primary/10 border border-primary/20 text-primary" 
                  : "hover:bg-muted/50"
              )}
            >
              <div className="space-y-2">
                {/* Section title and indicators */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium truncate">
                        {section.title}
                      </span>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {Array.from({ length: section.importance }, (_, i) => (
                          <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{section.estimatedReadTime}m</span>
                      </div>
                      
                      <div className={cn(
                        "px-1.5 py-0.5 rounded text-xs",
                        section.importance === 3 ? "bg-red-100 text-red-600" :
                        section.importance === 2 ? "bg-yellow-100 text-yellow-600" :
                        "bg-green-100 text-green-600"
                      )}>
                        {section.importance === 3 ? "High" :
                         section.importance === 2 ? "Med" : "Low"}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {isBookmarked(section.id) && (
                      <Bookmark className="h-4 w-4 text-primary fill-current" />
                    )}
                    {isCompleted(section.id) && (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    )}
                  </div>
                </div>

                {/* Progress indicator */}
                {isCurrent(section.id) && (
                  <div className="w-full bg-primary/20 rounded-full h-1">
                    <div className="bg-primary h-1 rounded-full w-0 animate-pulse" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Progress summary */}
        <div className="mt-6 pt-4 border-t">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">
                {completedSections.length} of {sections.length}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: `${sections.length > 0 ? (completedSections.length / sections.length) * 100 : 0}%` 
                }}
              />
            </div>
            <div className="text-xs text-muted-foreground">
              {Math.round(sections.length > 0 ? (completedSections.length / sections.length) * 100 : 0)}% complete
            </div>
          </div>
        </div>

        {/* Study stats */}
        <div className="mt-4 grid grid-cols-2 gap-3 text-center">
          <div className="bg-muted/50 p-2 rounded">
            <div className="font-semibold text-sm text-primary">
              {bookmarkedSections.length}
            </div>
            <div className="text-xs text-muted-foreground">Bookmarked</div>
          </div>
          <div className="bg-muted/50 p-2 rounded">
            <div className="font-semibold text-sm text-green-600">
              {sections.reduce((sum, s) => sum + s.estimatedReadTime, 0)}m
            </div>
            <div className="text-xs text-muted-foreground">Total Time</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}