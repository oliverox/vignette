/**
 * @jsx React.DOM
 */

var React = require('react');

var OtherComponent = React.createClass({
    render: function() {
        var thisStyle = {
            color: 'yellowgreen'
        };
        return (
            <div>
                <h1 style={thisStyle}>Other Component</h1>
                <a href="/">go to home</a>
            </div>
        );
    }
});

module.exports = OtherComponent;
