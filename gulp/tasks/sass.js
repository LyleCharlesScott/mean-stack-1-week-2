var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;

gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});
