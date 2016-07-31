var gulp = require('gulp'),
	pkg = require('./package.json'),
	plugins = require('gulp-load-plugins')();

// require('gulp-task-loader')({
// 	pkg: pkg,
// 	dest: 'dist',
// 	dir: 'tasks'
// });

gulp.task('html', ['clean'], function() {
	return gulp.src(pkg.paths.srcClient + '/*.html')
		.pipe(gulp.dest(pkg.paths.distClient))
})

gulp.task('test', ['clean'], function() {
	return gulp.src(pkg.paths.srcClient + '/**/*.js')
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(pkg.paths.distClient))
		.pipe(plugins.mocha({reporter: 'nyan'}))
})

gulp.task('clean', function() {
	return gulp.src(pkg.paths.distClient)
		.pipe(plugins.clean({force: true}))
		.pipe(gulp.dest(pkg.paths.srcClient))
});

gulp.task('build', ['clean', 'html'], function() {
	return gulp.src(pkg.paths.srcClient + '/**/*.js')
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(pkg.paths.distClient))
});
