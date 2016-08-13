
let setup = (pool) => {

	return pool
		.query(`CREATE TABLE IF NOT EXISTS visit (
			date timestamptz,
			ip varchar(20)
		)`)
		.then(() => {
			return pool.query(`CREATE TABLE IF NOT EXISTS item (
				id bigserial primary key,
				title varchar(40) NOT NULL,
				content text,
				created_at timestamptz,
				updated_at timestamptz
			)`)
		})
		.then(() => {
				// id bigserial primary key,
			return pool.query(`CREATE TABLE IF NOT EXISTS itemType (
				title varchar(40) NOT NULL UNIQUE,
				date timestamptz
			)`)
		})
		.then(() => {
				// id bigserial primary key,
			return pool.query(`CREATE TABLE IF NOT EXISTS subItem (
				title varchar(40) NOT NULL,
				content text,
				created_at timestamptz,
				updated_at timestamptz
			)`)
		})
		.then(() => {
				// id bigserial primary key,
			return pool.query(`CREATE TABLE IF NOT EXISTS subItemType (
				title varchar(40) NOT NULL UNIQUE,
				date timestamptz
			)`)
		})
		.then(() => {
			return pool.query(`CREATE TABLE IF NOT EXISTS tag (
				title varchar(40) NOT NULL UNIQUE
			)`)
		})
		.then(() => {
			return pool.query(`CREATE TABLE IF NOT EXISTS attachment (
				filename varchar(40) NOT NULL,
				created_at timestamptz
			)`)
		})
}

export default setup

	title       varchar(40) NOT NULL,
	did         integer NOT NULL,
	date_prod   date,
	kind        varchar(10),