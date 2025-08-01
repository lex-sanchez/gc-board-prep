import { marked } from 'marked'
import DOMPurify from 'dompurify'
import type { StudyTopic, StudySection, StudySubsection, LookupTable } from '@/types/learning'

// Configure marked options
marked.setOptions({
  gfm: true,
  breaks: false,
})

export interface ParsedMarkdownContent {
  title: string
  description: string
  sections: StudySection[]
  objectives: string[]
  quickLookup: LookupTable[]
  estimatedTime: number
  importance: number
}

export class MarkdownParser {
  /**
   * Parse a markdown string into structured study content
   */
  static parseStudyGuide(markdown: string): ParsedMarkdownContent {
    const lines = markdown.split('\n')
    const result: ParsedMarkdownContent = {
      title: '',
      description: '',
      sections: [],
      objectives: [],
      quickLookup: [],
      estimatedTime: 0,
      importance: 1
    }

    let currentSection: StudySection | null = null
    let currentSubsection: StudySubsection | null = null
    let currentContent: string[] = []
    let inTable = false
    let currentTable: LookupTable | null = null
    let tableHeaders: string[] = []
    let inObjectives = false

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmedLine = line.trim()

      // Extract title (first h1)
      if (trimmedLine.startsWith('# ') && !result.title) {
        result.title = trimmedLine.replace('# ', '').trim()
        continue
      }

      // Extract learning objectives
      if (trimmedLine.includes('🎯 Learning Objectives') || trimmedLine.includes('Learning Objectives')) {
        inObjectives = true
        continue
      }

      // Extract objectives list items
      if (inObjectives && trimmedLine.startsWith('1.')) {
        inObjectives = false
        // Parse objectives from numbered list
        let j = i
        while (j < lines.length && (lines[j].trim().match(/^\d+\./) || lines[j].trim() === '')) {
          const objectiveLine = lines[j].trim()
          if (objectiveLine && objectiveLine.match(/^\d+\./)) {
            const objective = objectiveLine.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1')
            result.objectives.push(objective)
          }
          j++
        }
        i = j - 1
        continue
      }

      // Handle section headers (h2)
      if (trimmedLine.startsWith('## ')) {
        // Save previous section
        if (currentSection) {
          if (currentSubsection) {
            currentSubsection.content = this.processContent(currentContent.join('\n'))
            currentSection.subsections.push(currentSubsection)
          }
          if (currentContent.length > 0) {
            currentSection.content = this.processContent(currentContent.join('\n'))
          }
          result.sections.push(currentSection)
        }

        // Start new section
        const sectionTitle = trimmedLine.replace('## ', '').trim()
        const importance = this.extractImportance(sectionTitle)
        currentSection = {
          id: this.generateId(sectionTitle),
          title: this.cleanTitle(sectionTitle),
          content: '',
          importance,
          subsections: [],
          practiceQuestions: [],
          mnemonics: [],
          estimatedReadTime: 0
        }
        currentSubsection = null
        currentContent = []
        continue
      }

      // Handle subsection headers (h3)
      if (trimmedLine.startsWith('### ')) {
        // Save previous subsection
        if (currentSubsection && currentSection) {
          currentSubsection.content = this.processContent(currentContent.join('\n'))
          currentSection.subsections.push(currentSubsection)
        }

        // Start new subsection
        const subsectionTitle = trimmedLine.replace('### ', '').trim()
        currentSubsection = {
          id: this.generateId(subsectionTitle),
          title: this.cleanTitle(subsectionTitle),
          content: '',
          level: 3
        }
        currentContent = []
        continue
      }

      // Handle tables (Quick Lookup tables)
      if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
        if (!inTable) {
          // Start of table
          inTable = true
          tableHeaders = trimmedLine.split('|').map(h => h.trim()).filter(h => h !== '')
          currentTable = {
            id: this.generateId(`table-${result.quickLookup.length}`),
            title: 'Quick Reference Table',
            headers: tableHeaders,
            rows: []
          }
        } else if (trimmedLine.includes('---') || trimmedLine.includes('===')) {
          // Table separator line, skip
          continue
        } else {
          // Table row
          const cells = trimmedLine.split('|').map(c => c.trim()).filter(c => c !== '')
          if (cells.length === tableHeaders.length && currentTable) {
            currentTable.rows.push({
              id: this.generateId(`row-${currentTable.rows.length}`),
              cells
            })
          }
        }
        continue
      } else if (inTable) {
        // End of table
        inTable = false
        if (currentTable && currentTable.rows.length > 0) {
          result.quickLookup.push(currentTable)
        }
        currentTable = null
        tableHeaders = []
      }

