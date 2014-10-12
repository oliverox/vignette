/**
 * @jsx React.DOM
 */
 
var React = require('react');

var HomeComponent = React.createClass({
    render: function() {
        return (
            <div className="home">
                <h1>Home Component</h1>
            </div>
        );
    }
});

module.exports = HomeComponent;
