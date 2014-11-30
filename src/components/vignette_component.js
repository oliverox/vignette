/**
 * @jsx React.DOM
 */

var React = require('react');
var Animate = require('../lib/Animate');
var Scroller = require('../lib/Scroller');

var VignetteComponent = React.createClass({

    _initialized: false,

    componentWillMount: function() {
        var docStyle = document.documentElement.style;
        var engine;

        if (window.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
            engine = 'presto';
        } else if ('MozAppearance' in docStyle) {
            engine = 'gecko';
        } else if ('WebkitAppearance' in docStyle) {
            engine = 'webkit';
        } else if (typeof navigator.cpuClass === 'string') {
            engine = 'trident';
        }

        var vendorPrefix = {
            trident: 'ms',
            gecko: 'Moz',
            webkit: 'Webkit',
            presto: 'O'
        }[engine];

        var helperElem = document.createElement("div");
        var undef;
        var perspectiveProperty = vendorPrefix + "Perspective";
        var transformProperty = vendorPrefix + "Transform";

        if (helperElem.style[perspectiveProperty] !== undef) {
            this.render3d = (function(left, top, zoom) {
                this.content.style[transformProperty] = 'translate3d(' + (-left) + 'px,' + (-top) + 'px,0) scale(' + zoom + ')';
            }).bind(this);
        } else if (helperElem.style[transformProperty] !== undef) {
            this.render3d = (function(left, top, zoom) {
                this.content.style[transformProperty] = 'translate(' + (-left) + 'px,' + (-top) + 'px) scale(' + zoom + ')';
            }).bind(this);
        } else {
            this.render3d = (function(left, top, zoom) {
                this.content.style.marginLeft = left ? (-left/zoom) + 'px' : '';
                this.content.style.marginTop = top ? (-top/zoom) + 'px' : '';
                this.content.style.zoom = zoom || '';
            }).bind(this);
        }
    },

    componentDidMount: function() {
        // Settings
        var cur = (this.props.current === -1) ? 0 : this.props.current;
        var contentWidth = this.props.items[cur].width;
        var contentHeight = this.props.items[cur].height;

        // Initialize layout
        this.container = document.getElementById("container");
        this.content = document.getElementById("content");

        this.content.style.width = "100%";
        this.content.style.height = "100%";


        var imgElem = document.getElementById('background');

        imgElem.onload = (function() {
            console.debug('*VignetteComponent*, componentDidMount(), imgElem.onload()', imgElem.width, imgElem.height);
            imgElem.classList.remove('invisible');

            if (this._initialized === false) {
                this.initializeScroller(imgElem);
            }
            else {
                this.reflow();
            }
        }).bind(this);
    },

    reflow: function() {
        var cur = (this.props.current === -1) ? 0 : this.props.current;
        var clientWidth = this.container.clientWidth;
        var clientHeight = this.container.clientHeight;
        var contentWidth = this.props.items[cur].width / (this.props.items[cur].height / clientHeight);
        var contentHeight = clientHeight;
        console.debug('clientWidth', clientWidth);
        console.debug('clientHeight', clientHeight);
        console.debug('contentWidth', contentWidth, this.props.items[cur].width);
        console.debug('contentHeight', contentHeight, this.props.items[cur].height);
        this.scroller.setDimensions(clientWidth, clientHeight, contentWidth, contentHeight);
        if (contentWidth > clientWidth) {
            this.scroller.scrollTo((contentWidth - clientWidth) / 2, 0);
        }
    },

    initializeScroller: function(imgElem) {
        // Intialize layout
        var clientWidth = 0;
        var clientHeight = 0;

        // Initialize Scroller
        this.scroller = new Scroller(this.render3d, {
            zooming: true,
            scrollingY: false
        });

        this._initialized = true;
        this._imgElem = imgElem;

        var rect = this.container.getBoundingClientRect();
        console.log('will set position to:', rect.left, this.container.clientLeft, rect.top, this.container.clientTop);
        this.scroller.setPosition(rect.left + this.container.clientLeft, rect.top + this.container.clientTop);

        window.addEventListener("resize", this.reflow, false);
        this.reflow();

        if ('ontouchstart' in window) {

            this.container.addEventListener("touchstart", (function(e) {
                // Don't react if initial down happens on a form element
                if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
                    return;
                }

                this.scroller.doTouchStart(e.touches, e.timeStamp);
                e.preventDefault();
            }).bind(this), false);

            document.addEventListener("touchmove", (function(e) {
                this.scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
            }).bind(this), false);

            document.addEventListener("touchend", (function(e) {
                this.scroller.doTouchEnd(e.timeStamp);
            }).bind(this), false);

            document.addEventListener("touchcancel", (function(e) {
                this.scroller.doTouchEnd(e.timeStamp);
            }).bind(this), false);

        } else {

            var mousedown = false;

            this.container.addEventListener("mousedown", (function(e) {
                if (e.target.tagName.match(/input|textarea|select/i)) {
                    return;
                }
                this.scroller.doTouchStart([{
                    pageX: e.pageX,
                    pageY: e.pageY
                }], e.timeStamp);
                mousedown = true;
            }).bind(this), false);

            document.addEventListener("mousemove", (function(e) {
                if (!mousedown) {
                    return;
                }
                this.scroller.doTouchMove([{
                    pageX: e.pageX,
                    pageY: e.pageY
                }], e.timeStamp);

                mousedown = true;
            }).bind(this), false);

            document.addEventListener("mouseup", (function(e) {
                if (!mousedown) {
                    return;
                }
                this.scroller.doTouchEnd(e.timeStamp);
                mousedown = false;
            }).bind(this), false);

            this.container.addEventListener(navigator.userAgent.indexOf("Firefox") > -1 ? "DOMMouseScroll" :  "mousewheel", (function(e) {
                this.scroller.doMouseZoom(e.detail ? (e.detail * -120) : e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
            }).bind(this), false);
        }
    },

    render: function() {
        var dimmer = [];
        var cur = (this.props.current === -1) ? 0 : this.props.current;
        if (this.props.current > -1) {
            dimmer.push(<div className="dimmer invisible"></div>);
        }
        else {
            dimmer.push(<div className="dimmer"></div>);
        }
        return (
            <div id="container">
                {dimmer}
                <div id="content"><img id="background" className="invisible" src={this.props.items[cur].url} /></div>
            </div>
        );
    }
});

module.exports = VignetteComponent;
