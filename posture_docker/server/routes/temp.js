const express     = require('express');
const router      = express.Router();

router.get('/', function(req, res) {
    //userID를 view에 같이 넘겨주는 기능
    
    res.render('temp'); //userID view에 넘겨줌
});

module.exports = router;