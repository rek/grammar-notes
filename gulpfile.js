let gulp = require('gulp'),
	pkg = require('./package.json'),
	merge = require('merge-stream'),
	plugins = require('gulp-load-plugins')();

gulp.task('html-prod', function() {
	let html = gulp.src('index.prod.html')
		.pipe(plugins.rename('index.html'))
		.pipe(gulp.dest('.'))

	return merge(html);
})

gulp.task('html-dev', function() {
	let html = gulp.src('index.dev.html')
		.pipe(plugins.rename('index.html'))
		.pipe(gulp.dest('.'))

	return merge(html);
})

gulp.task('styles', function() {
	let bootstrap = gulp.src(pkg.paths.bower + '/bootstrap/dist/css/bootstrap*.css')
		.pipe(gulp.dest('styles'))

	// let styles = gulp.src(pkg.paths.srcClient + '/styles/*.css')
	// 	.pipe(gulp.dest(pkg.paths.distClient + '/styles'))

	// return merge(bootstrap, styles);
	return merge(bootstrap);
})

gulp.task('jspm', function() {
	// return gulp.src(pkg.paths.jspm + '/*')
		// .pipe(gulp.dest(pkg.paths.distClient + '/scripts/' + pkg.paths.jspm))
	return gulp.src('scripts/app/app.js')
		.pipe(plugins.jspm())
		.pipe(gulp.dest('./scripts'))

})

gulp.task('js', function() {
	let client = gulp.src('scripts/app/app.js')
		// .pipe(plugins.changed('scripts'))
		.pipe(plugins.jspm({
			verbose: false,
			bundles: [
				{
					src: 'app',
					dst: 'app.js'
				}
			],
			// bundleOptions: {
			// 	minify: true,
			// 	mangle: true
			// }
		}))
		.pipe(gulp.dest('scripts'));

	// let jspmFiles = gulp.src(pkg.paths.jspm + '/*')
	// 	.pipe(plugins.changed(pkg.paths.distClient + '/scripts'))
	// 	.pipe(gulp.dest(pkg.paths.distClient + '/scripts/' + pkg.paths.jspm))
	// 	.pipe(gulp.dest(pkg.paths.distClient + '/scripts'))

	// let client = gulp.src(pkg.paths.srcClient + '/**/*.js')
		// .pipe(plugins.babel({
		// 	presets: ['es2015']
		// }))
		// .pipe(gulp.dest(pkg.paths.distClient + '/'))

	return merge(client);
})

gulp.task('test', ['build'], function() {
	return gulp.src('test/**/test/*.js')
		.pipe(plugins.mocha({reporter: 'nyan'}))
})

gulp.task('clean', function() {
	let styles = gulp.src('styles/bootstrap*.css')
		.pipe(plugins.clean({force: true}))
		.pipe(gulp.dest('styles'))

	let html = gulp.src('index.html')
		.pipe(plugins.clean({force: true}))
		// .pipe(gulp.dest(''))

	return merge(html, styles);
});

gulp.task('watch', function() {
	gulp.watch('styles/*.css', ['styles']);
	gulp.watch('index.dev.html', ['html-dev']);
});

gulp.task('build', ['html-dev', 'styles'], function() {
});

gulp.task('build-prod', ['html-prod', 'styles'], function() {
});

// var spawn = require('child_process').spawn;
gulp.task('default', ['build', 'watch'], function() {
	// spawn('node', ['devServer.js'], {stdio: 'inherit'});
});
