## Last update 11 May 2022

## If you use Webstorm or PhpStorm => open setting window or ctrl + alt + s, => Editor => Code style => and search field "Hard wrap at" => change value on 90
## Open setting window, top left in the search field add 'eslint' => (you will see 'Fix Eslint Problems' => add hot key and use it)

### If we have a problem with version when install one of this packages, search info in google or install packages yarn add -D package-name@0.0.0.,
### @0.0.0 it's version for package, version you can see in my package.json

## Commands:
    - yarn add -D eslint => linter, code style analyzer

    Afterr call "npx eslint --init" command
    - y
    - To check syntax, find problems, and enforce code style
    - JavaScript modules (import/export)
    - React
    - Are you use TypeScript (Yes/No) ??
    - Browser
    - Use a popular style guide => Airbnb
    - Usuallu, a use JSON, you can use one of the random file type

    - Yes
    - Yarn/Npm

    - yarn add -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks

    - yarn add -D husky

    - After call "npx husky-init && yarn install" command"
    - y
    - In project we get new folder .husky, open pre-commit file and change "npm test" to "npx lint-staged"
    - Add "lint-fix": "eslint --fix" to script object in package.json
    - Add some line to package.json below script object:
    "lint-staged": {
      "**/*.{js,ts,jsx,tsx}": [
      "npm run lint-fix",
      "prettier --write"
      ]
    },

## Files
    - Create .env in your project folder => add code from .env into your .env file.
    - Create .prettierrc file in your project folder => add code from .pretierrc into your .pretierrc file.
    - Create .eslintignore in your project folder => add code from .eslintignore into your .eslintignore file.
    - Create .eslintrc.json in your project folder => add code from .eslintrc.json into your .eslintrc.json file.

    - If we have a problems (errors from eslint or prettir and can commit code, wait some minutes,
    or reboot WebStorm), after when we can commit changes with error we have a notification...

    - Congratulations! You are setup +- base config (eslint, prettier, husky) for React App

## Into .gitignore file copy lines 25-29 and add code into your .gitignore file

## Base url => tsconfig.json ('.' or 'src') => absolute paths for app,
## If '.' => path in import 'src/components/...'
## If 'src' => path in import 'components/...' or './components/...'

## If you have set up absolute paths and are running in webStorm go to:
    - Open setting window or ctrl + alt + s => Editor => Code Style => TypeScript || JavaScript => tab 'Imports' => turn checkbox 'Use paths relative to tsconfig.json' and 'Use paths relative to the project, resource or sources roots'
    - https://blog.jetbrains.com/webstorm/2020/07/configuring-the-style-of-imports-in-javascript-and-typescript/

POSSIBLE ERROR POSSIBLE ERROR POSSIBLE ERROR
POSSIBLE ERROR POSSIBLE ERROR POSSIBLE ERROR
POSSIBLE ERROR POSSIBLE ERROR POSSIBLE ERROR

## If error message: "this.cliEngineCtor is not a function" update your WS to min version 2021.2.2, if don't help update NodeJs
## If error message: "context.getPhysicalFilename is not a function", use this link https://issueexplorer.com/issue/prettier/eslint-plugin-prettier/434
## If other error message, remove object in package.json:

"eslintConfig": {
    "extends": [
        "react-app",
        "react-app/jest"
    ]
},

POSSIBLE ERROR POSSIBLE ERROR POSSIBLE ERROR
POSSIBLE ERROR POSSIBLE ERROR POSSIBLE ERROR
POSSIBLE ERROR POSSIBLE ERROR POSSIBLE ERROR

## After installing all the packages and checking, go to the README_HELPER.md file there is a lot of useful information for you (:

## IF YOU FOUND AN INTERESTING BUG OR HAVE PROBLEM WITH START APP, WRITE ME IN TELEGRAM
## @gleb_pilipenka
## Good Luck (:
