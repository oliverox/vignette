/**
 * @jsx React.DOM
 */

var React = require('react');

var NavigationComponent = React.createClass({
    render: function() {
        return (
            <div className="nav">
                <div onClick={this.props.handleClick} className="left-arrow">LEFT</div>
                <div onClick={this.props.handleClick} className="right-arrow">RIGHT</div>
            </div>
        );
    }
});

module.exports = NavigationComponent;
