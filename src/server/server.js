'use strict';

import pg from 'pg'
import express from 'express'
import fs from 'fs'
import eps from 'ejs'
import morgan from 'morgan'

Object.assign = require('object-assign');

const port = process.env.PORT || 8080,
    ip = process.env.IP || '0.0.0.0';

let db = null,
	app = express(),
    dbDetails = new Object();

let initDb = function initDb(callback) {

};

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'));

app.set('views', __dirname + '/../client');

app.use('/styles', express.static(__dirname + '/../client/styles'));

app.get('/', function (req, res) {
	// try to initialize the db on every request if it's not already
	// initialized.
	if (!db) {
		initDb(function (err) {});
	}

	if (db) {
		let col = db.collection('counts');
		// Create a document with request IP and current time of request
		col.insert({
			ip: req.ip,
			date: Date.now()
		});

		col.count(function (err, count) {
			res.render('index.html', {
				pageCountMessage: count,
				dbInfo: dbDetails
			});
		});
	} else {
		res.render('index.html', { pageCountMessage: null });
	}
});

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM grammar', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
})

app.get('/pagecount', function (req, res) {
	// try to initialize the db on every request if it's not already
	// initialized.
	if (!db) {
		initDb(function (err) {});
	}

	if (db) {
		db.collection('counts').count(function (err, count) {
			res.send('{ pageCount: ' + count + '}');
		});
	} else {
		res.send('{ pageCount: -1 }');
	}
});

// error handling
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something bad happened!');
});

initDb(function (err) {
	console.log('Error connecting to PG. Message:\n' + err);
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app;