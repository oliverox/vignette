/**
 * @jsx React.DOM
 */

var React = require('react');

var PageControlComponent = React.createClass({
    render: function() {
        var dots = [];
        for (var i=0; i<this.props.length; i++) {
            if (this.props.current === i) {
                dots.push(<div key={i} className='dot current' />);
            }
            else {
                dots.push(<div key={i} className='dot' />);
            }
        }

        return (
            <div className="page-control">
                {dots}
            </div>
        );
    }
});

module.exports = PageControlComponent;
