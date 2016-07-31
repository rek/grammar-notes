var gulp = require('gulp'),
	pkg = require('./package.json'),
	plugins = require('gulp-load-plugins')();

// require('gulp-task-loader')({
// 	pkg: pkg,
// 	dest: 'dist',
// 	dir: 'tasks'
// });

gulp.task('html', function() {
	return gulp.src(pkg.paths.srcClient + '/*.html')
		.pipe(gulp.dest(pkg.paths.distClient))
})

gulp.task('scripts', function() {
})

gulp.task('clean', function() {
	return gulp.src(pkg.paths.distClient)
		.pipe(plugins.clean({force: true}))
		.pipe(gulp.dest(pkg.paths.srcClient))
	// .pipe(autoprefixer('last 2 version'))
	// .pipe(gulp.dest('dist/assets/css'))
	// .pipe(rename({suffix: '.min'}))
	// .pipe(cssnano())
	// .pipe(gulp.dest('dist/assets/css'))
	// .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('test', ['clean'], function() {
	// all concurrent
    // gulp.start('styles', 'scripts', 'images');
    gulp.start('scripts', 'html');
});

// Tasks are in `tasks/`
// require('gulp-task-loader')('tasks');

// gulp.watch(pkg.paths.srcClient + '/*.html', ['copy:html']);
// gulp.watch(allFiles, ['copy:all']);