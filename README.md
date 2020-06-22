# Badger-Stats

Badger-Stats is a data visualization page to display some of the most recent data about the University of Wisconsin-Madison. It access the dataset from a public API using Flask and renders a carousel of interactive visualization charts using Nivo and mobile-first development principles.

### Deployed Site

https://hidden-badger.herokuapp.com/

Known issues with deployed version: Carousel slider buttons sometimes don't appear in Firefox. Mobile-resonsive rendering not working in Chrome.

## How to run this project locally

You must have Python3, Node and Yarn installed on your machine to run this project.

Download or clone this repo and cd into the project folder.

#### Setup Python Environment for Flask

Change directories into `/api`. Make sure Python3 is accessible from this directory. This directory houses our backend.

Setup a virtual environment to run Flask. In a UNIX-based command line:

```
$ python3 -m venv venv
$ source venv/bin/activate
```

In Windows:

```
$ python -m venv venv
$ venv\Scripts\activate
```

You should now be in the virual environment (you can see `(venv)` at the beginning of your prompt). Make sure python dependencies are installed. The main ones needed to run the app are `flask` and `python-dotenv`.

```
(venv) api$ pip3 install -r ../requirements.txt
```

In Windows, you can just use the pip command.

The project is configured to use a .flaskenv file for environmental variables. Inside the `/api` directory, create a file called '.flaskenv' and add these lines:

```
FLASK_APP=api.py
FLASK_ENV=development
API_KEY=(YOUR API KEY)
```
Note, you'll have to generate your own API key, which is easy to do at https://api.data.gov/ed/collegescorecard/v1/schools/

Once you've done that, you should be able to execture the `yarn start-api` command, which serves our API. If the command executes without error, `ctrl+C` out and continue this setup.


#### Setup React

Back in the main directory, run `yarn` to install package dependencies.

Thats it for the frontend!

#### Run the app

Open two terminals. In one, start the API server with the `yarn start-api` command, and in the other, launch React by running `yarn start`.

You can then view the app at localhost:3000. Be sure to view it in mobile developer view, as it was designed to be mobile-friendly!


## Tech Stack

This project was rapidly developed using several existing libraries. The main frameworks are React for the frontend with Redux for state management, and Flask for the backend. But in addition, I want to give special thanks to:

Nivo -- Data visualization library for React

React-Multi-Carousel -- A React component for desktop/mobile carousel displays

React-CSV -- For turning JavaScript data into a CSV for download

jsPDF -- For easily downloading PDFs from the web

### Data

This project uses public federal data from College Scorecard at https://api.data.gov/ed/collegescorecard/v1/schools/
