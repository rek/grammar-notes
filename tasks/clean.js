var gulp = require('gulp');
var clean = require('gulp-clean');

module.exports = function() {
	return gulp.src(this.opts.pkg.paths.distClient, {read: false})
		.pipe(clean({force: true}))
		// .pipe(gulp.dest('dist'));
};
