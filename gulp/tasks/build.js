var gulp = require('gulp');

gulp.task('build', ['browserify', 'lib', 'less', 'images']);
