# UI Dev Technical Test - Dishwasher App - Jessica Clements

## Brief

This project is a next.js web application to show customers the range of dishwashers sold at John Lewis. 

I have never used next.js before and this is my first project implementing it.

## Technologies Used
- JavaScript ES2015
- SCSS
- React
- Next.js

## Features 

Structure / Code
- Consumes exsting APIs
- Dynamically created product pages
- Custom components e.g. back-arrow, read-more arrow 
- Bespoke text formatting and sorting functions
Styling
- Mixins, custom property declarations and nested SCSS styling syntax
- Fully responsive design 
Testing
- Unit tests described below
Accessibility and SEO
- Correctly named HTML tags and elements
- Dynamically written alt descriptions in image tags
- Incluion of data in Head
Security 
- 
Performance

## Tests

The following tests have been written :
- test for duplicates in mock data

In addition the following principles have been followed:
- use of insomnia to consume data and test API
- use of Git (branching) to divide work into sections and test individually as went along
- found inconsistencies of mock data and api data - e.g. id's in product attributes

## SetUp Instructions

- Clone repo from GitHub
- Install the NPM dependencies using `npm i` on the terminal
- Call `npm run dev`
- Open [http://localhost:3001](http://localhost:3001) with your browser.


## Things we're looking for

- Unit tests are important. We’d like to see a TDD approach to writing the app. We've included a Jest setup.
- The website should be fully responsive, working across device sizes. We've provided you with some ipad-sized images as a guide.
- The use of third party code/SDKs is allowed, but you should be able to explain why you have chosen the third party code.
- Put all your assumptions, notes, instructions and improvement suggestions into your GitHub README.md.
~~- We’re looking for a solution that's as close to the designs as possible.~~
- We'll be assessing your coding style, how you've approached this task and whether you've met quality standards on areas such as accessibility, security and performance.
- We don't expect you to spend too long on this, as a guide 3 hours is usually enough.


## Notes and assumptions

- To maintain original code style where relevant 
- much detail on product information -


- I was unclear on the meaning of the Netherworld Syntax in `app.js`


## Improvement suggestions

- Bespoke Headers and styling Home and product pages respectively - showing streamlined information
- single source of price information
- Improved quality of png images in API with improved resolution, and invisible background
- Look into Tab index for accessibility 
- Spelling errors in API data e.g 5817337
- Split `[id]`.jsx file into more components - for easier navigation and simplicity
- Reduce number of specifications rendered to the page - have a primary (important) selection and include the ability to show more


## Third Party Code Used

- Axios - Used because of familiarity, time limitations and ability to combine `get` with json formatting
- React-responsive Carousel - in product page

## Features 
- SEO considered in the head
- read more section written first hand as opposed to a third party resource - uses state to show / hide more text
- manipulating api data to show first paragraph only in description - break at paragraph (not number of characters)

## Problems
- configuring jest and babel. I found that if there is a babel.config file present the tests ran successfully, however, when that file exists the next.js app ceases to complie.