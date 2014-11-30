/**
 * @jsx React.DOM
 */

/**
 * VignetteContainerComponent:
 *      This is the main component that loads a list of vignette items
 */

var React = require('react'),
    Backbone = require('exoskeleton'),
    TitleComponent = React.createFactory(require('./title_component')),
    PageControlComponent = React.createFactory(require('./page_control_component')),
    NavigationComponent = React.createFactory(require('./navigation_component')),
    VignetteComponent = React.createFactory(require('./vignette_component'));

var VignetteContainerComponent = React.createClass({
    getInitialState: function() {
        return {
            current: -1     // cover page
        }
    },
    handleNavigationClick: function(evt) {
        console.log('nav:clicked', evt, evt.target.className);
        var cur = this.state.current;
        if (evt.target.className.indexOf('right') >= 0) {
            if (cur < this.props.model.get('items').length - 1) {
                cur = cur + 1;
            }
        }
        else if (evt.target.className.indexOf('left') >= 0) {
            if (cur > -1) {
                cur = cur - 1;
            }
        }
        if (cur !== this.state.current) {
            this.setState({
                current: cur
            });
        }
    },
    render: function() {
        console.log('*VignetteContainerComponent* render()', this.props, this.state);
        var length = this.props.model.get('items').length;
        return (
            <div className="vignette-container">
                <VignetteComponent items={this.props.model.get('items')} current={this.state.current} />
                <PageControlComponent current={this.state.current} length={length} />
                <TitleComponent title={this.props.model.get('title')} position={this.props.model.get('titlePosition')} current={this.state.current} />
                <NavigationComponent current={this.state.current} length={length} handleClick={this.handleNavigationClick} />
            </div>
        );
    }
});

module.exports = VignetteContainerComponent;
