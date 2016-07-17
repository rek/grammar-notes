var gulp = require('gulp');
// var newer = require('gulp-newer');

module.exports = function() {
	return gulp.src([this.opts.pkg.paths.srcClient + '/*.html'])
		.pipe(gulp.dest(this.opts.pkg.paths.distClient))
};
