const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');

router.get('/', function(req, res) {
    let userId = null;
    if (req.session.passport != undefined) {
        userId = req.session.passport.user.user;
    }
    res.render('index', {userId: userId});
});

module.exports = router;