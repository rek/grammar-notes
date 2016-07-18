var gulp = require('gulp');
var clean = require('gulp-clean');

module.exports = function() {
	return gulp.src(this.opts.pkg.paths.dist)
		.pipe(clean());
};
