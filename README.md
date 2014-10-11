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
```
brew install nginx
```

###Install gulp
```
npm install -g gulp
```

###Install sails
```
npm install -g sails
```

###Edit nginx.conf (sample file provided in repo)
```
vi /usr/local/etc/nginx/nginx.conf
```

e.g:
```
server {
   listen      8888;
   server_name 0.0.0.0;

   location ^~ /public/ {
       root "~/git/app-boilerplate/.tmp/";
   }

   location / {
       allow all;
       proxy_pass   http://127.0.0.1:8080;
       proxy_http_version 1.1;
       proxy_redirect     off;
       proxy_set_header   Host $host;
       proxy_set_header   X-Real-IP $remote_addr;
       proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header   X-Forwarded-Host $server_name;
       proxy_set_header   Upgrade $http_upgrade;
       proxy_set_header   Connection "upgrade";
   }
}
```


###Install packages
```
npm install
```


Run nginx
---------

###Start nginx
```
nginx
```

Build & Start App
-----------------
Make sure gulp/config.js is configured accordingly.

###Build and serve
```
gulp
```

###Clean build only
```
gulp clean
```

###Build only
```
gulp build
```

###Serve only
```
gulp lift
```

###Build for production
```
gulp prod
```


###Open browser
http://127.0.0.1:8888
