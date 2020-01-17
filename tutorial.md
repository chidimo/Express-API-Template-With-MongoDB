# How to set up a backend API project using express (mongodb and postgres)

## Table of content

1. Getting started
1. Installing express
1. Configure version control with `git` (with `.gitignore` and commit owner)
1. Generating the express project
1. Remove unnecessary files and convert to `ES6`
1. Adding development dependencies
1. Configuring environment variables
1. Adding CI/CD tools
1. Writing your first test

## Getting started

The first step is to install node js and initialize a new project. You can check out the node js web page and.

Open your terminal and create a new directory with the below command

`mkdir express-api-template`

Navigate into the newly created directory with

`cd express-api-template`

Now, initialize a new npm project with the command

`npm init`

Answer the questions that follow and when done you have a new javascript project. At this point you have only one file in the folder named `package.json`. This file holds information about your project. \

At this point I usually like to add a `README.md` file to my project. So go ahead and create that file at the root of your project. Now you have two files in your folder.

I also like adding a `.editorconfig` file. Read more about it [here](https://editorconfig.org/). If you're using Visualstudiocode there's a plugin that helps you automate the process.

At this point your folder looks like below

```cmd
EXPRESS-API-TEMPLATE/
    .editorconfig
    package.json
    README.md
```

## Installing express

Now it's time to install the package that powers the API. You can read about express on [expressjs.com](https://expressjs.com/)

On your terminal run either of the following commands

`yarn add express` or `npm install express`

Note: You can either use yarn or npm as your dependency manager. I find that I like yarn better. At this point if you check the `package.json` file you'll see express listed as a dependency. You also get a `node_modules` folder.

```json
  "dependencies": {
    "express": "^4.17.1",
  }
```

## Configure version control with `git`

At this point we should configure version control using `git`.

On your terminal issue the command

`git init`

This initialises the current folder to use version control.

Next we create a `.gitignore` file. Inside this file we add the names of files and folders that we don't care about tracking how they have changed for whatever reason. One such folder is the `node_modules` folder.

On your terminal, if you're on a mac you can create the file with

`touch .gitignore`

Open up the `.gitignore` file and type `node_modules/`

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

## Generating the express project

It's possible to manually set up your server from scratch, but to make our life easier we'll use the express generator package. You can learn more about it [here](https://expressjs.com/en/starter/generator.html).
Install it with either of the following commands

`yarn global add express-generator` or `npm install -g express-generator`

To generate the project run the following command

`express src`

This generates the necessary files and puts them inside a folder named `src`
