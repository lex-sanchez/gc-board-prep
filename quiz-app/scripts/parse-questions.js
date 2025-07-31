import fs from 'fs';
import path from 'path';

// Read the practice questions markdown file
const practiceQuestionsPath = path.join(process.cwd(), '..', 'practice-questions.md');
const content = fs.readFileSync(practiceQuestionsPath, 'utf8');

// Helper function to extract content between details tags
function extractAnswerContent(detailsBlock) {
  const summaryMatch = detailsBlock.match(/<summary[^>]*>([^<]+)<\/summary>/);
  const contentMatch = detailsBlock.match(/<\/summary>\s*([\s\S]*?)\s*<\/details>/);
  
  if (contentMatch && contentMatch[1]) {
    // Clean up the content
    let answer = contentMatch[1].trim();
    
    // Extract answer letter if present
    const answerMatch = answer.match(/\*\*Answer:\s*([A-D])\)/);
    if (answerMatch) {
      const answerLetter = answerMatch[1];
      // Get explanation after the answer
      const explanation = answer.replace(/\*\*Answer:\s*[A-D]\)\s*[^*]*\*\*\s*/, '').trim();
      return { answer: answerLetter, explanation };
    }
  }
  
  return null;
}

// Function to parse a question block
function parseQuestion(questionBlock, category, topic, questionNumber) {
  const lines = questionBlock.split('\n').filter(line => line.trim());
  
  // Extract question text (everything before the first option)
  let questionText = '';
  let options = {};
  let currentSection = 'question';
  let detailsContent = '';
  let inDetails = false;
  
  for (const line of lines) {
    if (line.startsWith('### Question')) {
      continue; // Skip the question header
    }
    
    if (line.match(/^\*\*[A-D]\)\*\*/)) {
      currentSection = 'options';
      const optionMatch = line.match(/^\*\*([A-D])\)\*\*\s*(.+)/);
      if (optionMatch) {
        options[optionMatch[1]] = optionMatch[1] + ') ' + optionMatch[2];
      }
    } else if (line.startsWith('<details>')) {
      inDetails = true;
      detailsContent = line;
    } else if (inDetails) {
      detailsContent += '\n' + line;
      if (line.includes('</details>')) {
        break;
      }
    } else if (currentSection === 'question') {
      if (questionText && !line.startsWith('**')) {
        questionText += ' ' + line.trim();
      } else if (!questionText) {
        questionText = line.trim();
      }
    }
  }
  
  // Parse the answer from details block
  const answerData = extractAnswerContent(detailsContent);
  
  if (!answerData) {
    console.warn(`Could not parse answer for question ${questionNumber}`);
    return null;
  }
  
  // Clean up options to remove the letter prefix
  const cleanOptions = {};
  Object.entries(options).forEach(([key, value]) => {
    cleanOptions[key] = value.replace(/^[A-D]\)\s*/, '');
  });
  
  return {
    id: `q${questionNumber.replace('.', '_')}`,
    category,
    topic,
    questionNumber,
    question: questionText,
    options: cleanOptions,
    correctAnswer: answerData.answer,
    explanation: answerData.explanation,
    tags: []
  };
}

// Main parsing logic
function parseQuestions() {
  const questions = [];
  
  // Split content into sections
  const sections = content.split(/^## /m).filter(section => section.trim());
  
  for (const section of sections) {
    // Skip non-question sections
    if (!section.includes('### Question')) {
      continue;
    }
    
    // Determine category and topic
    let category = 'core';
    let topic = '';
    
    if (section.startsWith('Topic 1:')) {
      topic = 'Chromosomal Disorders';
    } else if (section.startsWith('Topic 2:')) {
      topic = 'Cancer Genetics';
    } else if (section.startsWith('Topic 3:')) {
      topic = 'Organ Systems A';
    } else if (section.startsWith('Topic 4:')) {
      topic = 'Neurological & Developmental';
    } else if (section.startsWith('Topic 5:')) {
      topic = 'Metabolic Disorders';
    } else if (section.startsWith('Topic 6:')) {
      topic = 'Specialized Systems';
    } else if (section.startsWith('Pharmacogenomics')) {
      category = 'advanced';
      topic = 'Pharmacogenomics';
    } else if (section.startsWith('Population Genetics')) {
      category = 'advanced';
      topic = 'Population Genetics';
    } else if (section.startsWith('Ethical Scenarios')) {
      category = 'advanced';
      topic = 'Ethical Scenarios';
    } else if (section.startsWith('Prenatal Genetics')) {
      category = 'advanced';
      topic = 'Prenatal Genetics';
    } else if (section.startsWith('Variant Interpretation')) {
      category = 'advanced';
      topic = 'Variant Interpretation';
    } else if (section.startsWith('Psychosocial Counseling')) {
      category = 'advanced';
      topic = 'Psychosocial Counseling';
    } else if (section.startsWith('Professional Practice')) {
      category = 'advanced';
      topic = 'Professional Practice';
    } else if (section.startsWith('Reproductive Technologies')) {
      category = 'advanced';
      topic = 'Reproductive Technologies';
    } else if (section.startsWith('Risk Communication')) {
      category = 'advanced';
      topic = 'Risk Communication';
    } else if (section.startsWith('Emerging Technologies')) {
      category = 'advanced';
      topic = 'Emerging Technologies';
    }
    
    // Split into individual questions
    const questionBlocks = section.split(/### Question \d+\.\d+/).filter(block => block.trim());
    
    // Get question numbers from the section
    const questionMatches = section.match(/### Question (\d+\.\d+)/g);
    
    if (questionMatches) {
      questionMatches.forEach((match, index) => {
        const questionNumber = match.replace('### Question ', '');
        const questionBlock = questionBlocks[index + 1]; // Skip the first block which is the section header
        
        if (questionBlock) {
          const fullBlock = `### Question ${questionNumber}${questionBlock}`;
          const parsedQuestion = parseQuestion(fullBlock, category, topic, questionNumber);
          
          if (parsedQuestion) {
            questions.push(parsedQuestion);
          }
        }
      });
    }
  }
  
  return questions;
}

// Parse and save questions
try {
  const questions = parseQuestions();
  
  // Create output directory
  const outputDir = path.join(process.cwd(), 'src', 'data');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Save questions to JSON file
  fs.writeFileSync(
    path.join(outputDir, 'questions.json'),
    JSON.stringify(questions, null, 2)
  );
  
  // Create topic and domain metadata
  const topics = {};
  const domains = {};
  
  questions.forEach(q => {
    if (q.category === 'core') {
      if (!topics[q.topic]) {
        topics[q.topic] = { count: 0, questions: [] };
      }
      topics[q.topic].count++;
      topics[q.topic].questions.push(q.id);
    } else {
      if (!domains[q.topic]) {
        domains[q.topic] = { count: 0, questions: [] };
      }
      domains[q.topic].count++;
      domains[q.topic].questions.push(q.id);
    }
  });
  
  fs.writeFileSync(
    path.join(outputDir, 'metadata.json'),
    JSON.stringify({
      totalQuestions: questions.length,
      coreQuestions: questions.filter(q => q.category === 'core').length,
      advancedQuestions: questions.filter(q => q.category === 'advanced').length,
      topics,
      domains
    }, null, 2)
  );
  
  console.log(`Successfully parsed ${questions.length} questions`);
  console.log(`Core questions: ${questions.filter(q => q.category === 'core').length}`);
  console.log(`Advanced questions: ${questions.filter(q => q.category === 'advanced').length}`);
  
} catch (error) {
  console.error('Error parsing questions:', error);
}