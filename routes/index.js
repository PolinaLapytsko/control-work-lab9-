var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated, function (req, res) {
    res.render('index');
});

router.get('/about', ensureAuthenticated, function (rec, res) {
 res.render('about');
});
router.get('/about', ensureAuthenticated, function (rec, res) {
    res.render('about');
});
router.get('/add', ensureAuthenticated, function (rec, res) {
    res.render('add');
});
router.get('/workers', ensureAuthenticated, function (rec, res) {
    res.render('workers');
});



function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('error_msg', 'Вы не вошли');
        res.redirect('/users/login');
    }
}
module.exports = router;