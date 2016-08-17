import _ from 'lodash'
import {inserter} from '../utils'

let endpoints = (app, pool, handleError) => {

	app.get('/api/tags', function(req, res) {
		pool.query('SELECT * FROM tag', function(err, result) {
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

	app.post('/api/tags', function(req, res) {
		let table = 'tag',
			validItems = {}

		// console.log('Raw:', req.body);

		// validation
		if (_.isString(req.body.tag) && req.body.tag !== '') {
			validItems.tag = req.body.tag
		}

		let sql = inserter(table, validItems)

		pool.query(sql.query, sql.items, (err) => {
			if (err) {
				// console.log('err.code', err.code);
				// console.log('err', err);
				switch (err.code) {
					case '23505': {
						res.json({error: 'This tag already exists'});
					}
				}

				res.end()
				return
			}

			res.json({success: true});
		})
	})
}

export default endpoints
