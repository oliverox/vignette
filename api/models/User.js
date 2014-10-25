/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        fbId : {
            type: 'string',
            required: true
        },
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        email: {
            type: 'string',
            required: true
        },
        vignettes: {
            collection: 'Vignette',
            via: 'createdBy'
        }
    }
};
