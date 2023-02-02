# ordent-frontend-test
This is project based on ViteJs ReactJs, Tailwind, React Hook, Redux, Redux Saga

# FEATURES
- Through documentation: Written with same care as Vite js or React js

## TABLE OF CONTENT
-[Getting Started](#getting-started)
-[Available Script](#available-script)
-[Architecture](#architecture)

## Getting Started
make sure you have the following installed:
-Node (at least the latest LTS)
-ESlint (at least the latest)

```bash
# 1. clone the repository
git clone https://github.com/GusnaRWX/ordent-frontend-test.git

# 2. Enter your clone project
cd ordent-frontend-test

# 3. install depedencies. make sure npm installed: https://www.npmjs.com/get-npm
npm install

# 4. run on your local
# this command is a default to run development mode
# and will be listen http://localhost:5174 or http://localhost:5173 because using vite js
npm run dev
```

## Available Scripts
in the project directory, you can run:

```bash
# 1. run in development mode
npm run dev

# 2. Build for production
npm run build

# 3. preview for this project
npm run preview
````

## Architecture
```
|-- src/ # this is current React JS directory
    |-- components/ # where the most of the components in app will live, including global base component and using HOC methodology
    |-- containers/ # where the most of the containers in app will live and place for save the businness logic with HOC methodology
        |-- index.js/ # all of the containers or initialize all containers
    |-- utils/
    |-- store/ for fetch data to api
    |-- hooks/ custom
    |-- utils/
        |-- storage.js # all cation for get or post data to local storage
        |-- storage.js # include all global function
        |-- interceptors.js #
    |-- App.jsx / # wrapper for route
    |-- main.jsx
|-- index.html / # for set font setup in here
```

### public
React Js can serve static files, like images, under a folder called `public` in the client directory. Files inside `public` can then be referenced by your code starting from the base URL (`/`).


