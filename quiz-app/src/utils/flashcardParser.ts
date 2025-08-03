import type { Flashcard } from '@/types/flashcard';

export class FlashcardParser {

  /**
   * Filter flashcards by selected topics
   */
  static filterByTopics(flashcards: Flashcard[], selectedTopics: number[]): Flashcard[] {
    if (selectedTopics.length === 0) {
      return flashcards;
    }
    
    return flashcards.filter(card => selectedTopics.includes(card.topicNumber));
  }

  /**
   * Filter flashcards to only show marked for review
   */
  static filterMarkedForReview(flashcards: Flashcard[]): Flashcard[] {
    return flashcards.filter(card => card.isMarkedForReview);
  }

  /**
   * Shuffle flashcards array
   */
  static shuffleFlashcards(flashcards: Flashcard[]): Flashcard[] {
    const shuffled = [...flashcards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * Get flashcards for a specific topic
   */
  static getTopicFlashcards(flashcards: Flashcard[], topicNumber: number): Flashcard[] {
    return flashcards.filter(card => card.topicNumber === topicNumber);
  }


  /**
   * Validate flashcard data
   */
  static validateFlashcard(card: any): card is Flashcard {
    return (
      typeof card.id === 'string' &&
      typeof card.question === 'string' &&
      typeof card.answer === 'string' &&
      typeof card.topicNumber === 'number' &&
      typeof card.questionNumber === 'number' &&
      card.topicNumber >= 1 && card.topicNumber <= 6
    );
  }

  /**
   * Get topic statistics
   */
  static getTopicStats(flashcards: Flashcard[]) {
    const stats: Record<number, { total: number; marked: number; confident: number }> = {};
    
    flashcards.forEach(card => {
      if (!stats[card.topicNumber]) {
        stats[card.topicNumber] = { total: 0, marked: 0, confident: 0 };
      }
      
      stats[card.topicNumber].total++;
      
      if (card.isMarkedForReview) {
        stats[card.topicNumber].marked++;
      }
      
      if (card.confidence === 'high') {
        stats[card.topicNumber].confident++;
      }
    });
    
    return stats;
  }
}