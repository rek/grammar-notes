# grammar-notes [![Build Status](https://travis-ci.org/rek/grammar-notes.svg?branch=master)](https://travis-ci.org/rek/grammar-notes)

To help with note taking when writing a grammar.

## To setup:

```
	$ yarn
```

## To run in dev:

```
	$ yarn start // <- to build and start watching dev, host at: http://localhost:3000
```

## To make a build:

```
	$ yarn build
```

## Production mode (using jspm bundle)

```
   $ yarn build
   $ NODE_ENV=prod yarn server
```

## To deploy:

Merge into release branch

## To test:

```
	$ yarn test
```

## Misc

To set the build pack:

heroku buildpacks:set https://github.com/tengyifei/heroku-buildpack-nodejs-jspm -a grammar-manager

## Changelog

### 0.3.0 - Changed to setup from create react app

### 0.2.0 - Server taken out

### 0.1.0 - Server was built in

## License

This project is licensed under the MIT license, Copyright (c) 2016 Adam Tombleson. For more information see `LICENSE`.
