const Aripsum = require('../index');

describe('Aripsum', () => {
  describe('generateSentence', () => {
    it('should generate a sentence with default range', () => {
      const aripsum = new Aripsum();
      const sentence = aripsum.generateSentence();
      expect(sentence).toBeDefined();
    });

    it('should generate a sentence within the specified range', () => {
      const aripsum = new Aripsum();
      const sentence = aripsum.generateSentence({ min: 3, max: 5 });
      const wordCount = sentence.split(' ').length;
      expect(wordCount).toBeGreaterThanOrEqual(3);
      expect(wordCount).toBeLessThanOrEqual(5);
    });
  });

  describe('generateParagraph', () => {
    it('should generate a paragraph with default range', () => {
      const aripsum = new Aripsum();
      const paragraph = aripsum.generateParagraph();
      expect(paragraph).toBeDefined();
    });

    it('should generate a paragraph within the specified range', () => {
      const aripsum = new Aripsum();
      const paragraph = aripsum.generateParagraph({ min: 2, max: 4 });
      expect(paragraph).toMatch(/[.!،؟]$/);
    });
  });

  describe('generatePage', () => {
    it('should generate a page with default range', () => {
      const aripsum = new Aripsum();
      const page = aripsum.generatePage();
      expect(page).toBeDefined();
    });

    it('should generate a page within the specified range', () => {
      const aripsum = new Aripsum();
      const page = aripsum.generatePage({ min: 1, max: 2 });
      const paragraphCount = page.split('\n\n').length;
      expect(paragraphCount).toBeGreaterThanOrEqual(1);
      expect(paragraphCount).toBeLessThanOrEqual(2);
    });
  });
});
