export const truncateDescription = (description) => {
    const index = description.indexOf('<\/p>') +5;
    // assumming <\/p> is at the right location
    // test
    // 5798103 - check bosch texts

    // description.slice(0, index)
    // description.slice(index)

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


