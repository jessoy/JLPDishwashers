const { Console } = require("console");
const fs = require("fs");
let fileText = fs.readFileSync("../mockData/data2.json");
let data = JSON.parse(fileText);

// let data = jsonParsed.products
// console.log(data)

let success = true;

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
      success = false;
    } else {
    }
  }
};

testForAvailability();

// test for typos in product description

// console.log(detailsData[0].details.productInformation)
// console.log(detailsData[0].details.termsAndConditions)
// console.log(detailsData[0].details.returnsHeadline)
// console.log(detailsData[0].productId)

success = true;
const testForFullStopErrorsInText = () => {
  for (let i = 0; i < detailsData.length; i++) {
    const productInformation = detailsData[i].details.productInformation;

    checkCharAfterFullStop(productInformation);

    if (!success) {
      // success = false
      console.log(detailsData[i].productId, "productInformation malformed");
      return;
    }
  }
};

const checkCharAfterFullStop = (productInformation) => {
  const index = productInformation.indexOf(".") + 1;
  if (index === 0) {
    return;
  } else if (productInformation[index] === "<") {
    // console.log(productInformation[index])
    productInformation = productInformation.slice(index);
    checkCharAfterFullStop(productInformation);
  } else if (productInformation[index] != " ") {
    // console.log(index, productInformation[index]);
    // productInformation = productInformation.slice(index)
    // checkCharAfterFullStop(productInformation)
    success = false;
    return;
  } else {
    // console.log(productInformation[index])
    productInformation = productInformation.slice(index);
    checkCharAfterFullStop(productInformation);
  }
};

// checkCharAfterFullStop(productInformation)

testForFullStopErrorsInText();

if (success === true) {
  console.log("All tests successful");
}
