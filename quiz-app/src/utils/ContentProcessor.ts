import { marked } from 'marked'
import DOMPurify from 'dompurify'
import type { StudyTopic, StudySection, LookupTable } from '@/types/learning'

// Configure marked options for consistent rendering
marked.setOptions({
  gfm: true,
  breaks: false,
})

/**
 * Enhanced Content Processor for handling JSON-sourced content
 * Works with syndrome card detection and preserves existing UI functionality
 */
export class ContentProcessor {
  /**
   * Process JSON content into StudyTopic format
   * Handles markdown conversion while preserving syndrome card structure
   */
  static processJsonContent(jsonData: any): StudyTopic {
    const topic: StudyTopic = {
      id: jsonData.id,
      title: jsonData.title,
      description: jsonData.description || this.generateDescription(jsonData),
      sections: this.processSections(jsonData.sections || []),
      quickLookup: this.processQuickLookup(jsonData),
      objectives: jsonData.objectives || [],
      estimatedTime: jsonData.estimatedTime || 0,
      difficulty: jsonData.difficulty || 'Beginner',
      importance: jsonData.importance || 1,
      tags: jsonData.tags || [],
      sectionCount: jsonData.sectionCount || 0
    }

    return topic
  }

  /**
   * Process sections from JSON, converting markdown to HTML
   * while preserving syndrome card detection patterns
   */
  private static processSections(sections: any[]): StudySection[] {
    return sections.map((section: any) => ({
      id: section.id,
      title: section.title,
      content: this.processMarkdownContent(section.content || ''),
      importance: section.importance || 1,
      subsections: section.subsections || [],
      practiceQuestions: section.practiceQuestions || [],
      mnemonics: section.mnemonics || this.extractMnemonics(section.content || ''),
      estimatedReadTime: this.estimateReadTime(section.content || '')
    }))
  }

  /**
   * Process markdown content for syndrome card compatibility
   * Handles <details> blocks and preserves syndrome patterns
   */
  static processMarkdownContent(markdown: string): string {
    if (!markdown?.trim()) return ''

    // First, handle <details> blocks which are common in the JSON content
    const processedMarkdown = this.processDetailsBlocks(markdown)
    
    // Convert to HTML using marked
    const html = marked.parse(processedMarkdown) as string
    
    // Sanitize and return
    return DOMPurify.sanitize(html)
  }

  /**
   * Process <details> blocks from markdown
   * Converts them to syndrome-card compatible format
   */
  private static processDetailsBlocks(content: string): string {
    // Replace <details><summary>**Title**</summary> with ### Title format
    // This helps the syndrome card parser detect sections properly
    let processed = content.replace(
      /<details>\s*<summary><strong>(.*?)<\/strong>.*?<\/summary>/gi,
      '### $1'
    )

    // Clean up closing </details> tags
    processed = processed.replace(/<\/details>/gi, '')

    // Convert **Section:** patterns to proper headings for syndrome parsing
    processed = processed.replace(/\*\*(.*?):\*\*/g, '**$1**:')

    return processed
  }

  /**
   * Detect if content should render as syndrome cards
   * Enhanced version that works with JSON content structure
   */
  static shouldRenderAsCards(content: string): boolean {
    // Check for multiple syndrome/condition patterns
    const syndromePattern = /^(?!.*board pearls)([A-Za-z0-9,\s\-\.\(\)]+(?:\*|syndrome|Syndrome|deletion|monosomy|Monosomy|trisomy|Trisomy|triploidy|Triploidy).*?)$/gmi
    const syndromeMatches = Array.from(content.matchAll(syndromePattern))
    
    // Also check for patterns like "47, XXY" or "Trisomy 21"
    const chromosomalPatterns = content.match(/^(?:Trisomy\s+\d+|Monosomy\s+\w+|\d+,\s*[XY]+|[A-Z][a-z]+\s+\d+[pq])/gm) || []
    
    // Check for multiple sections with "Key features"
    const keyFeaturesCount = (content.match(/\*\*Key features/gi) || []).length
    
    const totalIndicators = syndromeMatches.length + chromosomalPatterns.length + (keyFeaturesCount > 1 ? 1 : 0)
    return totalIndicators > 1
  }

