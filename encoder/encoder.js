module.exports = function encoder(str) {
  let encodedStr = "";
  let currentChar = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
    } else {
      encodedStr += currentChar + count;
      currentChar = str[i];
      count = 1;
    }
  }

  encodedStr += currentChar + count;

  return encodedStr;
};
