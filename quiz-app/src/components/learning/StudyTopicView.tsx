import { useParams, useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BookOpen, Clock, Star } from 'lucide-react'
import { useLearning } from '@/contexts/LearningContext'
import { useEffect, useState } from 'react'
import { SectionRenderer } from './SectionRenderer'
import { TableOfContents } from './TableOfContents'

// Import Topic 1 content
import { topic1Sections, topic1QuickLookup } from '@/data/topic1-content'

export function StudyTopicView() {
  const { topicId, sectionId } = useParams<{ topicId: string; sectionId?: string }>()
  const navigate = useNavigate()
  const { getTopic, getProgress, updateProgress, markSectionComplete, toggleBookmark } = useLearning()
  
  const topic = topicId ? getTopic(topicId) : null
  const progress = topicId ? getProgress(topicId) : null

  // Get sections based on topicId (for now, only topic1 has detailed content)
  const sections = topicId === 'topic1' ? topic1Sections : []
  const quickLookup = topicId === 'topic1' ? topic1QuickLookup : undefined
  
  // Current section state
  const [currentSectionId, setCurrentSectionId] = useState<string>(
    sectionId || (sections.length > 0 ? sections[0].id : '')
  )
  
  const currentSection = sections.find(s => s.id === currentSectionId)

  // Update last accessed when component mounts
  useEffect(() => {
    if (topicId) {
      updateProgress(topicId, { lastAccessed: new Date() })
    }
  }, [topicId, updateProgress])

  // Update current section when URL changes
  useEffect(() => {
    if (sectionId && sections.some(s => s.id === sectionId)) {
      setCurrentSectionId(sectionId)
    }
  }, [sectionId, sections])

  // Handle section navigation
  const handleSectionClick = (newSectionId: string) => {
    setCurrentSectionId(newSectionId)
    navigate(`/learn/${topicId}/${newSectionId}`)
  }

  // Handle section completion
  const handleSectionComplete = () => {
    if (topicId && currentSectionId) {
      markSectionComplete(topicId, currentSectionId)
    }
  }

  // Handle bookmarking
  const handleSectionBookmark = () => {
    if (topicId && currentSectionId) {
      toggleBookmark(topicId, currentSectionId)
    }
  }

  // Section navigation
  const currentIndex = sections.findIndex(s => s.id === currentSectionId)
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < sections.length - 1

  const handlePreviousSection = () => {
    if (hasPrevious) {
      const prevSection = sections[currentIndex - 1]
      handleSectionClick(prevSection.id)
    }
  }

  const handleNextSection = () => {
    if (hasNext) {
      const nextSection = sections[currentIndex + 1]
      handleSectionClick(nextSection.id)
    }
  }

  if (!topic) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Topic Not Found</h1>
        <p className="text-muted-foreground">The requested study topic could not be found.</p>
        <Button onClick={() => navigate('/learn')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Study Guides
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header with breadcrumbs */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/learn')}
              className="p-0 h-auto font-normal hover:text-foreground"
            >
              Study Guides
            </Button>
            <span>/</span>
            <span>{topic.title}</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold">{topic.title}</h1>
            <div className="flex">
              {Array.from({ length: topic.importance }, (_, i) => (
                <Star key={i} className="h-5 w-5 fill-warning text-warning" />
              ))}
            </div>
          </div>
          <p className="text-lg text-muted-foreground">{topic.description}</p>
        </div>
        
        <Button 
          variant="outline" 
          onClick={() => navigate('/learn')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Topics
        </Button>
      </div>

      {/* Topic info bar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span>{topic.sectionCount || 0} sections</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{topic.estimatedTime} min read</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  topic.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                  topic.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {topic.difficulty}
                </span>
              </div>
            </div>
            
            {progress && (
              <div className="flex items-center gap-3">
                <div className="text-sm text-muted-foreground">
                  Progress: {progress.completionRate}%
                </div>
                <div className="w-24 bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress.completionRate}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Main content area */}
      {sections.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <TableOfContents
              sections={sections}
              currentSectionId={currentSectionId}
              completedSections={progress?.completedSections || []}
              bookmarkedSections={progress?.bookmarkedSections || []}
              onSectionClick={handleSectionClick}
            />
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            {currentSection ? (
              <SectionRenderer
                section={currentSection}
                isCompleted={progress?.completedSections.includes(currentSectionId) || false}
                isBookmarked={progress?.bookmarkedSections.includes(currentSectionId) || false}
                onComplete={handleSectionComplete}
                onBookmark={handleSectionBookmark}
                quickLookup={currentSectionId === sections[0]?.id ? quickLookup : undefined}
                onPrevious={handlePreviousSection}
                onNext={handleNextSection}
                hasPrevious={hasPrevious}
                hasNext={hasNext}
                currentIndex={currentIndex}
                totalSections={sections.length}
              />
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-muted-foreground">
                    Select a section from the table of contents to begin studying
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      ) : (
        <Card>
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Welcome to {topic.title}</h2>
              <p className="text-muted-foreground">
                Detailed study content for this topic is coming soon. 
                For now, you can explore other available topics.
              </p>
              <Button onClick={() => navigate('/learn')}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Topics
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}