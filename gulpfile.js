const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('default', () => {
    return gulp.src('server/test.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({reporter: 'nyan'}));
});