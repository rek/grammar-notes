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
	Pool = require('pg').Pool,
	dbDetails = new Object(),
	devMode = !process.env.NODE_ENV || process.env.NODE_ENV !== 'production'

app.engine('html', require('ejs').renderFile)
app.use(morgan('combined'))

app.set('views', __dirname + '/../client')

app.use('/styles', express.static(__dirname + '/../client/styles'))

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// create the pool somewhere globally so its lifetime
// lasts for as long as your app is running
// uses vars from env
let pool = new Pool()

// main app
app.get('/', function (req, res) {
	res.render(devMode ? 'index.html' : 'index.prod.html')
})

/**
*
* API
*
*/
app.get('/health', function (req, res) {
	res.send('OK')
})

app.get('/api/test', function(req, res) {

	// Create a log with request IP and current time of request
	pool.query('INSERT INTO visit (date, ip) VALUES ($1, $2)', [new Date(), req.ip], function(err) {
		if (err) return handleError(err)

		// get the total number of visits today (including the current visit)
		pool.query('SELECT COUNT(date) AS count FROM visit', function(err, result) {
			// handle an error from the query
			if (err) return handleError(err)
			res.writeHead(200, {'content-type': 'text/plain'})
			res.end('You are visitor number ' + result.rows[0].count)
		})
	})
})

// error handling
app.use(function(err, req, res, next) {
	console.error(err.stack)
	res.status(500).send('Something bad happened!')
})

let handleError = (err) => {
	console.log(e.message, e.stack)
	res.writeHead(500, {'content-type': 'text/plain'})
	// res.status(code || 500).json({'error': message})
	res.end('An error occurred')
}

let runServer = () => {
	setupDB(pool)
		.then(() => {
			console.log('DB Initialized, starting server.')
			app.listen(port, ip)
			console.log('Server running on http://%s:%s', ip, port)
		})
		.catch((err) => {
			console.log('err', err)

			// if error is not catastropic, restart:
			if (false) {
				runServer()
			}
		})
}

runServer()

export default app
