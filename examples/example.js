const Aripsum = require("aripsum");

const aripsum = new Aripsum("tafila");
const sentence = aripsum.generateSentence(5, 10);
const paragraph = aripsum.generateParagraph(20, 50);
const page = aripsum.generatePage(5, 10);

console.log(sentence);
console.log(paragraph);
console.log(page);