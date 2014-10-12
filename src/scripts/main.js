var Application = require('./application');
var routes = require('./routes');

var app = new Application({
    title: "Boilerplate App",
    routes: routes
});

app.start();
