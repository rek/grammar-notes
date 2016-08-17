let gulp = require('gulp'),
	pkg = require('./package.json'),
	merge = require('merge-stream'),
	plugins = require('gulp-load-plugins')();

gulp.task('html', function() {
	return gulp.src(pkg.paths.srcClient + '/*.html')
		.pipe(gulp.dest(pkg.paths.distClient))
})

gulp.task('styles', function() {
	let bootstrap = gulp.src(pkg.paths.bower + '/bootstrap/dist/css/bootstrap*.css')
		.pipe(gulp.dest(pkg.paths.distClient + '/styles'))

	let styles = gulp.src(pkg.paths.srcClient + '/styles/*.css')
		.pipe(gulp.dest(pkg.paths.distClient + '/styles'))

	return merge(bootstrap, styles);
})

gulp.task('jss', function() {
	return gulp.src(pkg.paths.jspm + '/*')
		.pipe(gulp.dest(pkg.paths.distClient + '/scripts/' + pkg.paths.jspm))
})

gulp.task('js', function() {
	let client = gulp.src(pkg.paths.srcClient + '/scripts/app/app.js')
		.pipe(plugins.jspm({verbose: false}))
		.pipe(gulp.dest(pkg.paths.distClient + '/scripts'));

	let jspmFiles = gulp.src(pkg.paths.jspm + '/*')
		.pipe(gulp.dest(pkg.paths.distClient + '/scripts/' + pkg.paths.jspm))
		.pipe(gulp.dest(pkg.paths.distClient + '/scripts'))
	// let client = gulp.src(pkg.paths.srcClient + '/**/*.js')
	// 	.pipe(plugins.babel({
	// 		presets: ['es2015']
	// 	}))
		// .pipe(gulp.dest(pkg.paths.distClient + '/scripts'))

	let server = gulp.src(pkg.paths.srcServer + '/**/*.js')
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(pkg.paths.distServer))

	return merge(client, server, jspmFiles);
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

gulp.task('build', ['html', 'js', 'styles'], function() {
});

gulp.task('run', ['build'], function() {

});

gulp.task('watch', function() {
	gulp.watch(pkg.paths.srcClient + '/styles/*.css', ['styles']);
	gulp.watch(pkg.paths.srcClient + '/*.html', ['html']);
	gulp.watch(pkg.paths.srcClient + '/*.js', ['js']);
	gulp.watch(pkg.paths.srcServer + '/*.js', ['js']);
});

gulp.task('start', function () {
	plugins.env({
		file: '.env',
		type: 'ini'
	})

	plugins.nodemon({
		script: pkg.paths.distServer + '/server.js',
		ext: 'js html',
		env: {
			'NODE_ENV': 'development'
		}
	})
})
