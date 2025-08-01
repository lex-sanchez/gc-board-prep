import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Clock, Star, ArrowRight } from 'lucide-react'
import { useLearning } from '@/contexts/LearningContext'
import { useNavigate } from 'react-router-dom'

export function TopicOverview() {
  const { getTopics, getProgress, getOverallProgress } = useLearning()
  const navigate = useNavigate()
  const topics = getTopics()
  const overallProgress = getOverallProgress()

  const handleStartReading = (topicId: string) => {
    navigate(`/learn/${topicId}`)
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Study Guides</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive study materials for genetic counseling board exam preparation. 
          Master key concepts with our structured learning approach.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">{topics.length}</p>
            <p className="text-sm text-muted-foreground">Study Topics</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Clock className="h-8 w-8 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold text-accent">
              ~{Math.round(topics.reduce((sum, topic) => sum + topic.estimatedTime, 0) / 60)} hours
            </p>
            <p className="text-sm text-muted-foreground">Total Study Time</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Star className="h-8 w-8 text-warning mx-auto mb-2" />
            <p className="text-2xl font-bold text-warning">{overallProgress.percentage}%</p>
            <p className="text-sm text-muted-foreground">Overall Progress</p>
          </CardContent>
        </Card>
      </div>

      {/* Topic Cards */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Available Topics</h2>
        <div className="space-y-4">
          {topics.map((topic) => {
            const progress = getProgress(topic.id)
            return (
              <Card key={topic.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-xl">{topic.title}</CardTitle>
                        <div className="flex">
                          {Array.from({ length: topic.importance }, (_, i) => (
                            <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                          ))}
                        </div>
                      </div>
                      <CardDescription>{topic.description}</CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        topic.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                        topic.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {topic.difficulty}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {topic.sectionCount || 0} sections
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {topic.estimatedTime} min
                      </span>
                    </div>
                    <Button onClick={() => handleStartReading(topic.id)}>
                      Start Reading
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">{progress.completionRate}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress.completionRate}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Coming Soon Section */}
      <Card className="border-dashed">
        <CardContent className="p-8 text-center">
          <h3 className="text-lg font-semibold mb-2">More Topics Coming Soon</h3>
          <p className="text-muted-foreground mb-4">
            Additional study guides for neurological disorders, metabolic conditions, and specialized systems.
          </p>
          <Button variant="outline" disabled>
            4 More Topics in Development
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}