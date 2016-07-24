const gulp = require('gulp'),
	babel = require('gulp-babel');

module.exports = function() {
	return gulp
		.src(this.opts.pkg.paths.srcClient + '/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
};
