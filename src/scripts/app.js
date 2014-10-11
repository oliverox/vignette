/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 * Feel free to change none, some, or ALL of this file to fit your needs!
 */

// var io = require('socket.io-browserify');
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');


module.exports = App = function App () {};


App.prototype.start = function(){

    console.log('-- inside App.start() --', $("body"), Backbone, _);

    // as soon as this file is loaded, connect automatically, 
    var socket = io.connect();
    if (typeof console !== 'undefined') {
        log('Connecting to Sails.js...');
    }

    socket.on('connect', function socketConnected() {

        // Listen for Comet messages from Sails
        socket.on('message', function messageReceived(message) {

            ///////////////////////////////////////////////////////////
            // Replace the following with your own custom logic
            // to run when a new message arrives from the Sails.js
            // server.
            ///////////////////////////////////////////////////////////
            log('New comet message received :: ', message);
            //////////////////////////////////////////////////////

        });


        ///////////////////////////////////////////////////////////
        // Here's where you'll want to add any custom logic for
        // when the browser establishes its socket connection to 
        // the Sails.js server.
        ///////////////////////////////////////////////////////////
        log(
            'Socket is now connected and globally accessible as `socket`.\n' +
            'e.g. to send a GET request to Sails, try \n' +
            '`socket.get("/", function (response) ' +
            '{ console.log(response); })`'
        );
        ///////////////////////////////////////////////////////////


    });

    // Expose connected `socket` instance globally so that it's easy
    // to experiment with from the browser console while prototyping.
    window.socket = socket;


    // Simple log function to keep the example simple
    function log() {
        if (typeof console !== 'undefined') {
            console.log.apply(console, arguments);
        }
    }

};

App.mousedown = false;

App.prototype.startPoc = function() {
    console.log('starting poc...');
    var $sections = $("section");
    $sections.on("mousedown", function (evt) {
        console.log('mousedown');
        App.mousedown = true;
        App.$currentSection = $(this);
        $('html,body').css('cursor','crosshair');
    });
    $sections.on("mousemove", function (evt) {
        if (App.mousedown && App.$currentSection && ($(this).attr('id') !== App.$currentSection.attr('id'))) {
            // console.log('mousemove over:', App.$currentSection);
            App.$currentSection.addClass('appendready');
            // $(this).append(App.$currentSection.html());
        }
    });

    $sections.on("mouseout", function (evt) {
        if (App.mousedown && App.$currentSection && ($(this).attr('id') !== App.$currentSection.attr('id'))) {
            App.$currentSection.removeClass('appendready');
        }
    });

    $sections.on("mouseup", function (evt) {
        console.log(App.mousedown, App.$currentSection, $(this).attr('id'), App.$currentSection.attr('id'), App.$currentSection.hasClass('appendready'));
        if (App.mousedown && App.$currentSection && ($(this).attr('id') !== App.$currentSection.attr('id')) && App.$currentSection.hasClass('appendready')) {
            var $this = $(this);
            var html = $this.text();
            $this.text(html + ' ' + App.$currentSection.text());
            App.$currentSection.remove();
        }        
    });

    $(document).on("mouseup", function (evt) {
        console.log('mouseup');
        App.mousedown = false;
        App.$currentSection = undefined;
        $('html,body').css('cursor','');
    });
    $(document).on("mousemove", function (evt) {
        if (App.mousedown) {
            console.log('drag');
            App.$currentSection.css({
                left: evt.clientX + 10,
                top: evt.clientY + 10
            });
        }
    });

};

