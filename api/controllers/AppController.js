/**
 * AppController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function (req, res) {
        // res.locals.layout = "main";
        return res.view('main');
    }
};
