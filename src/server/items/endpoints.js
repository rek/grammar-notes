import _ from 'lodash'

let endpoints = (app, pool, handleError) => {

	app.get('/api/items', function(req, res) {
		pool.query('SELECT * FROM item', function(err, result) {
			// handle an error from the query
			if (err) {
				return handleError(err, res)
			}

			console.log('Result:', result.rows);
			// working:
			// res.setHeader('Content-Type', 'application/json');
			// res.send(JSON.stringify(result.rows));
			// working:
			res.json(result.rows);

			// not working:
			// res.writeHead(200, {'content-type': 'application/json'})
			// res.send(JSON.stringify(result.rows)) // JSON string on GET
			// res.end()
		})
	})

	app.post('/api/items', function(req, res) {
		let validItems = {}

		console.log('Raw:', req.body);

		if (req.body.nice) {
			validItems.test1 = 'test1'
		}

		if (req.body.woah) {
			validItems.test2 = 'test2'
		}

		let validKeys = _.keys(validItems).join(', '),
			countKeys = _.map(validItems, (i, k) => '$' + (k + 1)),
			pickedItems = _.pick(validKeys)
 console.log('validKeys', validKeys);
 console.log('countKeys', countKeys);
 console.log('pickedItems', pickedItems);
 console.log('qery:', `INSERT INTO item (${validKeys}) VALUES (${countKeys})`);
		pool.query(`INSERT INTO item (${validKeys}) VALUES (${countKeys})`, pickedItems, (err) => {
			res.json({success: true});
		})
	})

	app.post('/api/visit', function(req, res) {
		// Create a log with request IP and current time of request
		pool.query('INSERT INTO visit (date, ip) VALUES ($1, $2)', [new Date(), req.ip], function(err) {
			res.json({success: true});
		})
	})
}

export default endpoints
