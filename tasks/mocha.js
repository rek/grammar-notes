const gulp = require('gulp');
const mocha = require('gulp-mocha');

module.exports = function() {
	return gulp.src('server/test.js', {read: false})
		// gulp-mocha needs filepaths so you can't have any plugins before it
		.pipe(mocha({reporter: 'nyan'}))
		.pipe(gulp.dest('dist'));
};
