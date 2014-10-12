// var io = require('socket.io-browserify');
// var $ = require('jquery');
// var _ = require('underscore');
var Backbone = require('exoskeleton');
var React = require('react');
var Router = require('./router');

var Application = (function () {

    function Application (options) {
        this.initialize(options);
    }

    Application.prototype.initialize = function (options) {
        console.log('Application#initialize');
        if (options === null) {
            options = {};
        }
        if (this.started) {
            throw new Error('Application#initialize: App was already started.');
        }
        this.title = options.title || "";
        this.appContainerElement = document.getElementById('app-container');

        if (document.addEventListener) {
            var app = this;
            document.addEventListener("DOMContentLoaded", function() {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false );
                app.initRouter(options.routes);
            }, false );
        }

        // initialize touch events on React components if necessary
        // React.initializeTouchEvents(true);

        return this.start();
    };

    Application.prototype.initRouter = function (routes) {
        console.log('Application#initRouter');
        var pushState = true;
        this.router = Router.start(this.appContainerElement, routes, pushState);
    };

    Application.prototype.start = function () {
        console.log('Application#start');
        this.started = true;
    };

    return Application;
})();

module.exports = Application;
