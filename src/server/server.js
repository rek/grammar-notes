'use strict'

import pg from 'pg'
import express from 'express'
import fs from 'fs'
import eps from 'ejs'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import setupDB from './setupDb.js'

Object.assign = require('object-assign')

const port = process.env.PORT || 8080,
    ip = process.env.IP || '0.0.0.0'

let db = null,
	app = express(),
    dbDetails = new Object()

let initDb = function initDb(callback) {

}

app.engine('html', require('ejs').renderFile)
app.use(morgan('combined'))

app.set('views', __dirname + '/../client')

app.use('/styles', express.static(__dirname + '/../client/styles'))

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	// try to initialize the db on every request if it's not already
	// initialized.
	if (!db) {
		initDb(function (err) {})
	}

	if (db) {
		let col = db.collection('counts')
		// Create a document with request IP and current time of request
		col.insert({
			ip: req.ip,
			date: Date.now()
		})

		col.count(function (err, count) {
			res.render('index.html', {
				pageCountMessage: count,
				dbInfo: dbDetails
			})
		})
	} else {
		res.render('index.html', { pageCountMessage: null })
	}
})

var Pool = require('pg').Pool;
// create the pool somewhere globally so its lifetime
// lasts for as long as your app is running
var pool = new Pool(process.env.DATABASE_URL)
// let ddd = Pool.connect(process.env.DATABASE_URL)

app.get('/db', function (request, response) {
	console.log('Connecting to:', process.env.DATABASE_URL);

	pg.connect(process.env.DATABASE_URL, function(err, client) {
		if (err) throw err;

		console.log('Connected to database!');

		client
			// .query('SELECT table_schema,table_name FROM information_schema.tables;')
			.query('SELECT test FROM grammar;')
			.on('row', function(row) {
				console.log('Data:', JSON.stringify(row));
			});


	let table = 'test',
		dbName = 'grammar'

	client.query(`CREATE TABLE IF NOT EXISTS ${dbName}.${table} (
		title varchar(45) NOT NULL,
	);`,
		function(err, rows) {
			if(err !== null) {
				console.log(err);
			}
			else if(rows === undefined) {
				console.log('Init time!');

				// db.run('CREATE TABLE "bookmarks" ' +
				// '("id" INTEGER PRIMARY KEY AUTOINCREMENT, ' +
				// '"title" VARCHAR(255), ' +
				// 'url VARCHAR(255))', function(err) {
				// 	if(err !== null) {
				// 	console.log(err);
				// 	}
				// 	else {
				// 	console.log("SQL Table 'bookmarks' initialized.");
				// 	}
				// });
			} else {
				console.log(`SQL Table "${table}" already initialized.`);
			}
		});
	})
});

/**
*
* API
*
*/
app.get('/api/test', function(req, res) {

		// Create a document with request IP and current time of request
		// 	ip: req.ip,

	pool.query('INSERT INTO visit (date, ip) VALUES ($1, $2)', [new Date(), req.ip], function(err) {
		if (err) return handleError(err);

		// get the total number of visits today (including the current visit)
		pool.query('SELECT COUNT(date) AS count FROM visit', function(err, result) {
			// handle an error from the query
			if (err) return handleError(err);
			res.writeHead(200, {'content-type': 'text/plain'});
			res.end('You are visitor number ' + result.rows[0].count);
		});
	});
})

// error handling
app.use(function(err, req, res, next) {
	console.error(err.stack)
	res.status(500).send('Something bad happened!')
})

// if (!(req.body.firstName || req.body.lastName)) {
// 	handleError(res, 'Invalid user input', 'Must provide a first or last name.', 400);
// }

// Generic error handler used by all endpoints.
// let handleError = (res, reason, message, code) => {
// 	console.log('ERROR: ' + reason)
// 	res.status(code || 500).json({'error': message})
// }

let handleError = (err) => {
	console.log(e.message, e.stack)
	res.writeHead(500, {'content-type': 'text/plain'});
	res.end('An error occurred');
};

initDb(function (err) {
	console.log('Error connecting to PG. Message:\n' + err)
})

let runServer = () => {
	setupDB(pool)
		.then(() => {
			console.log('DB Initialized, starting server.');
			app.listen(port, ip)
			console.log('Server running on http://%s:%s', ip, port)
		})
		.catch((err) => {
			console.log('err', err);

			// if error is not catastropic, restart:
			if (false) {
				runServer()
			}
		})
}

runServer()

export default app
