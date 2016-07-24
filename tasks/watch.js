var gulp = require('gulp');

module.exports = function() {
	return gulp
		.watch(this.opts.pkg.clientJs, ['babel:client'])

	// gulp.task('watch', function() {
	//   gulp.watch(paths.src, ['babel'])
	// })
}
