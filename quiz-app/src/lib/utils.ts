import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

export function calculatePercentage(correct: number, total: number): number {
  if (total === 0) return 0
  return Math.round((correct / total) * 100)
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function getScoreColor(percentage: number): string {
  if (percentage >= 80) return "text-success"
  if (percentage >= 70) return "text-warning"
  return "text-destructive"
}

export function getScoreBadgeColor(percentage: number): string {
  if (percentage >= 80) return "bg-success/10 text-success"
  if (percentage >= 70) return "bg-warning/10 text-warning"
  return "bg-destructive/10 text-destructive"
}