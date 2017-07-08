# grammar-notes [![Build Status](https://travis-ci.org/rek/grammar-notes.svg?branch=master)](https://travis-ci.org/rek/grammar-notes)

To help with note taking when writing a grammar.

## To setup:

```
	$ yarn global add jspm
	$ yarn global add gulpjs/gulp#4.0
	$ yarn
	$ jspm install
```

## To run in dev:

```
	$ yarn dev // <- to build and start watching dev, host at: http://localhost:9777/
```

## To make a build:

```
	$ yarn
	$ yarn bundle
	$ git add scripts/app.bundle
	$ git commit -m 'New Build'
```

## Production mode (using jspm bundle)

```
   $ gulp build-prod
   $ NODE_ENV=prod yarn server
```

## To deploy:

Merge into release branch

## To test:

```
	$ npm install
	$ gulp test
```

## Misc

To set the build pack:

heroku buildpacks:set https://github.com/tengyifei/heroku-buildpack-nodejs-jspm -a grammar-manager

## Changelog

### 0.2.0 - Server taken out

### 0.1.0 - Server was built in

## License

This project is licensed under the MIT license, Copyright (c) 2016 Adam Tombleson. For more information see `LICENSE`.
