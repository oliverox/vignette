/**
* @jsx React.DOM
*/


var Backbone = require('exoskeleton'),
    React = require('react'),
    _router = null,
    _started = false,

    // models
    VignetteModel = require('../models/vignette_model'),

    // components
    HomeComponent = React.createFactory(require('./home_component')),
    OtherComponent = React.createFactory(require('./other_component')),
    ErrorComponent = React.createFactory(require('./error_component')),
    VignetteContainerComponent = React.createFactory(require('./vignette_container_component'));

var RouterComponent = React.createClass({
    getInitialState: function() {
        return {
            page: <HomeComponent />
        }
    },
    componentWillMount: function() {
        var Router = Backbone.Router.extend({
            routes: {
                ':vid': this.routeVignette,
                'other': this.routeOther,
                '': this.routeHome
            }
        });
        _router = new Router();
        if (!_started) {
            var pushState = !!this.props.pushState;
            Backbone.history.start({ pushState: pushState });
            _started = true;
        }
        if (Backbone.history && Backbone.history._wantsPushState) {
            document.getElementsByTagName('html')[0].addEventListener("click", function(evt) {
                if (evt.srcElement.tagName === 'A') {
                    evt.stopPropagation();
                    evt.preventDefault();
                    Backbone.history.navigate(evt.srcElement.pathname, true);
                }
            });
        }
    },
    render: function() {
        return this.state.page;
    },
    routeHome: function() {
        console.log('*routeHome()*');
        this.setState({
            page: <HomeComponent />
        });
    },
    routeVignette: function(vid) {
        var model = new VignetteModel();
        var fetchPromise = model.fetch();
        fetchPromise.done((function(data) {
            console.log('model data=', data);
            this.setState({
                page: <VignetteContainerComponent vid={vid} model={model} />
            })
        }).bind(this)).fail((function() {
            this.setState({
                page: <ErrorComponent />
            });
        }).bind(this));

    },
    routeOther: function() {
        console.log('*routeOther()*');
        this.setState({
            page: <OtherComponent />
        });
    }
});

module.exports = RouterComponent;
