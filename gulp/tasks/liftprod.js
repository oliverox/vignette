var gulp    = require('gulp');
var config  = require('../config');
var sails   = require('sails');

gulp.task('liftprod', function(){
    config.environment = 'production';
    config.verbose = false;
    sails.lift(config);
});
