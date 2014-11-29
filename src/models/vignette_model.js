var Backbone = require('exoskeleton');

var VignetteModel = Backbone.Model.extend({
    initialize: function() {
        console.log('*VignetteModel* initialize()');
    },
    url: function() {
        return '/mockapi';
    }
});

module.exports = VignetteModel;
