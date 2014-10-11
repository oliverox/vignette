var gulp = require('gulp');

gulp.task('buildprod', ['browserifyprod', 'lib', 'less', 'images', 'symlink']);
