const gulp = require('gulp');
const babel = require('gulp-babel');

module.exports = function() {
	return gulp
		.src(this.opts.pkg.paths.clientJs)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
};

 // // Copy html
 // gulp.src(paths.html, {cwd: bases.app})
 // .pipe(gulp.dest(bases.dist));

 // // Copy styles
 // gulp.src(paths.styles, {cwd: bases.app})
 // .pipe(gulp.dest(bases.dist + 'styles'));