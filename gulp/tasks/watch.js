var gulp        = require('gulp');
var path        = require('path');
var config      = require('../config');

gulp.task('watch', function() {
    gulp.watch(path.join(config.styleSrcPath, '/**'), ['less']);
    gulp.watch(path.join(config.imageSrcPath, '/**'), ['images']);
    gulp.watch(path.join(config.libSrcPath, '/**'), ['lib']);
    gulp.watch(path.join(config.scriptSrcPath, '/**'), ['browserify']);
});
