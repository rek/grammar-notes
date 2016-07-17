var pkg = require('./package.json');

require('gulp-task-loader')({
	pkg: pkg,
	dest: 'dist',
	dir: 'tasks'
});

// Tasks are in `tasks/`
// require('gulp-task-loader')('tasks');

// gulp.watch(pkg.paths.srcClient + '/*.html', ['copy:html']);
// gulp.watch(allFiles, ['copy:all']);