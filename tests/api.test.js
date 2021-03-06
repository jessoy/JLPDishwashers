const fs = require("fs");
let fileText = fs.readFileSync("mockData/data.json");
let jsonParsed = JSON.parse(fileText);

let data = jsonParsed.products;

// tests for duplicates in API on a given key
const testForDuplicateKey = (variable) => {
  if (
    variable === "brand" ||
    variable === "averageRating" ||
    variable === "reviews" ||
    variable === "directorate"
  )
    return;
  for (let i = 0; i < data.length; i++) {
    const value1 = data[i][variable];
    if (
      value1 === true ||
      value1 === false ||
      value1 === "" ||
      value1 === 0 ||
      value1 === "product"
    )
      return;

    for (let j = i + 1; j < data.length; j++) {
      const value2 = data[j][variable];
      if (value1 === value2) {
        console.log("duplicate detected", variable, i, j);
        return false;
      }
    }
  }
  return true;
};

test("test for duplicated products", () => {
  expect(testForDuplicateKey("productId")).toBe(true);

// test for all variables from products
  // gets list of variables from products
  const arrayOfKeysToTest = Object.keys(data[0]);

  // tests for duplicates on all variables
  for (let x = 0; x < arrayOfKeysToTest.length; x++) {
    expect(testForDuplicateKey(arrayOfKeysToTest[x])).toBe(true);
  }
});
