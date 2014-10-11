App Boilerplate
===============
A boilerplate Sails application with the following architecture:

###Framework
Sails.js

###Build tool
Gulp.js

###Template engine
EJS

###Web server
Nginx for static files and Express for single-page-app routing



Setup
-----

###Install nginx
brew install nginx

###Install gulp
npm install -g gulp

###Edit nginx.conf (sample file provided in repo)
vi /usr/local/etc/nginx/nginx.conf

###Install packages
npm install



Run nginx
---------

###Start nginx
nginx

###Open browser
http://localhost:8888


Build App
---------
Make sure gulp/config.js is configured accordingly.

###Build and serve
gulp

###Clean build only
gulp clean

###Build only
gulp build

###Serve only
gulp lift

###Build for production
Switch build parameter in config.js to 'prod'
gulp build
