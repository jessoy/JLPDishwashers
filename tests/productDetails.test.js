const fs = require("fs");

let fileText = fs.readFileSync("mockData/data2.json");
let data = JSON.parse(fileText);

const { detailsData } = data;

// test for availability
const testForAvailability = () => {
  for (let i = 0; i < detailsData.length; i++) {
    const { availabilityStatus } = detailsData[i].skus[0].availability;
    if (availabilityStatus !== "INSTOCK") {
      console.log(
        detailsData[i].productId,
        "availability status",
        availabilityStatus
      );
      return false;
    } else {
      return true;
    }
  }
};

test("test all mock data dishwashers are available", () => {
  expect(testForAvailability()).toBe(true);
})



// test for typos in product description
const testForFullStopErrorsInText = () => {
  for (let i = 0; i < detailsData.length; i++) {
    const productInformation = detailsData[i].details.productInformation;

    if(!checkCharAfterFullStop(productInformation)) {
      console.log(detailsData[i].productId, "productInformation malformed");
      return false;
    } else {
      return true
    }
  }
};

const checkCharAfterFullStop = (productInformation) => {
  const index = productInformation.indexOf(".") + 1;
  if (index === 0) {
    return;
  } else if (productInformation[index] === "<") {
    productInformation = productInformation.slice(index);
    checkCharAfterFullStop(productInformation);
  } else if (productInformation[index] != " ") {
    return false;
  } else {
    productInformation = productInformation.slice(index);
    checkCharAfterFullStop(productInformation);
  }
};

test("test for spaces after full stops in descriptions", () => {
  expect(testForFullStopErrorsInText()).toBe(true);
})

