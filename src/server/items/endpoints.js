let endpoints = (app, pool, handleError) => {

	app.get('/api/items', function(req, res) {
		pool.query('SELECT * FROM items', function(err, result) {
			// handle an error from the query
			if (err) {
				return handleError(err, res)
			}

			res.writeHead(200, {'content-type': 'application/json'})
			res.end(result.rows)
		})
	})

	app.get('/api/test', function(req, res) {

		// Create a log with request IP and current time of request
		pool.query('INSERT INTO visit (date, ip) VALUES ($1, $2)', [new Date(), req.ip], function(err) {
			if (err) return handleError(err)

			// get the total number of visits today (including the current visit)
			pool.query('SELECT COUNT(date) AS count FROM visit', function(err, result) {
				// handle an error from the query
				if (err) return handleError(err)
				res.writeHead(200, {'content-type': 'application/json'})
				res.end('You are visitor number ' + result.rows[0].count)
			})
		})
	})
}

export default endpoints
