import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Brain, Target, TrendingUp, Clock, Award } from 'lucide-react'
import { CORE_TOPICS, ADVANCED_DOMAINS } from '@/types/quiz'
import metadata from '@/data/metadata.json'

export function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Genetic Counseling Board Exam Practice
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Master genetic counseling concepts with 49 expert-validated questions. 
          Practice core topics and advanced domains at your own pace.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Link to="/quiz">
            <Button size="lg">
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

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Target className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">{metadata.totalQuestions}</p>  
                <p className="text-sm text-muted-foreground">Total Questions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-success" />
              <div>
                <p className="text-2xl font-bold">{metadata.coreQuestions}</p>
                <p className="text-sm text-muted-foreground">Core Topics</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-accent" />
              <div>
                <p className="text-2xl font-bold">{metadata.advancedQuestions}</p>
                <p className="text-sm text-muted-foreground">Advanced Domains</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-warning" />
              <div>
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm text-muted-foreground">Accuracy Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Practice Options */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Core Topics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Core Practice Questions
            </CardTitle>
            <CardDescription>
              Master fundamental genetic counseling concepts across 6 key topics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-2">
              {Object.entries(CORE_TOPICS).map(([key, name]) => {
                const topicData = metadata.topics[name];
                return (
                  <div key={key} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <span className="text-sm font-medium">{name}</span>
                    <span className="text-sm text-muted-foreground">
                      {topicData?.count || 0} questions
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Advanced Domains */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Advanced Practice Questions
            </CardTitle>
            <CardDescription>
              Challenge yourself with specialized domains and emerging topics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-2 max-h-86 overflow-y-auto">
              {Object.entries(ADVANCED_DOMAINS).map(([key, name]) => {
                const domainData = metadata.domains[name];
                return (
                  <div key={key} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <span className="text-sm font-medium">{name}</span>
                    <span className="text-sm text-muted-foreground">
                      {domainData?.count || 0} questions
                    </span>
                  </div>
                );
              })}
            </div>            
          </CardContent>
        </Card>
      </div>

      {/* Study Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Study Tips for Success</CardTitle>
          <CardDescription>
            Maximize your board exam preparation with these evidence-based strategies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Active Recall Practice</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Answer questions before revealing explanations</li>
                <li>• Focus on understanding reasoning, not memorization</li>  
                <li>• Review incorrect answers thoroughly</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Progressive Difficulty</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Start with core topics to build foundation</li>
                <li>• Progress to advanced domains when confident</li>
                <li>• Use timed mode for exam simulation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}