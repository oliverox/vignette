/**
 * @jsx React.DOM
 */

var React = require('react');

var TitleComponent = React.createClass({
    render: function() {
        return (
            <div className={(this.props.current > -1) ? "title invisible" : "title"}>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
});

module.exports = TitleComponent;
