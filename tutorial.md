# How to set up a backend API project using express (mongodb and postgres)

## Table of content

1. Getting started
1. Installing express
1. Configure version control with `git`
1. Upload to `Github`
1. Generate the express project
1. Remove unnecessary files
1. Running the app
1. Convert to `ES6`
1. Add development dependencies
1. Configure environment variables
1. Configure CI/CD tools
1. Write your first test

## Getting started

The first step is to install node js and initialize a new project. You can check out the node js web page [here].

Open your terminal and create a new directory with the below command

`mkdir express-api-template`

Navigate into the newly created directory with the command

`cd express-api-template`

Now, initialize a new npm project with the command

`npm init`

Answer the questions that follow and when done you have a new javascript project. At this point you have only one file in the folder named `package.json`. This file holds information about your project.

At this point we should add a `README.md` file to my project. So go ahead and create that file at the root of your project. Now you have two files in your folder.

I also like adding a `.editorconfig` file. Read more about it [here](https://editorconfig.org/). If you're using Visualstudiocode there's a plugin that helps you automate the process.

At this point your folder looks like below

```cmd
EXPRESS-API-TEMPLATE/
    .editorconfig
    package.json
    README.md
```

## Installing express

Now it's time to install express. You can read more about express on the official [site](https://expressjs.com/)

On your terminal and still in the project directory, run either of the following commands

`yarn add express` or `npm install express`

**Note**: You can either use `yarn` or `npm` as your dependency manager. I've had a smoother experience with yarn. At this point if you check the `package.json` file you'll see express listed as a dependency.

```json
  "dependencies": {
      "express": "^4.17.1",
  }
```

You also get a `node_modules` folder at the root of your project.

## Configure version control with `git`

At this point we should configure version control using `git`.

On your terminal and still in the project directory, issue the command

`git init`

This initializes the current folder to use `git` for version control. In a nutshell, version control helps you manage multiple versions of your app.

Next we create a `.gitignore` file. Inside this file we add the names of files and folders that we don't care about keeping track of how they have changed over time. One such folder is the `node_modules` folder.

On your terminal run

`echo node_modules/ > .gitignore`

This creates the `.gitignore` file and writes `node_modules/` in it.

At this point your folder structure looks like below

```cmd
EXPRESS-API-TEMPLATE/
    node_modules/
    .editorconfig
    .gitignore
    package.json
    README.md
    yarn.lock
```

Now commit these files with the following commands in order

`git add .`

`git commit -m "Initial commit"`

## Upload to `Github`

Now head over to [Github](https://github.com). Create an account if you don't have one yet and create a new repository. [Here](https://www.maketecheasier.com/get-started-git-github/) is a short and excellent guide to help you get started.

When creating the repository be sure to uncheck the option **Initialize this repository with a README** as we already have a `README.md` file. The description is optional as well and you can leave the repository as either public or private. Click *Create repository*

On the next page, we will be making use of the second setup option

> **…or push an existing repository from the command line**.
>
> `git remote add origin repo_link`
>
> `git push -u origin master`

Copy the displayed commands one by one and paste them in your terminal

Enter your username and password when prompted for your credentials.

If you have 2-factor authentication on, then go to [Personal access tokens](https://github.com/settings/tokens), generate a new token and use it as your username when prompted for your credentials. Leave the password blank.

## Generate the express project

It's possible to manually set up your server from scratch, but to make our life easier we'll use the express generator. You can learn more about it [here](https://expressjs.com/en/starter/generator.html).
Install it with either of the following commands

`yarn global add express-generator` or `npm install -g express-generator`

To generate the project run the following command

`express -f`

The `-f` flag forces express to create the project in the current directory.

## Remove unnecessary files

Delete the file `index/users.js`. Delete the folders `public/` and `views/`

Rename the file `bin/www` to `bin/www.js`.

Create a new folder named `src/` and move `app.js` file, `bin/` folder, and `routes/` folder inside.

At this point your project folder structure looks like below.

```cmd
EXPRESS-API-TEMPLATE/
    node_modules/
    src/
        bin/
            www.js
        routes/
            index.js
        app.js
    .editorconfig
    .gitignore
    package.json
    README.md
    yarn.lock
```

Open up `package.json` and update the `start` script to look like below

`"start": "node ./src/bin/www"`

Replace the content of `src/app.js` with the below code

```javascript
var logger = require('morgan');
var express = require('express');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRouter);

module.exports = app;
```

Replace the content of `routes/index.js` with the below code

```javascript
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    return res.status(200)
    .json({ message: 'Welcome to Express API template' });
});

module.exports = router;
```

## Running the app

To install the project dependencies, run either

`yarn` or `npm install`

To start the app, run either

`yarn start` or `npm run start`

If you've set up everything correctly you should only see `$ node ./src/bin/www` on your terminal.

Visit `http://localhost:3000/` in your browser. You should see the following json message

```json
{
  "message": "Welcome to Express API template"
}
```

Commit your changes and push to your Github repo

`git add .`

`git commit -m "run app for first time"`

`git push`
