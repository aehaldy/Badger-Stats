# Badger-Stats

Badger-Stats is a data visualization page to display some of the most recent data about the University of Wisconsin-Madison. It access the dataset from a public API using Flask and renders a carousel of interactive visualization charts using Nivo and mobile-first development principles.

## How to boot this project

This project requires Python3, Yarn, and Flask to run.

### Data

This project uses public federal data from College Scorecard at https://api.data.gov/ed/collegescorecard/v1/schools/

## Tech Stack

This project was rapidly developed using several existing libraries. The main frameworks are React for the frontend and Flask for the backend. But in addition, I want to give special thanks to:

Nivo -- Data visualization library for React

React-Multi-Carousel -- A React component for desktop/mobile carousel displays

React-CSV -- For turning JavaScript data into a CSV for download

jsPDF -- For easily downloading PDFs from the web

