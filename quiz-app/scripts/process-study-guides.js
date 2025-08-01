import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Paths
const studyGuidesDir = join(__dirname, '../../')
const outputDir = join(__dirname, '../src/data/study-guides')

// Topic mapping
const topicFiles = [
  {
    id: 'topic1',
    file: 'topic1-chromosomal-disorders.md',
    title: 'Chromosomal Disorders',
    difficulty: 'Beginner',
    tags: ['chromosomes', 'trisomy', 'deletion', 'duplication']
  },
  {
    id: 'topic2', 
    file: 'topic2-cancer-genetics.md',
    title: 'Cancer Genetics',
    difficulty: 'Intermediate',
    tags: ['cancer', 'hereditary', 'BRCA', 'lynch', 'tumor-suppressor']
  },
  {
    id: 'topic3',
    file: 'topic3-organ-systems-a.md', 
    title: 'Organ Systems - Cardiovascular & Respiratory',
    difficulty: 'Intermediate',
    tags: ['cardiovascular', 'respiratory', 'cardiac', 'pulmonary']
  },
  {
    id: 'topic4',
    file: 'topic4-neurological-developmental.md',
    title: 'Neurological & Developmental Disorders', 
    difficulty: 'Advanced',
    tags: ['neurological', 'developmental', 'intellectual-disability', 'autism']
  },
  {
    id: 'topic5',
    file: 'topic5-metabolic-disorders.md',
    title: 'Metabolic Disorders',
    difficulty: 'Advanced', 
    tags: ['metabolic', 'inborn-errors', 'enzyme', 'metabolism']
  },
  {
    id: 'topic6',
    file: 'topic6-specialized-systems.md',
    title: 'Specialized Systems',
    difficulty: 'Advanced',
    tags: ['specialized', 'rare', 'complex']
  },
  {
    id: 'syndrome-overview',
    file: '100-syndrome-overview.md',
    title: 'Syndrome Overview',
    difficulty: 'Beginner', 
    tags: ['overview', 'reference', 'syndromes']
  }
]

/**
 * Simple markdown parser for basic structure extraction
 */
function parseMarkdown(content) {
  const lines = content.split('\n')
  const result = {
    title: '',
    sections: [],
    objectives: [],
    estimatedTime: 0,
    importance: 1
  }

  let currentSection = null
  let currentContent = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    // Extract title (first h1)
    if (trimmed.startsWith('# ') && !result.title) {
      result.title = trimmed.replace('# ', '').trim()
      continue
    }

    // Handle section headers (h2)
    if (trimmed.startsWith('## ')) {
      // Save previous section
      if (currentSection) {
        currentSection.content = currentContent.join('\n').trim()
        if (currentSection.content) {
          result.sections.push(currentSection)
        }
      }

      // Start new section
      const sectionTitle = trimmed.replace('## ', '').trim()
      currentSection = {
        id: generateId(sectionTitle),
        title: cleanTitle(sectionTitle),
        content: '',
        importance: extractImportance(sectionTitle)
      }
      currentContent = []
      continue
    }

    // Collect content
    currentContent.push(line)
  }

  // Save final section
  if (currentSection) {
    currentSection.content = currentContent.join('\n').trim()
    if (currentSection.content) {
      result.sections.push(currentSection)
    }
  }

  // Calculate estimated reading time (200 words per minute)
  const wordCount = content.split(/\s+/).length
  result.estimatedTime = Math.ceil(wordCount / 200)

  return result
}

function extractImportance(title) {
  const starMatches = title.match(/⭐/g)
  return starMatches ? starMatches.length : 1
}

function cleanTitle(title) {
  return title
    .replace(/⭐+/g, '')
    .replace(/[🎯📊🧬🎀🎗️🧠🫀🔍📖📋📝🏁]/g, '')
    .trim()
}

function generateId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Process all study guide files
 */
function processStudyGuides() {
  console.log('Processing study guides...')

  // Create output directory
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }

  const processedTopics = []

  for (const topic of topicFiles) {
    const filePath = join(studyGuidesDir, topic.file)
    
    if (!existsSync(filePath)) {
      console.warn(`Warning: File not found: ${topic.file}`)
      continue
    }

    console.log(`Processing ${topic.file}...`)
    
    try {
      const content = readFileSync(filePath, 'utf-8')
      const parsed = parseMarkdown(content)
      
      const processedTopic = {
        id: topic.id,
        title: parsed.title || topic.title,
        description: generateDescription(parsed),
        difficulty: topic.difficulty,
        tags: topic.tags,
        estimatedTime: parsed.estimatedTime,
        importance: parsed.importance,
        sections: parsed.sections.slice(0, 10), // Limit sections for now
        objectives: parsed.objectives,
        sectionCount: parsed.sections.length,
        rawContent: content // Keep raw content for future processing
      }

      processedTopics.push(processedTopic)

      // Write individual topic file
      const topicOutputPath = join(outputDir, `${topic.id}.json`)
      writeFileSync(topicOutputPath, JSON.stringify(processedTopic, null, 2))
      
      console.log(`✓ Processed ${topic.file} -> ${topic.id}.json`)
    } catch (error) {
      console.error(`Error processing ${topic.file}:`, error.message)
    }
  }

  // Write index file
  const indexData = {
    topics: processedTopics.map(t => ({
      id: t.id,
      title: t.title,
      description: t.description,
      difficulty: t.difficulty,
      tags: t.tags,
      estimatedTime: t.estimatedTime,
      importance: t.importance,
      sectionCount: t.sectionCount
    })),
    totalTopics: processedTopics.length,
    totalEstimatedTime: processedTopics.reduce((sum, t) => sum + t.estimatedTime, 0),
    lastUpdated: new Date().toISOString()
  }

  const indexPath = join(outputDir, 'index.json')
  writeFileSync(indexPath, JSON.stringify(indexData, null, 2))

  console.log(`✓ Created index.json with ${processedTopics.length} topics`)
  console.log(`✓ Total estimated reading time: ${indexData.totalEstimatedTime} minutes`)
  console.log('Study guides processing complete!')
}

function generateDescription(parsed) {
  if (parsed.sections.length > 0) {
    const firstSection = parsed.sections[0]
    // Extract first sentence from content
    const plainText = firstSection.content.replace(/[#*_`]/g, '').trim()
    const firstSentence = plainText.split('.')[0]
    if (firstSentence.length > 20 && firstSentence.length < 200) {
      return firstSentence + '.'
    }
  }
  return 'Comprehensive study guide for genetic counseling concepts.'
}

// Run the processing
processStudyGuides()