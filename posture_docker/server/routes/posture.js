const express     = require('express');
const router      = express.Router();

//router.get('/', function(req, res) {
//    console.log(req.session);
//    res.render('posture');
//});

router.get('/', async function(req, res) {
    //userID를 view에 같이 넘겨주는 기능
    let userId = null;
    if (req.session.passport != undefined) {
        userId = req.session.passport.user.user;
    }
    res.render('posture', {userId: userId});
});
module.exports = router;