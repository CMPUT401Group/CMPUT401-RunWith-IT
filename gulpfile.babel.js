'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('copy-r-modules', () => {
    return gulp
        .src('r-modules/**/*')
        .pipe(gulp.dest('dist/r-modules'));
});

gulp.task('default', ['copy-r-modules'], () => {
    return gulp
        .src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/'));
});