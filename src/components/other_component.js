/**
 * @jsx React.DOM
 */

var React = require('react');
// var Velocity = require("../../node_modules/velocity-animate/velocity");

var OtherComponent = React.createClass({
    render: function() {
        // var thisStyle = {
        //     color: 'yellowgreen'
        // };
        // Velocity(document.body, { opacity: 0.5 });

        return (
            <div id='scroller-container'>
                <div className="scroller-content">
                    <img src="../../images/004.jpg"/>
                </div>
            </div>
        );
    }
});

module.exports = OtherComponent;
