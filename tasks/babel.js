const gulp = require('gulp');
const babel = require('gulp-babel');

module.exports = function() {
	return gulp.src('src/server/test.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
};
