import _ from 'lodash'

let inserter = (table, validItems) => {
	let validKeys = _.keys(validItems).join(', '),
		countKeys = _.reduce(validItems, (results, i) => {
			results.push('$' + (results.length + 1))
			return results
		}, []).join(', '),
		items = _.values(validItems)

	return {
		items,
		query: `INSERT INTO ${table} (${validKeys}) VALUES (${countKeys})`,
	}
}

export {inserter}
