var changed    = require('gulp-changed');
var gulp       = require('gulp');
var path       = require('path');
var config     = require('../config');
var imagemin   = require('gulp-imagemin');

gulp.task('images', function() {
	var dest = path.join(config.buildPath, config.imageDestPath);

	return gulp.src(path.join(config.imageSrcPath, '**'))
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(imagemin()) // Optimize
		.pipe(gulp.dest(dest));
});
