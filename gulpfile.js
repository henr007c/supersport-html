'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');
const uglify = require('gulp-uglify');

gulp.task('build-css', function() {
	return gulp.src('source/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('public/css'))
	    .pipe(connect.reload());
});

gulp.task('build-js', function() {
	return gulp.src('source/js/*.js')
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(gulp.dest('public/js'))
		.pipe(connect.reload());
});

gulp.task('build-views', function() {
	gulp.src('public/**/*.html')
		.pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('watch', ['build-css'], function() {
	gulp.watch('source/scss/**/*.scss', ['build-css']);
	gulp.watch('source/js/*.js', ['build-js']);
	gulp.watch('public/**/*.html', ['build-views']);
})

gulp.task('default', ['watch', 'connect']);