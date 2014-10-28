/**
 * @jsx React.DOM
 */

var React = require('react');
// var Velocity = require("../../node_modules/velocity-animate/velocity");

var OtherComponent = React.createClass({
    componentDidMount: function() {
        // var content = document.getElementById("scroller-content");
        
    },
    render: function() {
        // var thisStyle = {
        //     color: 'yellowgreen'
        // };
        // Velocity(document.body, { opacity: 0.5 });

		var contentWidth = 1536;
		var contentHeight = 1024;

		// Initialize layout
		// var container = document.getElementById("scroller-container");
		var content = document.getElementById("scroller-content");

		content.style.width = contentWidth + "px";
		content.style.height = contentHeight + "px";

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
