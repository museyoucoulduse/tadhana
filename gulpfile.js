var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var jsFiles = ['*.js', 'backend/**/*.js'];
gulp.task('style', function () {
    gulp.src(jsFiles).pipe(jshint()).pipe(jshint.reporter('jshint-stylish', {
        verbose: true
    })).pipe(jscs());
});
gulp.task('inject', function () {
    var wiredep = require('wiredep').stream;
    var options = {
        bowerJson: require('./bower.json')
        , directory: './public/lib'
    }
    return gulp.src('./public/index.html').pipe(wiredep(options)).pipe(gulp.dest('./public/'))
})