      // Add content to current section/subsection
      if (trimmedLine || currentContent.length > 0) {
        currentContent.push(line)
      }
    }

    // Save final section
    if (currentSection) {
      if (currentSubsection) {
        currentSubsection.content = this.processContent(currentContent.join('\n'))
        currentSection.subsections.push(currentSubsection)
      }
      if (currentContent.length > 0) {
        currentSection.content = this.processContent(currentContent.join('\n'))
      }
      result.sections.push(currentSection)
    }

    // Calculate estimated reading time (200 words per minute)
    const wordCount = markdown.split(/\s+/).length
    result.estimatedTime = Math.ceil(wordCount / 200)

    // Extract overall importance from title
    result.importance = this.extractImportance(result.title)

    return result
  }

  /**
   * Process markdown content to HTML
   */
  private static processContent(content: string): string {
    if (!content.trim()) return ''
    
    const html = marked.parse(content) as string
    return DOMPurify.sanitize(html)
  }

  /**
   * Extract importance rating from title (⭐⭐⭐)
   */
  private static extractImportance(title: string): number {
    const starMatches = title.match(/⭐/g)
    return starMatches ? starMatches.length : 1
  }

  /**
   * Clean title by removing importance stars and emojis
   */
  private static cleanTitle(title: string): string {
    return title
      .replace(/⭐+/g, '')
      .replace(/[🎯📊🧬🎀🎗️🧠🫀🔍📖📋📝🏁]/g, '')
      .trim()
  }

  /**
   * Generate URL-safe ID from title
   */
  private static generateId(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  /**
   * Create a study topic from parsed markdown
   */
  static createStudyTopic(
    topicId: string,
    markdown: string,
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced' = 'Intermediate',
    tags: string[] = []
  ): StudyTopic {
    const parsed = this.parseStudyGuide(markdown)
    
    return {
      id: topicId,
      title: parsed.title,
      description: this.generateDescription(parsed),
      sections: parsed.sections,
      quickLookup: parsed.quickLookup,
      objectives: parsed.objectives,
      estimatedTime: parsed.estimatedTime,
      difficulty,
      importance: parsed.importance,
      tags
    }
  }

  /**
   * Generate a description from the first paragraph or objectives
   */
  private static generateDescription(parsed: ParsedMarkdownContent): string {
    if (parsed.objectives.length > 0) {
      return `Learn about ${parsed.objectives[0].toLowerCase()}`
    }
    
    // Try to extract from first section
    if (parsed.sections.length > 0) {
      const firstSection = parsed.sections[0]
      const plainText = firstSection.content.replace(/<[^>]*>/g, '').trim()
      const firstSentence = plainText.split('.')[0]
      if (firstSentence.length > 20 && firstSentence.length < 200) {
        return firstSentence + '.'
      }
    }
    
    return 'Comprehensive study guide for genetic counseling concepts.'
  }
}

/**
 * Utility function to estimate reading time
 */
export function estimateReadingTime(text: string): number {
  const wordCount = text.split(/\s+/).length
  return Math.ceil(wordCount / 200) // 200 words per minute
}

/**
 * Utility function to extract mnemonics from content
 */
export function extractMnemonics(content: string): string[] {
  const mnemonics: string[] = []
  const lines = content.split('\n')
  
  for (const line of lines) {
    // Look for common mnemonic patterns
    if (line.includes('mnemonic') || line.includes('remember') || line.includes('acronym')) {
      const cleaned = line.replace(/[*_#]/g, '').trim()
      if (cleaned.length > 10 && cleaned.length < 200) {
        mnemonics.push(cleaned)
      }
    }
  }
  
  return mnemonics
}