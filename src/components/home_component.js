/**
 * @jsx React.DOM
 */

var React = require('react');
var Velocity = require("../../node_modules/velocity-animate/velocity");

var HomeComponent = React.createClass({
    render: function() {
        Velocity(document.body, { opacity: 1 });

        return (
            <div className="home">
                <h1>Home Component</h1>
                <a href="/other">go to other component</a>
            </div>
        );
    }
});

module.exports = HomeComponent;
