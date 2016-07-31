var gulp = require('gulp');
var copy = require('./copy/html.js');

module.exports = function() {
	// return copy.bind(this)()
	return gulp
		// .src('')
		.src(this.opts.pkg.paths.srcClient + '/*.js')

		.pipe(copy.bind(this)())

		// .pipe(copy())

};

module.exports.dependencies = ['clean'];
// module.exports.dependencies = ['clean', 'copy:html', 'babel:client'];
