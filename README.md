<p align="center">
  <img src="/assets/images/logo.png" alt="Pick-A-Park"/>
</p>

![](https://github.com/ByPassaRe/Pick-A-Park-RestfulApi/workflows/Node%20CI/badge.svg)
![](https://github.com/ByPassaRe/Pick-A-Park-RestfulApi/workflows/Security/badge.svg)

## Description

REST API of Pick a Park project for Software Project Management exam's project of University of Camerino. 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## VSCode autofix using TsLint and Prettier

To make VsCode autofix your code using prettier and TsLint add this to the general settings.json file (search using Ctrl+Shift+p)


```
"editor.codeActionsOnSave": {
      "source.fixAll.tslint": true
    }
```

