'use strict'

let gulp = require('gulp')
let pkg = require('./package.json')
let merge = require('merge-stream')
let plugins = require('gulp-load-plugins')()
let exec = require('child_process').exec

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
		.pipe(plugins.jspm({inject: true}))
		.pipe(plugins.rename('build.js'))
		.pipe(gulp.dest('./jspm_packages/'))
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
	gulp.watch('styles/*.css', gulp.series('styles'));
	gulp.watch('index.dev.html', gulp.series('html-dev'));
});

gulp.task('build', gulp.series('html-dev', 'styles'))

gulp.task('build-prod', gulp.series('html-prod', 'styles'))

gulp.task('server', function(callback) {
	exec('node server.js', function(err, stdout, stderr) {
		console.log(stdout)
		console.log(stderr)
		callback(err)
	})
})

gulp.task('dev',
	gulp.series('build', gulp.parallel('watch', 'server'))
)

// var spawn = require('child_process').spawn;
gulp.task('default', gulp.series('build', 'watch'), function(callback) {
	// spawn('node', ['devServer.js'], {stdio: 'inherit'});

	callback()
});

gulp.task('test', gulp.series('build'), function() {
	return gulp.src('test/**/test/*.js')
		.pipe(plugins.mocha({reporter: 'nyan'}))
})
