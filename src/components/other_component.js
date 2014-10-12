/**
 * @jsx React.DOM
 */

var React = require('react');

var OtherComponent = React.createClass({
    render: function() {
        var thisStyle = {
            color: 'red'
        };
        return (
            <div>
                <h3 style={thisStyle}>Other Component</h3>
                <a href="/">go to home</a>
            </div>
        );
    }
});

module.exports = OtherComponent;
