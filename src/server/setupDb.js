
let setup = (pool) => {

	return pool
		.query(`CREATE TABLE IF NOT EXISTS visit (
			date timestamptz,
			ip varchar(20)
		)`)
		.then(() => {
			return pool.query(`CREATE TABLE IF NOT EXISTS visit3 (
				date timestamptz
			)`)
		})
		.then(() => {
			return pool.query(`CREATE TABLE IF NOT EXISTS visit3 (
				date timestamptz
			)`)
		})
}

export default setup
