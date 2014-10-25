/**
* Story.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        index: {
            type: 'integer',
            required: true
        },
        type: {
            type: 'integer',     // cover=0; photo=1; photo+text=2; color+text=3;
            required: true
        },
        photoId: {
            type: 'string'
        },
        text: {
            type: 'text'
        },
        backgroundColor: {
            type: 'string'
        },
        vignette: {
            model: 'Vignette'
        }
    }

};
