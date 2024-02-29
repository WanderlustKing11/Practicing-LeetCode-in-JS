// Write a function that takes a string and returns an object
// where each word in the string is a key, and its value is
// the number of times that word appears in the string.

const string = "I do not know how many times I have to say it to you, but you already know that I love you.";

const numOfRepeatedWords = (str) => {
  const obj = {};
  const wordArr = str.split(' ')
  .map((word) => word.replace(/[^a-zA-Z]/g, ''));
  wordArr.map((words) => {
    obj[words] = (obj[words] || 0) + 1
  });
  console.log(obj);
}

numOfRepeatedWords(string);