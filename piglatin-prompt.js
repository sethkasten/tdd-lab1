const promptly = require("promptly");
const { translator } = require("./lab");

async () => {
  const wordOrPhrase = await promptly.prompt("Type a word or phrase: ");
  console.log(translator(wordOrPhrase));
};
