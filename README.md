# grammar-notes [![Build Status](https://travis-ci.org/rek/grammar-notes.svg?branch=master)](https://travis-ci.org/rek/grammar-notes)

To help with note taking when writing a grammar.

## To run in dev:

```
	$ yarn
	$ yarn global add jspm (if you don't have it already)
	$ jspm install
	$ gulp
	$ node server
```

## To make a build:

```
	$ yarn
	$ npm run bundle
	$ git add scripts/app.bundle
	$ git commit -m 'New Build'
```

## Production mode (using jspm bundle)

```
   $ gulp build-prod
   $ NODE_ENV=prod npm run server
```

## To deploy:

Merge into release branch

## To test:

```
	$ npm install
	$ gulp test
```

## License

This project is licensed under the MIT license, Copyright (c) 2016 Adam Tombleson. For more information see `LICENSE`.
