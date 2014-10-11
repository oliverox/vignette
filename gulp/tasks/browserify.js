/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var browserify      = require('browserify');
var watchify        = require('watchify');
var bundleLogger    = require('../util/bundleLogger');
var config          = require('../config');
var gulp            = require('gulp');
var handleErrors    = require('../util/handleErrors');
var source          = require('vinyl-source-stream');
var path            = require('path');

gulp.task('browserify', function() {

    var bundleMethod = config.isWatching ? watchify : browserify;

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
            // Enable source maps!
            .bundle()
            // Report compile errors
            .on('error', handleErrors)
            // Use vinyl-source-stream to make the
            // stream gulp compatible. Specifiy the
            // desired output filename here.
            .pipe(source(config.appStartFileName))
            // Specify the output destination
            .pipe(gulp.dest(path.join(config.buildPath, config.scriptDestPath)))
            // Log when bundling completes!
            .on('end', bundleLogger.end);
    };

    if (config.isWatching) {
        // Rebundle with watchify on changes.
        bundler.on('update', bundle);
    }

    return bundle();
});
