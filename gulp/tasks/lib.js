var gulp = require('gulp');
var path = require('path');
var config = require('../config');

// TODO: concatenation of all lib js files here
gulp.task('lib', function() {
    return gulp.src(path.join(config.libSrcPath, '**'))
            .pipe(gulp.dest(path.join(config.buildPath, config.libDestPath)));
});
