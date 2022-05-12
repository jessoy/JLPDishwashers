//returns an array of a string split into two parts at the first paragraph
export const truncateDescription = (description) => {
    const index = description.indexOf('<\/p>') +5;
    return [description.slice(0, index), description.slice(index)]
  }

  export const sortAttributesAlphabetically = (x, y) => {
    if (x.name < y.name) return -1
    if (y.name < x.name) return 1
    return 0
  }

export const restrictAPIResponse = (data, number) => {
  if (data.length <= number) return data;
  let newArray = [];
    for (let i = 0; i < number; i++) {
      newArray.push(data[i]);
    }
    return newArray
};

export const replaceNull = (description, replacement) => {
  const index = description.indexOf('\"null\"');
  return `${replacement} ${description.slice(index+7)}`
}

// const description = "\"null\" results | John Lewis & Partners"

// console.log(replaceNull(description))
