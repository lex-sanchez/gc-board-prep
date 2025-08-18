import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Clock, Star, ArrowRight, Zap, Users, Library, Target } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import boardPracticeIndex from '@/data/board-practice/index.json'
import type { BoardPracticeMaterial, BoardPracticeCategory } from '@/types/board-practice'

const iconMap = {
  BookOpen,
  Zap,
  Users,
  Library,
  Target
}

export function BoardPracticeOverview() {
  const navigate = useNavigate()
  const materials = boardPracticeIndex.materials as BoardPracticeMaterial[]
  const categories = boardPracticeIndex.categories as Record<string, BoardPracticeCategory>

  const handleStartMaterial = (materialId: string, type: string) => {
    if (type === 'practice-questions') {
      navigate(`/practice/questions/${materialId}`)
    } else {
      navigate(`/practice/${materialId}`)
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'study-guide': return 'text-blue-600'
      case 'quick-reference': return 'text-green-600'
      case 'scenario-based': return 'text-purple-600'
      case 'reference': return 'text-orange-600'
      case 'practice-questions': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="space-y-8">

      {/* Categories */}
      <div className="space-y-8">
        {Object.entries(categories).map(([categoryKey, category]) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap] || BookOpen
          const categoryMaterials = materials.filter(material => 
            category.materials.includes(material.id)
          )

          return (
            <div key={categoryKey} className="space-y-4">
              <div className="flex items-center gap-3">
                <IconComponent className="h-6 w-6 text-primary" />
                <div>
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryMaterials.map((material) => (
                  <Card key={material.id} className="practice-material-card">
                    <CardHeader>
                      <div className="mb-2 flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg leading-tight">{material.title}</CardTitle>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <Badge 
                            variant="secondary" 
                            className={getDifficultyColor(material.difficulty)}
                          >
                            {material.difficulty}
                          </Badge>
                          <div className="flex">
                            {Array.from({ length: material.importance }, (_, i) => (
                              <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {material.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {/* Material Info */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {material.estimatedTime} min
                            </span>
                            {material.sectionCount && (
                              <span className="flex items-center gap-1">
                                <BookOpen className="h-4 w-4" />
                                {material.sectionCount} sections
                              </span>
                            )}
                            {material.questionCount && (
                              <span className="flex items-center gap-1">
                                <Target className="h-4 w-4" />
                                {material.questionCount} questions
                              </span>
                            )}
                          </div>
                          <Badge variant="outline" className={getTypeColor(material.type)}>
                            {material.domain}
                          </Badge>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {material.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {material.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{material.tags.length - 3} more
                            </Badge>
                          )}
                        </div>

                        {/* Action Button */}
                        <Button 
                          className="w-full"
                          onClick={() => handleStartMaterial(material.id, material.type)}
                        >
                          {material.type === 'practice-questions' ? 'Start Questions' : 'Start Reading'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Study Tips */}
      <div className="study-tips-card">
        <CardHeader>
          <CardTitle className="text-title">Board Practice Study Strategy</CardTitle>
          <CardDescription className="text-subtitle">
            Maximize your board exam preparation with these targeted strategies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="study-tip-section">
              <h4 className="study-tip-title">Targeted Review</h4>
              <ul className="space-y-2 text-sm font-medium text-muted-foreground">
                <li>• Focus on areas identified from your practice exam</li>
                <li>• Start with high-importance (3-star) materials</li>
                <li>• Use quick references for rapid review</li>
              </ul>
            </div>
            <div className="study-tip-section">
              <h4 className="study-tip-title">Practice Integration</h4>
              <ul className="space-y-2 text-sm font-medium text-muted-foreground">
                <li>• Combine study guides with practice questions</li>
                <li>• Review explanations thoroughly</li>
                <li>• Apply concepts to scenario-based materials</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  )
}