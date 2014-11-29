/**
 * @jsx React.DOM
 */

var React = require('react');

var ErrorComponent = React.createClass({
    render: function() {
        return (
            <div className="error">
                <h1>Error encountered!</h1>
                <a href="/">go to home component</a>
            </div>
        );
    }
});

module.exports = ErrorComponent;
