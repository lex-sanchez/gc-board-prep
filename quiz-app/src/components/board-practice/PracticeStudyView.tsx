import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Star, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import boardPracticeIndex from '@/data/board-practice/index.json'
import type { BoardPracticeMaterial } from '@/types/board-practice'

// Import content data
import { domain1bSections } from '@/data/board-practice/domain1b-human-development'
import { syndromeRecognitionSections } from '@/data/board-practice/syndrome-recognition'
import { hereditaryBleedingSections } from '@/data/board-practice/hereditary-bleeding-disorders'
import { geneticTestingMethodsSections } from '@/data/board-practice/genetic-testing-methods'
import { mathematicalCalculationsSections } from '@/data/board-practice/mathematical-calculations'
import { professionalFrameworksSections } from '@/data/board-practice/professional-frameworks'
import { ethicsScenariosSections } from '@/data/board-practice/ethics-scenarios'

export function PracticeStudyView() {
  const { materialId, sectionId } = useParams<{ materialId: string; sectionId?: string }>()
  const navigate = useNavigate()
  
  const material = boardPracticeIndex.materials.find(m => m.id === materialId) as BoardPracticeMaterial | undefined
  
  // Get sections based on materialId
  const sections = materialId === 'domain1b-human-development' ? domain1bSections : 
                   materialId === 'syndrome-recognition' ? syndromeRecognitionSections :
                   materialId === 'hereditary-bleeding-disorders' ? hereditaryBleedingSections :
                   materialId === 'genetic-testing-methods' ? geneticTestingMethodsSections :
                   materialId === 'mathematical-calculations' ? mathematicalCalculationsSections :
                   materialId === 'professional-frameworks' ? professionalFrameworksSections :
                   materialId === 'ethics-scenarios' ? ethicsScenariosSections : []
  
  // Current section state
  const [currentSectionId, setCurrentSectionId] = useState<string>(
    sectionId || (sections.length > 0 ? sections[0].id : '')
  )
  
  const currentSection = sections.find(s => s.id === currentSectionId)

  // Update current section when URL changes
  useEffect(() => {
    if (sectionId && sections.some(s => s.id === sectionId)) {
      setCurrentSectionId(sectionId)
    }
  }, [sectionId, sections])

  // Handle section navigation
  const handleSectionClick = (newSectionId: string) => {
    setCurrentSectionId(newSectionId)
    navigate(`/practice/${materialId}/${newSectionId}`)
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (!material) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Material Not Found</h1>
        <p className="text-muted-foreground">The requested study material could not be found.</p>
        <Button onClick={() => navigate('/practice')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Board Practice
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header with breadcrumbs */}
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
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold mb-1">{material.title}</h1>
            <div className="flex items-center gap-2">
              <Badge 
                variant="secondary" 
                className={getDifficultyColor(material.difficulty)}
              >
                {material.difficulty}
              </Badge>
              <div className="flex">
                {Array.from({ length: material.importance }, (_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">{material.description}</p>
        </div>
        
        <Button 
          className="nav-button"
          variant="outline" 
          onClick={() => navigate('/practice')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Materials
        </Button>
      </div>

      {/* Main content area */}
      {sections.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Table of Contents */}
          <div className="lg:col-span-1">
            <div className="study-content-area p-4">
              <h3 className="font-semibold mb-4">Contents</h3>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`w-full text-left p-3 rounded-lg text-sm transition-colors ${
                      currentSectionId === section.id
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'hover:bg-gray-50 text-muted-foreground'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="line-clamp-2">{section.title}</span>
                      <div className="flex items-center gap-1 ml-2">
                        {section.importance === 3 && (
                          <Star className="h-3 w-3 fill-warning text-warning" />
                        )}
                        <span className="text-xs">{index + 1}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            {currentSection ? (
              <div className="study-content-area">
                {/* Section header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-semibold">{currentSection.title}</h2>
                    {currentSection.importance === 3 && (
                      <Badge variant="outline" className="text-red-600 border-red-600">
                        High Yield
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{currentSection.estimatedReadTime} min read</span>
                  </div>
                </div>

                {/* Section content */}
                <div 
                  className="prose prose-sm max-w-none mb-8"
                  dangerouslySetInnerHTML={{ __html: currentSection.content }}
                />

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={handlePreviousSection}
                    disabled={!hasPrevious}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  
                  <span className="text-sm text-muted-foreground">
                    Section {currentIndex + 1} of {sections.length}
                  </span>
                  
                  <Button
                    variant="outline"
                    onClick={handleNextSection}
                    disabled={!hasNext}
                    className="flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="study-content-area">
                <div className="text-center">
                  <div className="text-muted-foreground">
                    Select a section from the table of contents to begin studying
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="study-content-area">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Welcome to {material.title}</h2>
            <p className="text-muted-foreground">
              Detailed study content for this material is coming soon. 
              For now, you can explore other available materials.
            </p>
            <Button className="nav-button" onClick={() => navigate('/practice')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Materials
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}