/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var browserify      = require('browserify');
var reactify        = require('reactify');
var watchify        = require('watchify');
var bundleLogger    = require('../util/bundleLogger');
var config          = require('../config');
var gulp            = require('gulp');
var handleErrors    = require('../util/handleErrors');
var source          = require('vinyl-source-stream');
var path            = require('path');

gulp.task('browserify', function() {

    var bundleMethod = browserify;

    var bundler = bundleMethod({
        // Specify the entry point of your app
        entries: [path.join(config.scriptSrcPath, config.appStartFileName)],
        // Add file extentions to make optional in your requires
        extensions: ['.hbs'],
        debug: true
    });

    var bundle = function() {
        // Log when bundling starts
        bundleLogger.start();

        return bundler
            .transform(reactify)
            // Enable source maps!
            .bundle()
            .on('error', handleErrors)
            .pipe(source(config.appStartFileName))
            .pipe(gulp.dest(path.join(config.buildPath, config.scriptDestPath)))
            .on('end', bundleLogger.end);
    };

    bundler = watchify(bundler);
    bundler.on('update', function(){
        bundle();
    });

    return bundle();
});
