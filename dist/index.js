"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("./data"));
var WordType;
(function (WordType) {
    WordType["Regular"] = "regular";
    WordType["Tafila"] = "tafila";
})(WordType || (WordType = {}));
class Aripsum {
    constructor(wordType) {
        this.activeWords =
            wordType === WordType.Regular ? data_1.default.regularData : data_1.default.tafilaData;
    }
    /**
     * Generates a random number within the specified range.
     *
     * @param {RandomRange} range - The range for generating the random number.
     * @returns {number} The generated random number.
     * @example
     * getRandomNumber(2, 10) // returns a number between 2 and 10
     * getRandomNumber(2) // returns 2
     * getRandomNumber(null, 10) // returns 10
     * getRandomNumber() // returns a number between 2 and 10
     */
    getRandomNumber({ min = 2, max = 10 }) {
        let result;
        if (min && max)
            result = Math.floor(Math.random() * (max - min) + min);
        else if (min)
            result = min;
        else if (max)
            result = max;
        else
            result = this.getRandomNumber({ min: 2, max: 10 });
        return result;
    }
    /**
     * Retrieves a random element from an array.
     *
     * @param {T[]} array - The array from which to retrieve a random element.
     * @returns {T} A randomly selected element from the input array.
     * @example
     * const randomWord = getRandomElement(['apple', 'banana', 'orange']);
     * // Returns a random word from the array.
     */
    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    /**
     * Adds random commas to an array of words.
     *
     * @param {string[]} words - The array of words to add commas to.
     * @param {number} totalWords - The total number of words in the array.
     * @returns {string[]} The array of words with randomly added commas.
     */
    addRandomCommas(words, totalWords) {
        const wordsWithCommas = [...words];
        let index = this.getRandomNumber({ min: 3, max: 8 });
        while (index < totalWords - 2) {
            wordsWithCommas[index] += "،";
            index += this.getRandomNumber({ min: 3, max: 8 });
        }
        return wordsWithCommas;
    }
    /**
     * Adds random punctuation to the end of a sentence.
     *
     * @param {string} sentence - The sentence to which to add punctuation.
     * @returns {string} The sentence with added random punctuation.
     */
    addRandomPunctuation(sentence) {
        const punctuation = ".!؟";
        return (sentence +
            punctuation.charAt(this.getRandomNumber({ max: punctuation.length - 1 })));
    }
    /**
     * Generates an array of random words.
     *
     * @param {RandomRange} range - The range for generating the number of words.
     * @returns {string[]} An array of randomly generated words.
     */
    generateWords({ min, max } = {}) {
        const count = this.getRandomNumber({ min: min || 2, max: max || 10 });
        const result = [];
        while (result.length < count) {
            const randomWord = this.getRandomElement(this.activeWords);
            if (result.length === 0 || result[result.length - 1] !== randomWord) {
                result.push(randomWord);
            }
        }
        return result;
    }
    /**
     * Generates a random sentence with an optional word count range.
     *
     * @param {RandomRange} range - The range for generating the number of words in the sentence.
     * @returns {string} A randomly generated sentence.
     */
    generateSentence({ min = 5, max = 10 } = {}) {
        const wordsArr = this.generateWords({ min, max });
        const wordsWithCommas = this.addRandomCommas(wordsArr, wordsArr.length);
        const sentenceWithPunctuation = this.addRandomPunctuation(wordsWithCommas.join(" "));
        return sentenceWithPunctuation;
    }
    /**
     * Generates a random paragraph with an optional sentence count range.
     *
     * @param {RandomRange} range - The range for generating the number of sentences in the paragraph.
     * @returns {string} A randomly generated paragraph.
     */
    generateParagraph({ min = 20, max = 50 } = {}) {
        const result = [];
        const count = this.getRandomNumber({ min, max });
        while (result.join(" ").split(" ").length < count) {
            result.push(this.generateSentence());
        }
        return result.join(" ");
    }
    /**
     * Generates a random page with an optional paragraph count range.
     *
     * @param {RandomRange} range - The range for generating the number of paragraphs in the page.
     * @returns {string} A randomly generated page.
     */
    generatePage({ min = 5, max = 10 } = {}) {
        const result = [];
        const count = this.getRandomNumber({ min, max });
        while (result.join("\n\n").split("\n\n").length < count) {
            result.push(this.generateParagraph());
        }
        return result.join("\n\n");
    }
}
module.exports = Aripsum;
