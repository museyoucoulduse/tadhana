var gulp = require('gulp');
var jshint = require('gulp-jshint');
var lint = require('gulp-eslint');
var jscs = require('gulp-jscs');
var inject = require('gulp-inject');
var nodemon = require('gulp-nodemon');
var jsFiles = ['public/js/**/*.js', 'backend/**/*.js'];
gulp.task('style', function () {
    gulp.src(jsFiles).pipe(jshint()).pipe(jshint.reporter('jshint-stylish', {
        verbose: true
    })).pipe(jscs());
});
gulp.task('lint', () => {
    return gulp.src(jsFiles)
        .pipe(lint())
        .pipe(lint.format());
});
gulp.task('inject', function () {
    var wiredep = require('wiredep').stream;
    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: 'public'
    };
    var injectSrc = gulp.src(['./public/css/**/*.css', './public/js/**/*.js'], {
        read: false
    });
    var injectOptions = {
        ignorePath: 'public'
    };
    return gulp.src('./frontend/views/**/*.pug').pipe(wiredep(options)).pipe(inject(injectSrc, injectOptions)).pipe(gulp.dest('./frontend/views'));
});
gulp.task('serve', ['inject'], function () {
    var options = {
        script: 'backend/index.js',
        delayTime: 2,
        //        env: {
        //            'PORT': 3000
        //            , 'IP': 'localhost'
        //        }
        //        ,
        watch: jsFiles
    };
    var count = 0;
    return nodemon(options).on('restart', function () {

        console.log('Restart:', ++count);
    });
});
