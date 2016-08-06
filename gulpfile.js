var gulp = require('gulp'),
	pkg = require('./package.json'),
	merge = require('merge-stream'),
	plugins = require('gulp-load-plugins')();

gulp.task('html', function() {
	return gulp.src(pkg.paths.srcClient + '/*.html')
		.pipe(gulp.dest(pkg.paths.distClient))
})

gulp.task('styles', function() {
	var bootstrap = gulp.src(pkg.paths.bower + '/bootstrap/dist/css/bootstrap.min.css')
		.pipe(gulp.dest(pkg.paths.distClient + '/styles'))

	var styles = gulp.src(pkg.paths.srcClient + '/styles/*.css')
		.pipe(gulp.dest(pkg.paths.distClient + '/styles'))

	return merge(bootstrap, styles);
})

gulp.task('js', function() {
	var client = gulp.src(pkg.paths.srcClient + '/**/*.js')
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(pkg.paths.distClient))

	var server = gulp.src(pkg.paths.srcServer + '/**/*.js')
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(pkg.paths.distServer))

	return merge(client, server);
})

gulp.task('test', ['js'], function() {
	return gulp.src(pkg.paths.dist + '/**/test/*.js')
		.pipe(plugins.mocha({reporter: 'nyan'}))
})

gulp.task('clean', function() {
	return gulp.src(pkg.paths.distClient)
		.pipe(plugins.clean({force: true}))
		.pipe(gulp.dest(pkg.paths.srcClient))
});

gulp.task('build', ['js', 'html', 'styles'], function() {
});

gulp.task('watch', function() {
  gulp.watch(pkg.paths.srcClient + '/styles/*.css', ['styles']);
  gulp.watch(pkg.paths.srcClient + '/*.html', ['html']);
  gulp.watch(pkg.paths.srcClient + '/*.js', ['js']);
  gulp.watch(pkg.paths.srcServer + '/*.js', ['js']);
});