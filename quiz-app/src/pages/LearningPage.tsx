import { Routes, Route } from 'react-router-dom'
import { TopicOverview } from '@/components/learning/TopicOverview'
import { StudyTopicView } from '@/components/learning/StudyTopicView'

export function LearningPage() {
  return (
    <Routes>
      <Route path="/" element={<TopicOverview />} />
      <Route path="/:topicId" element={<StudyTopicView />} />
      <Route path="/:topicId/:sectionId" element={<StudyTopicView />} />
    </Routes>
  )
}