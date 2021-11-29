# Last update 28 november 2021

## If you use Webstorm or PhpStorm => open setting window or ctrl + alt + s, => Editor => Code style => and search field "Hard wrap at" => change value on 90
## Open setting window, top left in the search field add 'eslint' => (you will see 'Fix Eslint Problems' => add hot key and use it)

## Install all packages... (yarn add ~ or ~ npm install) => i did with YARN
 
yarn add -D eslint prettier
yarn add -D eslint-plugin-react => exclude writing anti-patterns 
yarn add -D eslint-plugin-react-hooks => check valid hooks in react code 
yarn add -D eslint-plugin-import => check all imports for correct work 
yarn add -D eslint-plugin-prettier
yarn add -D eslint-plugin-jsx-a11y => check code, for people with disabilities

yarn add -D eslint-config-airbnb => airbnb config
yarn add -D eslint-config-prettier => prettier config, no conflict with airbnb
yarn add -D eslint-import-resolver-typescript => for correct work eslint-plugin-import package with typescript

yarn add -D @typescript-eslint/parser => eslint parser code for typescript 
yarn add -D @typescript-eslint/eslint-plugin

## Create file
Create .env in your project folder => add code from .env into your .env file
Create .prettierrc file in your project folder => add code from .pretierrc into your .pretierrc file
Create .eslintrc.json in your project folder => add code from .eslintrc.json into your .eslintrc.json file
Create .eslintrcignore in your project folder => add code from .eslintrcignore into your .eslintrcignore file

## into .gitignore file copy lines 25-29 and add code into your .gitignore file
## Base url => tsconfig.json ('.' or 'src') => absolute paths for app,
## If '.' => path in import 'src/components/...'
## If 'src' => path in import 'components/...' or './components/...'

POSSIBLE ERROR
POSSIBLE ERROR
POSSIBLE ERROR

## If you get error > "context.getPhysicalFilename is not a function" <, use this link https://issueexplorer.com/issue/prettier/eslint-plugin-prettier/434
If you have other error, remove object in package.json:
 "eslintConfig": {
   "extends": [
     "react-app",
     "react-app/jest"
    ]
 },

POSSIBLE ERROR
POSSIBLE ERROR
POSSIBLE ERROR





## After installing all the packages and checking, go to the README_HELPER.md file there is a lot of useful information for you (:





## IF YOU FOUND AN INTERESTING BUG OR HAVE PROBLEM WITH START APP, WRITE ME IN TELEGRAM
@gleb_pilipenka

## Good Luck (:
