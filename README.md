# Timetables Trial System

[![Netlify Status](https://api.netlify.com/api/v1/badges/771a3e8d-f72a-4fe0-96b2-5391f86972c1/deploy-status)](https://app.netlify.com/sites/timetable-demo-project/deploys)

## Introduction

This is the react app to check timetables between the two requested addresses(default destination is set to Maria01) in real time. Data for the app is fetched from Digitransit API. Following tools and technologies were used to build and deploy this app.

- React.js
- Graphql-react
- Material UI
- Styled Components
- React-test-renderer
- Eslint-plugin-react
- Docker, Docker-compose
- Git, Github
- Netlify


## Local Set Up
1. Clone the repo

```sh
git clone https://github.com/meanjula/timetables_trialSystem.git
```
1. [Install](https://nodejs.org/en/download/) Node and NPM, if you don't have it already.
2. Install NPM packages
```sh
npm install npm@latest -g
```
Go to the project folder and do

```sh
npm install
```

4. Run app

```sh
npm start
```

Alternatively, if you have docker and docker-compose installed in your device, you can simply clone repo and run it in a container.

```sh
docker-compose up
```

Now the app is ready to open in your browser (http://localhost:3000)

The page will reload when you make changes.

Additionally, Eslint can be configured in an IDE to check linting.

## Starting From Scratch
- Plan the user Interface design in Figma or use any UI design tools.
- Initialize the project folder 
```sh
npx create-react-app your-app-name
npm install graphql-react
npm install @mui/material @emotion/react @emotion/styled
npm install --save-dev react-test-renderer
```
### App.js
- Create two input elements for two addresses.
- Button element for submitting request 
- Input value is used as search parameter for serching matching address through Geocoding API].
 (https://api.digitransit.fi/geocoding/v1/search?text=${from}&size=1)

- Initialize the  graphql query for fetching data from Digitransit API.
End point Url for requesting data:
(https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql)

- From and to addresses are used as parameter in request body of graphql query.
- As a response dynamic array data is obtained in real time which is then mapped to render in the web app using different components such as Leg, Landing and Itenary.

## Testing
Create the test cases file for the app using react testing library and jest.
```sh
- npm install @testing-library/react react-test-renderer jest-dom --save-dev (for testing)
```
After creating the test, run the following command to check if all tests passed.

```sh
npm test
```

## Build

Build correctly bundles React in production mode and optimizes the build for the best performance.

```sh
npm run build
```

After build, app is ready to be deployed!

## Deployment

CICD pipeline has been created using Netlify and Github.
[Netlify](https://timetable-demo-project.netlify.app)
## Docker command

-  manually  build image 

```sh
docker build --tag timetable_app .
```
- run the image to create a container
```sh
docker run -p 3000:3000 timetable_app
```
You can use docker-compose and automate the above two processes. Create docker compose file and run
```sh
docker-compose up
```

Open the app in browser(http://localhost:3000/)

## ESLint
Install plgin for eslint and setup configuration to check your code quality.

```sh
npm install -g eslint-plugin-react
npm init @eslint/config
```

## Resources

- [Digitransit](https://digitransit.fi/en/developers/apis/)
- [Graphql](https://graphql.org/learn)
- [netlify](https://docs.netlify.com/get-started)
