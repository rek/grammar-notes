var gulp = require('gulp'),
	newer = require('gulp-newer'),
	merge = require('merge2');

module.exports = function() {

	// Master directory one, we take all files except those
	// starting with two underscores
	return gulp.src([paths.srcClient + '/*.html'])
		// return merge(
		// check if those files are newer than the same named
		// files in the destination directory
			.pipe(newer(paths.distClient))
		// and if so, copy them
			.pipe(gulp.dest(paths.distClient))
		// Slave directory, same procedure here
		// gulp.src(['./two/**/*', '!./two/**/__*'])
		// 	.pipe(newer('./one'))
		// 	.pipe(gulp.dest('./one'))
		// );
}
