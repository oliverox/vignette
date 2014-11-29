/**
 * AppController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function (req, res) {
        // res.locals.layout = "main";
        console.log('params:', req.route.params);
        var vid = 0;
        if (req.route.params.length > 0) {
            vid = req.route.params.vid;
        }
        return res.view('main');
    }
};
