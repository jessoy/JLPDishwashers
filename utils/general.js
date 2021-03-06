//returns an array of an original string split into two parts at the first paragraph
export const truncateDescription = (string) => {
  // for text formatted from start with <p> tags
  if (string.indexOf("<") === 0) {
    const index = string.indexOf("</p>") + 4;
    return [string.slice(0, index), string.slice(index)];
  } else {
    // for text not begining with <p> tags
    // improve with inserting spaces after full stops where required
    const index = string.indexOf("<p>");
    return [string.slice(0, index), string.slice(index)];
  }
};

// sorts an array alphabetically by name
export const sortAttributesAlphabetically = (x, y) => {
  if (x.name < y.name) return -1;
  if (y.name < x.name) return 1;
  return 0;
};

// reduces Array to certain number
export const restrictAPIResponse = (array, number) => {
  if (array.length <= number) return array;
  let newArray = [];
  for (let i = 0; i < number; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

// replaces null text within string with replacement string
export const replaceNull = (string, replacementString) => {
  // string = string
  const index = string.toLowerCase().indexOf('"null"');
  return `${string.slice(0, index)}${replacementString}${string.slice(index + 6)}`;
};

// finds string with no space after a full stop and inserts a full stop
export const putSpaceAfterFullStop = (string) => {
  const newString = string.replace(/\.(?=[^\d])[ ]*/g, ". ");
  return(newString);
};
