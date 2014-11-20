/**
 * @jsx React.DOM
 */

var React = require('react');
var Animate = require('../lib/Animate');
var Scroller = require('../lib/Scroller');
var Render = require('../lib/Render');

var VignetteComponent = React.createClass({
    componentDidMount: function() {
        // Settings
        var contentWidth = 1536;
        var contentHeight = 1024;

        // Initialize layout
        var container = document.getElementById("container");
        var content = document.getElementById("content");

        content.style.width = "100%";
        content.style.height = "100%";


        // Generate content
        var frag = document.createDocumentFragment();
        var imgElem = document.createElement("img");

        var imgSrc = "./images/004.jpg";
        imgElem.src = imgSrc;
        frag.appendChild(imgElem);
        content.appendChild(frag);

        imgElem.onload = function() {
            console.debug(imgElem.width, imgElem.height);
            contentWidth = imgElem.width;
            contentHeight = imgElem.height;
            initialize();
        };

        function initialize() {
            // Intialize layout
            var clientWidth = 0;
            var clientHeight = 0;

            // Initialize Scroller
            var scroller = new Scroller(Render, {
                zooming: true,
                scrollingY: false
            });

            var rect = container.getBoundingClientRect();
            scroller.setPosition(rect.left + container.clientLeft, rect.top + container.clientTop);


            // Reflow handling
            var reflow = function() {
                clientWidth = container.clientWidth;
                clientHeight = container.clientHeight;
                scroller.setDimensions(clientWidth, clientHeight, contentWidth, contentHeight);
            };

            window.addEventListener("resize", reflow, false);
            reflow();

            if ('ontouchstart' in window) {

                container.addEventListener("touchstart", function(e) {
                    // Don't react if initial down happens on a form element
                    if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
                        return;
                    }

                    scroller.doTouchStart(e.touches, e.timeStamp);
                    e.preventDefault();
                }, false);

                document.addEventListener("touchmove", function(e) {
                    scroller.doTouchMove(e.touches, e.timeStamp, e.scale);
                }, false);

                document.addEventListener("touchend", function(e) {
                    scroller.doTouchEnd(e.timeStamp);
                }, false);

                document.addEventListener("touchcancel", function(e) {
                    scroller.doTouchEnd(e.timeStamp);
                }, false);

            } else {

                var mousedown = false;

                container.addEventListener("mousedown", function(e) {
                    if (e.target.tagName.match(/input|textarea|select/i)) {
                        return;
                    }

                    scroller.doTouchStart([{
                        pageX: e.pageX,
                        pageY: e.pageY
                    }], e.timeStamp);

                    mousedown = true;
                }, false);

                document.addEventListener("mousemove", function(e) {
                    if (!mousedown) {
                        return;
                    }

                    scroller.doTouchMove([{
                        pageX: e.pageX,
                        pageY: e.pageY
                    }], e.timeStamp);

                    mousedown = true;
                }, false);

                document.addEventListener("mouseup", function(e) {
                    if (!mousedown) {
                        return;
                    }

                    scroller.doTouchEnd(e.timeStamp);

                    mousedown = false;
                }, false);

                container.addEventListener(navigator.userAgent.indexOf("Firefox") > -1 ? "DOMMouseScroll" :  "mousewheel", function(e) {
                    scroller.doMouseZoom(e.detail ? (e.detail * -120) : e.wheelDelta, e.timeStamp, e.pageX, e.pageY);
                }, false);

            }
        }

    },
    render: function() {

        return (
            <div id="container">
                <div id="content"></div>
            </div>
        );
    }
});

module.exports = VignetteComponent;
