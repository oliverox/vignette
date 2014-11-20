/**
 * @jsx React.DOM
 */

var React = require('react');

var HomeComponent = React.createClass({
    render: function() {
        return (
            <div className="home">
                <h1>Home Component-1</h1>
                <a href="/other">go to other component</a>
            </div>
        );
    }
});

module.exports = HomeComponent;
