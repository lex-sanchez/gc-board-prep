import { Routes, Route } from 'react-router-dom'
import { BoardPracticeOverview } from '@/components/board-practice/BoardPracticeOverview'
import { PracticeStudyView } from '@/components/board-practice/PracticeStudyView'
import { PracticeQuestionsView } from '@/components/board-practice/PracticeQuestionsView'

export function BoardPracticePage() {
  return (
    <Routes>
      <Route path="/" element={<BoardPracticeOverview />} />
      <Route path="/:materialId" element={<PracticeStudyView />} />
      <Route path="/:materialId/:sectionId" element={<PracticeStudyView />} />
      <Route path="/questions/:questionSetId" element={<PracticeQuestionsView />} />
    </Routes>
  )
}