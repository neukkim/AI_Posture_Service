const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');

//router.get('/', function(req, res) {
//    console.log(req.session);
//    res.render('posture');
//});

router.get('/', auth.CheckAuth, async function(req, res) {
    console.log(req.session.passport.user.user);
    //userID를 view에 같이 넘겨주는 기능
    let userId = null;
    if (req.session.passport != undefined) {
        userId = req.session.passport.user.user;
    }
    res.render('posture', {userId: userId});
});
module.exports = router;