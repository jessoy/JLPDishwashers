# UI Dev Technical Test - Dishwasher App - Jessica Clements

## Introduction

This is my first project implementing next.js as it is a framework I was unfamiliar with. This project is a next.js simple web application to show customers the range of dishwashers sold at John Lewis. It is fully responsive to be viewed on a device at any size.

## Table of Contents
* [Technologies Used](#technologies-used)
* [Notes, Assumptions and Challenges](#notes-assumptions-and-challenges)
* [Features](#features)
* [Tests](#tests)
* [Improvement Suggestions](#improvement-suggestions)
* [SetUp Instructions](#setup-instructions) 
* [Third Party Code](#third-party-code)
* [Contact](#contact)

## Technologies Used
- JavaScript ES2015
- SCSS
- React
- Next.js

## Notes Assumptions and Challenges
- I maintained the original code style where relevant
- I have assumed the styling as in the sample images across all device sizes, with a little inspiration taken from the current John Lewis site where required

- I used both third party code (see [Third Party Code](#third-party-code)) and created my own code throughout. In the read more section functionality has been added which comes in on screens larger than 678px and utilises state to reveal more information on the product

- I was unclear on the meaning of the Netherworld Syntax in `app.js` template file and moved the Layout component a level down to be able to render the pages differently in the future.

- My biggest challenge was configuring jest and babel. I found that if there is a babel.config file present the tests on the imported functions ran successfully. However, when that file exists the next.js app ceases to compile. I chose to omit the  babel.config file in this submitted version and so the tests on the imported functions in `general.test.js` will not run.

## Features

#### Structure / Code
- Consumption of exsting APIs
- Manipulation of API data to create breakpoint and render first paragraph only of product description
- Dynamically created product pages in next.js
- Custom components e.g. arrow
- Bespoke text formatting and sorting functions in `utils/general.js`
- RegEx used to find errors in text (i.e. omitted spaces after full-stops)
- Use of state in `More Info` section

#### Styling

- Mixins, custom property declarations and nested SCSS styling syntax
- Fully responsive design
- Conditional styling. e.g. on product code in description to show the product code above or below the description dependant on screen width

#### Testing

- Unit tests described below see [Tests](#tests)
- Use of insomnia to consume data and test API
- Use of Git (branching) to divide work into sections and test elements individually and sequentially


#### Accessibility and SEO

- Correctly named HTML tags
- Dynamically written alt descriptions in image tags
- Inclusion of meta data in `Head` of homepage and product pages, including titles and favicon

#### Security

- Use of Dev Tools to check data available in the front end (taking a hacker's perspective)

#### Performance
- Destructuring data at the point of consumption of API to only the required objects
- Implemented try-catch blocks in the `getServerSideProps` code to prevent the app from crashing and to continue to compile to show the 404 page

## Tests
The following tests have been written :
- In `api.test.js`
  - Test for duplicate productId's in mock data
  - Test for duplicates on all unique variables in mock data
- In `productDetails.test.js`
  - Test for product availability in mock data
  - Test for full stop errors in product descriptions in mock data
- In `general.test.js`
  - Test on functions written in utils file:
    - test `truncate description` split string correctly
    - test `replace null` replaces 'null' correctly in a string


## Improvement suggestions
- To implement a bespoke navbar to the home and product pages respectively - this would be achieved thorugh the use of a ternary in layout file and could streamline the header within the product page or reveal more information.
- To implement search criteria and sorting / filtering on the homepage.
- To reduce the number of specifications rendered to the product page - I would have a primary selection and include the ability to show more.
- To improve the quality of the png images in the API data with improved resolution and an invisible background.
- To include arrows on the Image Carousel on desktop screens
- To check the API data for spelling errors e.g 5817337 'adjustabe'
- I would look into and implement bespoke tab indexes for improved accessibility.
- I would further split the `[id].jsx` file into more components - for easier navigation and simplicity.
- I would create bespoke errors messages for different codes that render information from the returned error object to the screen.
- I would fix the error causing the tests in `general.test.js` to not run
- I would fix the error that causes the product description to dissapear when the page is refreshed


## SetUp Instructions
- Clone repo from GitHub
- Install the NPM dependencies using `npm i` on the terminal
- Call `npm run dev`
- Open [http://localhost:3001](http://localhost:3001) with your browser.



## Third Party Code
- Axios - This was used because of my own familiarity with it, time limitations and the ability to combine `get` with json formatting
- React-responsive-carousel - This was used in the product page to display the product images

## Contact
Created by [@jessoy](https://github.com/jessoy) - feel free to contact me on [linkedIn!](https://www.linkedin.com/in/jessica-clements-5b474259/)