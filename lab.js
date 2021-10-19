const translator = (string) => {
  let newString = string.toLowerCase();
  if (
    newString.includes(`0`) ||
    newString.includes(`1`) ||
    newString.includes(`2`) ||
    newString.includes(`3`) ||
    newString.includes(`4`) ||
    newString.includes(`5`) ||
    newString.includes(`6`) ||
    newString.includes(`7`) ||
    newString.includes(`8`) ||
    newString.includes(`9`) ||
    newString.includes(`@`) ||
    newString.includes(`#`) ||
    newString.includes(`$`) ||
    newString.includes(`%`) ||
    newString.includes(`^`) ||
    newString.includes(`&`) ||
    newString.includes(`*`) ||
    newString.includes(`(`) ||
    newString.includes(`)`) ||
    newString.includes(`[`) ||
    newString.includes(`]`) ||
    newString.includes(`{`) ||
    newString.includes(`}`) ||
    newString.includes(`<`) ||
    newString.includes(`>`) ||
    newString.includes(`/`) ||
    newString.includes(`=`) ||
    newString.includes(`+`)
  ) {
    return newString;
  } else if (
    newString.charAt(0) == "a" ||
    newString.charAt(0) == "e" ||
    newString.charAt(0) == "i" ||
    newString.charAt(0) == "o" ||
    newString.charAt(0) == "u"
  ) {
    newString += "way";
  } else {
    let vowelIndex = 1;
    for (let i = 1; i < newString.length; i++) {
      if (
        newString.charAt(i) == "a" ||
        newString.charAt(i) == "e" ||
        newString.charAt(i) == "i" ||
        newString.charAt(i) == "o" ||
        newString.charAt(i) == "u"
      ) {
        vowelIndex = i;
        i = newString.length;
      }
    }
    let beginningSlice = newString.slice(0, vowelIndex);
    newString = newString.substr(vowelIndex) + beginningSlice + "ay";
  }
  return newString;
};

const translatorSplit = (string) => {
  let splitString = string.split(" ");
  let returnArray = [];
  splitString.forEach((word) => {
    returnArray.push(translator(word));
  });
  return returnArray.join(" ");
};

module.exports = { translator, translatorSplit };
