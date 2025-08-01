import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
      <div className="study-hero-section">
        <h1 className="study-hero-title">Study Guides</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive study materials for genetic counseling board exam preparation. 
          Master key concepts with our structured learning approach.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="study-stats-card">
          <div className="study-stats-icon">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <div className="study-stats-number">{topics.length}</div>
          <p className="text-sm text-muted-foreground">Study Topics</p>
        </div>
        <div className="study-stats-card">
          <div className="study-stats-icon">
            <Clock className="h-8 w-8 text-accent" />
          </div>
          <div className="study-stats-number">
            ~{Math.round(topics.reduce((sum, topic) => sum + topic.estimatedTime, 0) / 60)}h
          </div>
          <p className="text-sm text-muted-foreground">Total Study Time</p>
        </div>
        <div className="study-stats-card">
          <div className="study-stats-icon">
            <Star className="h-8 w-8 text-warning" />
          </div>
          <div className="study-stats-number">{overallProgress.percentage}%</div>
          <p className="text-sm text-muted-foreground">Overall Progress</p>
        </div>
      </div>

      {/* Topic Cards */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Available Topics</h2>
        <div className="space-y-6">
          {topics.map((topic) => {
            const progress = getProgress(topic.id)
            return (
              <div key={topic.id} className="topic-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl">{topic.title}</CardTitle>
                        <div className="flex">
                          {Array.from({ length: topic.importance }, (_, i) => (
                            <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                          ))}
                        </div>
                      </div>
                      <CardDescription className="text-base">{topic.description}</CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`difficulty-badge ${
                        topic.difficulty === 'Beginner' ? 'beginner' :
                        topic.difficulty === 'Intermediate' ? 'intermediate' :
                        'advanced'
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
                    <Button 
                      className="topic-start-button" 
                      onClick={() => handleStartReading(topic.id)}
                    >
                      Start Reading
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="topic-progress-container">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">{progress.completionRate}%</span>
                    </div>
                    <div className="progress-container">
                      <div 
                        className="progress-bar"
                        style={{ width: `${progress.completionRate}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </div>
            )
          })}
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="coming-soon-card">
        <h3 className="text-lg font-semibold mb-2">More Topics Coming Soon</h3>
        <p className="text-muted-foreground mb-4">
          Additional study guides for neurological disorders, metabolic conditions, and specialized systems.
        </p>
        <Button variant="outline" disabled>
          4 More Topics in Development
        </Button>
      </div>
    </div>
  )
}