  /**
   * Extract syndrome cards from JSON content
   * Compatible with existing SectionRenderer parsing logic
   */
  static extractSyndromeCards(content: string): any[] {
    const cards: any[] = []
    
    // Use similar logic to existing parseSyndromeCards function
    const syndromePattern = /^(?!.*board pearls)([A-Za-z0-9,\s\-\.\(\)]+(?:\*|syndrome|Syndrome|deletion|monosomy|Monosomy|trisomy|Trisomy|triploidy|Triploidy).*?)$/gmi
    const syndromeMatches = Array.from(content.matchAll(syndromePattern))
    
    if (syndromeMatches.length === 0) {
      // Fallback: Split by sections and identify syndrome patterns
      const potentialSections = content.split(/\n\n+/).filter(section => {
        const trimmed = section.trim()
        const firstLine = trimmed.split('\n')[0].trim()
        
        // Skip board pearls and table of contents
        if (firstLine.toLowerCase().includes('board pearls') || 
            firstLine.toLowerCase().includes('table of contents') ||
            trimmed.length < 50) {
          return false
        }
        
        // Include sections that have syndrome-like patterns
        return (
          /^[A-Z0-9].*(syndrome|Syndrome|deletion|monosomy|Monosomy|trisomy|Trisomy|triploidy|Triploidy|\*)/i.test(firstLine) ||
          trimmed.includes('Key features') ||
          trimmed.includes('**Key features') ||
          /^[0-9]+[A-Za-z,\s\-\.]*/.test(firstLine)
        )
      })
      
      potentialSections.forEach((section, index) => {
        const lines = section.trim().split('\n')
        const title = lines[0].trim()
        const card = this.parseSingleSyndromeSection(section, index, title)
        if (card) cards.push(card)
      })
    } else {
      // Process each syndrome section
      for (let i = 0; i < syndromeMatches.length; i++) {
        const currentMatch = syndromeMatches[i]
        const nextMatch = syndromeMatches[i + 1]
        
        const startIndex = currentMatch.index!
        const endIndex = nextMatch ? nextMatch.index! : content.length
        
        const sectionContent = content.substring(startIndex, endIndex).trim()
        const title = currentMatch[1].trim()
        
        const card = this.parseSingleSyndromeSection(sectionContent, i, title)
        if (card) cards.push(card)
      }
    }
    
    return cards
  }

  /**
   * Parse a single syndrome section - compatible with existing logic
   */
  private static parseSingleSyndromeSection(sectionContent: string, index: number, title: string): any | null {
    // Extract priority from asterisks
    const stars = (title.match(/\*/g) || []).length
    let priority: 'high' | 'medium' | 'low' = 'low'
    if (stars >= 3) priority = 'high'
    else if (stars >= 2) priority = 'medium'
    else if (stars >= 1) priority = 'medium'
    
    const cleanTitle = title.replace(/\*/g, '').trim()
    
    // Extract key features
    const keyFeatures: string[] = []
    const keyFeaturesMatch = sectionContent.match(/\*\*Key features[^:]*\*\*[:\s]*([^\n]+(?:\n(?!\s*-?\s*\*\*)[^\n]*)*)/i)
    if (keyFeaturesMatch) {
      const featuresText = keyFeaturesMatch[1].trim()
      const features = featuresText.split(/,(?![^()]*\))/).map(f => f.trim()).filter(f => f.length > 0)
      keyFeatures.push(...features)
    }
    
    // Extract clinical features
    const clinicalFeatures: { [key: string]: string[] } = {}
    
    // US findings
    const usFindingsMatch = sectionContent.match(/\*\*US findings[^:]*\*\*[:\s]*([^\n]+(?:\n(?!\s*-?\s*\*\*)[^\n]*)*)/i)
    if (usFindingsMatch) {
      const features = this.extractBulletPoints(usFindingsMatch[1])
      if (features.length > 0) clinicalFeatures['US Findings'] = features
    }
    
    // Characteristic features
    const charFeaturesMatch = sectionContent.match(/\*\*Characteristic features[^:]*\*\*[:\s]*([^\n]+(?:\n(?!\s*-?\s*\*\*)[^\n]*)*)/i)
    if (charFeaturesMatch) {
      const features = this.extractBulletPoints(charFeaturesMatch[1])
      if (features.length > 0) clinicalFeatures['Characteristic Features'] = features
    }
    
    // Create card if we have meaningful content
    if (keyFeatures.length > 0 || Object.keys(clinicalFeatures).length > 0 || sectionContent.length > 100) {
      return {
        id: `syndrome-${index}`,
        title: cleanTitle,
        priority,
        stars,
        keyFeatures,
        clinicalFeatures,
        content: sectionContent
      }
    }
    
