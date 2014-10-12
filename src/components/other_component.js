/**
 * @jsx React.DOM
 */

var React = require('react');

var OtherComponent = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Other Component</h2>
                <a href="/home">go to home</a>
            </div>
        );
    }
});

module.exports = OtherComponent;
