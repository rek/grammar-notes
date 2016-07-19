var gulp = require('gulp');
var clean = require('gulp-clean');

module.exports = function() {
// gulp.watch(pkg.paths.srcClient + '/*.html', ['copy:html']);
// gulp.watch(allFiles, ['copy:all']);

	return gulp
		.watch(this.opts.pkg.paths.srcClient + '/*.html', ['copy:html'])
		.watch(this.opts.pkg.paths.srcClient + '/*.js', ['babel'])
};

module.exports.dependencies = ['clean'];