    return null
  }

  /**
   * Extract bullet points from text - compatible with existing logic
   */
  private static extractBulletPoints(text: string): string[] {
    const points: string[] = []
    
    if (text.includes('\n')) {
      const lines = text.split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .map(line => line.replace(/^[-•*]\s*/, ''))
      
      lines.forEach(line => {
        if (line.includes(',') && !line.includes('(')) {
          const items = line.split(',').map(item => item.trim()).filter(item => item.length > 0)
          points.push(...items)
        } else {
          points.push(line)
        }
      })
    } else {
      const items = text.split(/[,;](?![^()]*\))/)
        .map(item => item.trim())
        .filter(item => item.length > 0)
        .map(item => item.replace(/^[-•*]\s*/, ''))
      points.push(...items)
    }
    
    return points.filter(point => point.length > 0)
  }

  /**
   * Process quick lookup tables from JSON
   */
  private static processQuickLookup(jsonData: any): LookupTable[] {
    // Check if there's a quick lookup section in the content
    const quickLookupSection = jsonData.sections?.find((section: any) => 
      section.title?.toLowerCase().includes('quick') && 
      section.title?.toLowerCase().includes('lookup')
    )
    
    if (quickLookupSection?.content) {
      return this.extractTablesFromMarkdown(quickLookupSection.content)
    }
    
    return jsonData.quickLookup || []
  }

  /**
   * Extract tables from markdown content
   */
  private static extractTablesFromMarkdown(content: string): LookupTable[] {
    const tables: LookupTable[] = []
    const lines = content.split('\n')
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      if (line.startsWith('|') && line.endsWith('|')) {
        const headers = line.split('|').map(h => h.trim()).filter(h => h !== '')
        
        // Skip separator line
        i++
        if (i < lines.length && lines[i].includes('---')) {
          i++
        }
        
        const rows: any[] = []
        
        // Process table rows
        while (i < lines.length) {
          const rowLine = lines[i].trim()
          if (!rowLine.startsWith('|') || !rowLine.endsWith('|')) {
            break
          }
          
          const cells = rowLine.split('|').map(c => c.trim()).filter(c => c !== '')
          if (cells.length === headers.length) {
            rows.push({
              id: `row-${rows.length}`,
              cells
            })
          }
          i++
        }
        
        if (rows.length > 0) {
          tables.push({
            id: `table-${tables.length}`,
            title: 'Quick Reference Table',
            headers,
            rows
          })
        }
        
        i-- // Adjust for the outer loop increment
      }
    }
    
    return tables
  }

  /**
   * Generate description from processed content
   */
  private static generateDescription(jsonData: any): string {
    if (jsonData.objectives?.length > 0) {
      return `Learn about ${jsonData.objectives[0].toLowerCase()}`
    }
    
    if (jsonData.sections?.length > 0) {
      const firstSection = jsonData.sections[0]
      const plainText = (firstSection.content || '').replace(/<[^>]*>/g, '').trim()
      const firstSentence = plainText.split('.')[0]
      if (firstSentence.length > 20 && firstSentence.length < 200) {
        return firstSentence + '.'
      }
    }
    
    return 'Comprehensive study guide for genetic counseling concepts.'
  }

  /**
   * Extract mnemonics from content
   */
  private static extractMnemonics(content: string): string[] {
    const mnemonics: string[] = []
    const lines = content.split('\n')
    
    for (const line of lines) {
      if (line.toLowerCase().includes('mnemonic') || 
          line.toLowerCase().includes('remember') || 
          line.toLowerCase().includes('acronym')) {
        const cleaned = line.replace(/[*_#]/g, '').trim()
        if (cleaned.length > 10 && cleaned.length < 200) {
          mnemonics.push(cleaned)
        }
      }
    }
    
    return mnemonics
  }

  /**
   * Estimate reading time for content
   */
  private static estimateReadTime(content: string): number {
    if (!content) return 1
    const wordCount = content.split(/\s+/).length
    return Math.max(1, Math.ceil(wordCount / 200))
  }

  /**
   * Convert basic markdown to HTML (for syndrome cards)
   * Compatible with existing convertMarkdownToHTML function
   */
  static convertMarkdownToHTML(text: string): string {
    if (!text) return ''
    
    return text
      // Convert **bold** to <strong>bold</strong>
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Convert *italic* to <em>italic</em> (but not when part of bold)
      .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>')
      // Convert _text_ to <u>text</u> (for underline)
      .replace(/(?<!_)_([^_]+)_(?!_)/g, '<u>$1</u>')
      // Convert numbered lists
      .replace(/^\s*(\d+)\.\s+(.+)$/gm, '<li>$2</li>')
      // Convert bullet points
      .replace(/^\s*[-•]\s+(.+)$/gm, '<li>$1</li>')
      // Convert paragraph breaks
      .replace(/\n\n+/g, '</p><p>')
      // Convert single line breaks
      .replace(/\n/g, '<br>')
      // Wrap in paragraph tags
      .replace(/^(?!<[^>]+>)(.+)/, '<p>$1')
      // Close final paragraph
      .replace(/([^>])$/, '$1</p>')
  }
}