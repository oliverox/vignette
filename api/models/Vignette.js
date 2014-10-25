/**
* Vignette.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        title: {
            type: 'string',
            required: true
        },
        titlePosition: {
            type: 'integer',
            defaultsTo: 0       // top=0; middle=1; bottom=2;
        },
        length: {
            type: 'integer',
            defaultsTo: 0
        },
        bucketId: {
            type: 'string'
        },
        displayAuthor: {
            type: 'boolean',
            defaultsTo: false
        },
        createdBy: {
            model: 'User'
        },
        stories: {
            collection: 'Story',
            via: 'vignette'
        }
    }

};
