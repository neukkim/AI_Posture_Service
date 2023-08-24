const express     = require('express');
const router      = express.Router();
const auth        = require('./auth');

router.get('/', auth.CheckAuth, function(req, res) {
    //res.send('라우트를 사용한 메인 페이지입니다.');
    res.render('mypage');
});

module.exports = router;