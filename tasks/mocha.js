var gulp = require('gulp'),
	mocha = require('gulp-mocha');

module.exports = function() {
	return gulp
		.src(this.opts.pkg.paths.distClient + '/test.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha({reporter: 'nyan'}))
		.pipe(gulp.dest('dist'));
};
