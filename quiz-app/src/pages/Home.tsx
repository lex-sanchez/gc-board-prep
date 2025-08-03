import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Brain, Target, TrendingUp, Clock, Award, Layers } from 'lucide-react'
import { CORE_TOPICS, ADVANCED_DOMAINS } from '@/types/quiz'
import metadata from '@/data/metadata.json'

export function Home() {
  return (
    <div className="dashboard-container">
      {/* Hero Section */}
      <div className="dashboard-section">
        <div className="hero-background">
          <h1 className="hero-title">
            Genetic Counseling Board Exam Practice
          </h1>
          <p className="hero-subtitle">
            Master genetic counseling concepts with 49 expert-validated questions. 
            Practice core topics and advanced domains at your own pace.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Link to="/quiz">
              <Button size="lg" className="button-enhanced">
                <BookOpen className="h-5 w-5 mr-2" />
                Start Practice Quiz
              </Button>
            </Link>
            <Link to="/progress">
              <Button variant="outline" size="lg">
                <TrendingUp className="h-5 w-5 mr-2" />
                View Progress
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="dashboard-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="stats-card">
            <div className="flex items-center space-x-3">
              <div className="stats-icon">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="stats-number">{metadata.totalQuestions}</p>  
                <p className="text-sm text-muted-foreground font-medium">Total Questions</p>
              </div>
            </div>
          </div>
          
          <div className="stats-card">
            <div className="flex items-center space-x-3">
              <div className="stats-icon">
                <Brain className="h-8 w-8 text-success" />
              </div>
              <div>
                <p className="stats-number">{metadata.coreQuestions}</p>
                <p className="text-sm text-muted-foreground font-medium">Core Topics</p>
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div className="flex items-center space-x-3">
              <div className="stats-icon">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div>
                <p className="stats-number">{metadata.advancedQuestions}</p>
                <p className="text-sm text-muted-foreground font-medium">Advanced Domains</p>
              </div>
            </div>
          </div>

          <div className="stats-card">
            <div className="flex items-center space-x-3">
              <div className="stats-icon">
                <Clock className="h-8 w-8 text-warning" />
              </div>
              <div>
                <p className="stats-number">98%</p>
                <p className="text-sm text-muted-foreground font-medium">Accuracy Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Options */}
      <div className="dashboard-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Core Topics */}
          <Card className="practice-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-title">
                <Brain className="h-5 w-5 text-primary" />
                Core Practice Questions
              </CardTitle>
              <CardDescription className="text-subtitle">
                Master fundamental genetic counseling concepts across 6 key topics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(CORE_TOPICS).map(([key, name]) => {
                  const topicData = metadata.topics[name];
                  return (
                    <div key={key} className="topic-item">
                      <span className="text-sm font-semibold">{name}</span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {topicData?.count || 0} questions
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Advanced Domains */}
          <Card className="practice-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-title">
                <Award className="h-5 w-5 text-accent" />
                Advanced Practice Questions
              </CardTitle>
              <CardDescription className="text-subtitle">
                Challenge yourself with specialized domains and emerging topics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-2">
                {Object.entries(ADVANCED_DOMAINS).map(([key, name]) => {
                  const domainData = metadata.domains[name];
                  return (
                    <div key={key} className="topic-item">
                      <span className="text-sm font-semibold">{name}</span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {domainData?.count || 0} questions
                      </span>
                    </div>
                  );
                })}
              </div>            
            </CardContent>
          </Card>

          {/* Flashcards */}
          <Card className="practice-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-title">
                <Layers className="h-5 w-5 text-primary" />
                Quick-Fire Flashcards
              </CardTitle>
              <CardDescription className="text-subtitle">
                120+ rapid-review questions for verbal practice and active recall
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">Total Questions</span>
                  <span className="text-muted-foreground font-medium">120+</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">Study Modes</span>
                  <span className="text-muted-foreground font-medium">4 modes</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">Topics Covered</span>
                  <span className="text-muted-foreground font-medium">All 6 topics</span>
                </div>
              </div>
              <Link to="/flashcards" className="block">
                <Button className="w-full">
                  Start Flashcard Practice
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Study Tips */}
      <div className="dashboard-section">
        <Card className="study-tips-card">
          <CardHeader>
            <CardTitle className="text-title">Study Tips for Success</CardTitle>
            <CardDescription className="text-subtitle">
              Maximize your board exam preparation with these evidence-based strategies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="study-tip-section">
                <h4 className="study-tip-title">Active Recall Practice</h4>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  <li>• Answer questions before revealing explanations</li>
                  <li>• Focus on understanding reasoning, not memorization</li>  
                  <li>• Review incorrect answers thoroughly</li>
                </ul>
              </div>
              <div className="study-tip-section">
                <h4 className="study-tip-title">Progressive Difficulty</h4>
                <ul className="text-sm text-muted-foreground space-y-2 font-medium">
                  <li>• Start with core topics to build foundation</li>
                  <li>• Progress to advanced domains when confident</li>
                  <li>• Use timed mode for exam simulation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}