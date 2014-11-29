/**
 * @jsx React.DOM
 */

/**
 * VignetteContainerComponent:
 *      This is the main component that loads a list of vignette items
 */

var React = require('react'),
    Backbone = require('exoskeleton'),
    PageControlComponent = React.createFactory(require('./page_control_component')),
    NavigationComponent = React.createFactory(require('./navigation_component')),
    VignetteComponent = React.createFactory(require('./vignette_component'));

var VignetteContainerComponent = React.createClass({
    getInitialState: function() {
        return {
            current: 0
        }
    },
    handleNavigationClick: function(evt) {
        console.log('nav:clicked', evt, evt.target.className);
        if (evt.target.className.indexOf('right') >= 0) {
            var cur = this.state.current;
            this.setState({
                current: ++cur
            });
        }
    },
    render: function() {
        console.log('*VignetteContainerComponent* render()', this.props, this.state);
        var length = this.props.model.get('items').length;
        // var items = this.props.data.items.map((function(item, index) {
        //     return (
        //         <VignetteComponent key={index} index={index} item={item} current={this.state.current} />
        //     );
        // }).bind(this));
        return (
            <div className="vignette-container">
                <VignetteComponent items={this.props.model.get('items')} current={this.state.current} />
                <PageControlComponent current={this.state.current} length={length} />
                <NavigationComponent current={this.state.current} length={length} handleClick={this.handleNavigationClick} />
            </div>
        );
    }
});

module.exports = VignetteContainerComponent;
