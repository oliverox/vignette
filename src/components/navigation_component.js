/**
 * @jsx React.DOM
 */

var React = require('react');

var NavigationComponent = React.createClass({
    componentDidMount: function() {
        this.getDOMNode().addEventListener('touchend', (function(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            this.props.handleClick(evt);
        }).bind(this));
    },

    render: function() {
        var showPrevButton = true,
            showNextButton = true;
        var navButtons = [];
        if (this.props.current > -1) {
            showPrevButton = false;
            navButtons.push(<div onClick={this.props.handleClick} className="left-arrow">LEFT</div>);
        }
        if (this.props.current < this.props.length - 1) {
            navButtons.push(<div onClick={this.props.handleClick} className="right-arrow svg-ic_chevron_right_24px-dims svg-ic_chevron_right_24px"></div>);
        }
        return (
            <div className="nav">
                {navButtons}
            </div>
        );
    }
});

module.exports = NavigationComponent;
