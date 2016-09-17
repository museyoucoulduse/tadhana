var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var inject = require('gulp-inject');
var nodemon = require('gulp-nodemon');
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
    };
    var injectSrc = gulp.src(['./public/css/**/*.css', './public/js/**/*.js'], {
        read: true
    });
    var injectOptions = {
        ignorePath: 'public'
    };
    return gulp.src('./public/index.html').pipe(wiredep(options)).pipe(inject(injectSrc, injectOptions)).pipe(gulp.dest('./public/'));
});
gulp.task('serve', ['style', 'inject'], function () {
    var options = {
        script: 'backend/index.js'
        , delayTime: 2
        , env: {
            'PORT': 3000
            , 'IP': 'localhost'
        }
        , watch: jsFiles
    };
    count = 0;
    return nodemon(options).on('restart', function () {

        console.log('Restart:', ++count);
    });
});
