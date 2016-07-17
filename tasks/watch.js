var gulp = require('gulp');
var watch = require('gulp-watch');
var paths = require('../paths.js');

module.exports = function() {

	return gulp.watch(paths.server, ['babel'])
	// gulp.task('watch', function() {
	//   gulp.watch(paths.src, ['babel'])
	// })
}
