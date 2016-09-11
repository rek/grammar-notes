/* eslint no-path-concat: false */

import pg from 'pg'
import express from 'express'
// import fs from 'fs'
// import eps from 'ejs'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import setupDB from './setupDb.js'
import config from './config.js'
import itemEndpoints from './items/endpoints.js'
import tagEndpoints from './tag/handlers.js'

Object.assign = require('object-assign')

let app = express(),
	Pool = pg.Pool,
	devMode = config.env !== 'production'

app.engine('html', require('ejs').renderFile)
app.use(morgan('combined'))

app.set('views', __dirname + '/../client')

app.use('/scripts', express.static(__dirname + '/../../src/client/scripts'))
app.use('/styles', express.static(__dirname + '/../client/styles'))
app.use('/config.js', express.static(__dirname + '/../../config.js'))
app.use('/jspm_packages', express.static(__dirname + '/../../jspm_packages'))

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// create the pool somewhere globally so its lifetime
// lasts for as long as your app is running
// uses vars from env
let pool = new Pool()

// main app
// app.get('/', function(req, res) {
// 	res.render(devMode ? 'index.html' : 'index.prod.html')
// })

// so all routes work
app.get('*', function(req, res) {
	res.render(devMode ? 'index.html' : 'index.prod.html')
})

/**
*
* API
*
*/
app.get('/health', function(req, res) {
	res.send('OK')
})

// error handling
app.use(function(error, req, res) { // , next
	console.error(error.stack)
	res.status(500).send('Something bad happened!')
})

let handleError = (error, res) => {
	console.log(error.message, error.stack)
	res.writeHead(500, {'content-type': 'text/plain'})
	// res.status(code || 500).json({'error': message})
	res.end('An error occurred')

    // res.statusCode = 400;
    // return res.send('Error 400: Post syntax incorrect.');
}

let runServer = () => {
	setupDB(pool)
		.then(() => {
			console.log('DB Initialized, starting server.')

			if (devMode) {
				require('chokidar-socket-emitter')({port: 8090, path: 'src'});
			}

			itemEndpoints(app, pool, handleError)
			tagEndpoints(app, pool, handleError)

			app.listen(config.port, config.ip)
			console.log('Server running on http://%s:%s', config.ip, config.port)
		})
		.catch((error) => {
			console.log('Error:', error)

			// if error is not catastropic, restart:
			if (false) {
				runServer()
			}
		})
}

runServer()

export default app
