var less         = require('gulp-less');
var gulp         = require('gulp');
var path         = require('path');
var config       = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('less', function() {
    return gulp.src(path.join(config.styleSrcPath, 'less/*.less'))
        .pipe(less())
        .pipe(gulp.dest(path.join(config.buildPath, config.styleDestPath)))
        .on('error', handleErrors);
});
