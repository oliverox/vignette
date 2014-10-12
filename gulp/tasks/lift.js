var gulp    = require('gulp');
var config  = require('../config');
var sails   = require('sails');

gulp.task('lift', function() {
    sails.lift(config);
});
