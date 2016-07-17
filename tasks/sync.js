var gulp = require('gulp');
var newer = require('gulp-newer');
var merge = require('merge2');
var paths = require('../paths.js');

// console.log(paths)

module.exports = function() {

	return
		// return merge(
			// Master directory one, we take all files except those
			// starting with two underscores
			gulp.src([paths.srcClient + '/*.html'])
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