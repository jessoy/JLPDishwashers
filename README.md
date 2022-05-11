# UI Dev Technical Test - Dishwasher App

## Brief

Your task is to create a website that will allow customers to see the range of dishwashers John Lewis sells. This app will be a simple to use and will make use of existing John Lewis APIs.

We have started the project, but we'd like you to finish it off to a production-ready standard. Bits of it may be broken.

### Product Grid

When the website is launched, the customer will be presented with a grid of dishwashers that are currently available for customers to buy.

For this exercise we’d be looking at only displaying the first 20 results returned by the API.

### Product Page

When a dishwasher is clicked, a new screen is displayed showing the dishwasher’s details.

### Designs

In the `/designs` folder you will find 3 images that show the desired screen layout for the app

- product-page-portrait.png
- product-page-landscape.png
- product-grid.png

### Mock Data

There is mock data available for testing in the `mockData` folder.

## Things we're looking for

- Unit tests are important. We’d like to see a TDD approach to writing the app. We've included a Jest setup.
- The website should be fully responsive, working across device sizes. We've provided you with some ipad-sized images as a guide.
- The use of third party code/SDKs is allowed, but you should be able to explain why you have chosen the third party code.
- Put all your assumptions, notes, instructions and improvement suggestions into your GitHub README.md.
- We’re looking for a solution that's as close to the designs as possible.
- We'll be assessing your coding style, how you've approached this task and whether you've met quality standards on areas such as accessibility, security and performance.
- We don't expect you to spend too long on this, as a guide 3 hours is usually enough.

---

## Getting Started

- `Fork this repo` into your own GitLab namespace (you will need a GitLab account).
- Install the NPM dependencies using `npm i`. (You will need to have already installed NPM using version `14.x`.)
- Run the development server with `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser.

## Tests

- use of insomnia to consume data and test API
- use of Git to work in sections and test as went along
- found inconsistencies of mock data and api data - e.g. id's in product attributes
- tested for duplicates in mock data

## Assumptions

- too much detail on product information -

## Notes

- Netherworld Syntax unknown - layout component moved down a level for bespoke functions

## Instructions

## Improvement suggestions

- Bespoke Headers for pages - e.g. Home page and product pages
- single source of price information

## To Do

- All styling (mobile first)
~~- Tablet Styling~~
~~- Desktop Styling~~
- Security - Api consumption to API folder - hidden back end - hide information from customers
- security - dangerously set inner html
- data.price.now - coming from wrong API - see [id]
~~- styling to carousel~~
~~- remove duplicates from api results~~
~~- alphabetise product spec results~~
- spell check 5817337 has spelling error in
- homepage - replace images with png
- check resolution of images on homepage
- read more section
~~- product code switched on landscape tablet and above sizes~~

# Third Party Code Used

- Axios - combine get and json formatting
- React-responsive Carousel
- time limitations and experience

- SEO considered in the head

- opted to write my own code for read more section as opposed to a third party resource