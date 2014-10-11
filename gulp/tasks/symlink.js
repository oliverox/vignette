var gulp = require('gulp');
var path = require('path');
var config = require('../config');
var symlink = require('gulp-symlink');

// TODO: concatenation of all lib js files here
gulp.task('symlink', function() {
    return gulp.src(path.join(config.buildPath, 'public'))
            .pipe(symlink(config.tmpPath));
});
