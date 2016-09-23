let gulp = require('gulp'),
	pkg = require('./package.json'),
	merge = require('merge-stream'),
	plugins = require('gulp-load-plugins')();

gulp.task('html', function() {
	let html = gulp.src(pkg.paths.srcClient + '/*.html')
		.pipe(gulp.dest(pkg.paths.distClient))

	let favicon = gulp.src(pkg.paths.srcClient + '/*.ico')
		.pipe(gulp.dest(pkg.paths.distClient))

	return merge(html, favicon);
})

gulp.task('styles', function() {
	let bootstrap = gulp.src(pkg.paths.bower + '/bootstrap/dist/css/bootstrap*.css')
		.pipe(gulp.dest(pkg.paths.distClient + '/styles'))

	let styles = gulp.src(pkg.paths.srcClient + '/styles/*.css')
		.pipe(gulp.dest(pkg.paths.distClient + '/styles'))

	return merge(bootstrap, styles);
})

gulp.task('jspm', function() {
	return gulp.src(pkg.paths.jspm + '/*')
		.pipe(gulp.dest(pkg.paths.distClient + '/scripts/' + pkg.paths.jspm))
})

gulp.task('js', function() {
	// let client = gulp.src(pkg.paths.srcClient + '/scripts/app/app.js')
	// 	.pipe(plugins.changed(pkg.paths.distClient + '/scripts'))
		// .pipe(plugins.jspm({
		// 	verbose: false,
		// 	bundles: [
		// 		{
		// 			src: 'app',
		// 			dst: 'app.js'
		// 		}
		// 	],
		// 	// bundleOptions: {
		// 	// 	minify: true,
		// 	// 	mangle: true
		// 	// }
		// }))
		// .pipe(gulp.dest(pkg.paths.distClient + '/scripts'));

	// let jspmFiles = gulp.src(pkg.paths.jspm + '/*')
	// 	.pipe(plugins.changed(pkg.paths.distClient + '/scripts'))
	// 	.pipe(gulp.dest(pkg.paths.distClient + '/scripts/' + pkg.paths.jspm))
	// 	.pipe(gulp.dest(pkg.paths.distClient + '/scripts'))

	let client = gulp.src(pkg.paths.srcClient + '/**/*.js')
		// .pipe(plugins.babel({
		// 	presets: ['es2015']
		// }))
		.pipe(gulp.dest(pkg.paths.distClient + '/'))

	let server = gulp.src(pkg.paths.srcServer + '/**/*.js')
		.pipe(plugins.changed(pkg.paths.distServer))
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(pkg.paths.distServer))

	return merge(client, server);
	// return merge(client, server, jspmFiles);
})

gulp.task('test', ['build'], function() {
	return gulp.src(pkg.paths.dist + '/**/test/*.js')
		.pipe(plugins.mocha({reporter: 'nyan'}))
})

gulp.task('clean', function() {
	let client = gulp.src(pkg.paths.distClient)
		.pipe(plugins.clean({force: true}))
		.pipe(gulp.dest(pkg.paths.srcClient))

	let server = gulp.src(pkg.paths.distServer)
		.pipe(plugins.clean({force: true}))
		.pipe(gulp.dest(pkg.paths.srcServer))

	return merge(client, server);
});

gulp.task('build', ['html', 'js', 'styles'], function() {
});

gulp.task('default', ['start'], function() {

});

gulp.task('watch', function() {
	// client:
	gulp.watch(pkg.paths.srcClient + '/styles/*.css', ['styles']);
	gulp.watch(pkg.paths.srcClient + '/*.html', ['html']);
	// gulp.watch(pkg.paths.srcClient + '/*.js');
	gulp.watch(pkg.paths.srcClient + '/*.js', ['js']);

	// server:
	gulp.watch(pkg.paths.srcServer + '/*.js', ['js']);
	gulp.watch(pkg.paths.srcServer + '/**/*.js', ['js']);
});

gulp.task('nodemon', function() {
	plugins.env({
		file: '.env',
		type: 'ini'
	})

	plugins.nodemon({
		script: pkg.paths.distServer + '/server.js',
		ext: 'js html',
		delay: 3000,
		watch: [
			'src/server/*.js',
			'src/server/**/*.js',
		],
		env: {
			'NODE_ENV': 'development'
		}
	})
})

gulp.task('start', ['watch', 'nodemon'], function() {

})
