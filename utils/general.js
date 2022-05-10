export const truncateDescription = (description) => {
    const index = description.indexOf('<\/p>') +5;
    // assumming <\/p> is at the right location 
    // test
    // 5798103 - check bosch texts
    return description.slice(0, index)
  }

  export const sortAttributesAlphabetically = (x, y) => {
    if (x.name < y.name) return -1
    if (y.name < x.name) return 1
    return 0
  }
