# Getting Started with the project

## First thing will be to clone the project

### `git clone https://github.com/niketanmoon/contacts_resonate.git`

## Change the directory to the cloned directory

### `cd contacts_resonate`

## Install the dependencies

### If you have yarn installed then do `yarn install` otherwise you can also do `npm install`

## Run the project

### `yarn start` or `npm start`

## About the project

### The project contains two routes

> 1. `/` which points to the home route

- This route performs a `GET` request to `https://jsonplaceholder.typicode.com/users/` and display the users that we get from the API
- It also has the **_`search`_** functionality where we can search users with `name`, `username` and `email`.

> 2. `/:id` which points to the details of each user

- Once we click on a user on the home page, it will redirect to the contact details page, where we again make a `GET` request to `https://jsonplaceholder.typicode.com/users/:id` where id is a integer parameter

## Most frequent libraries and components used

### `react-router-dom`, `material-ui`, `axios`, `Card`, `Grid`
