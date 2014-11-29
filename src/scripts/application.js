/**
* @jsx React.DOM
*/

var React = require('react');
var RouterComponent = React.createFactory(require('../components/router_component'));

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

    Application.prototype.initRouter = function() {
        console.log('Application#initRouter');
        React.render(
            <RouterComponent pushState={true}/>,
            this.appContainerElement
        );
    };

    Application.prototype.start = function () {
        console.log('Application#start');
        this.started = true;
    };

    return Application;
})();

module.exports = Application;
