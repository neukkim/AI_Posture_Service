const express     = require('express');
const router      = express.Router();

const UserModel   = require('../models/user')
const bkfd2Password = require("pbkdf2-password");
const hasher        = bkfd2Password();

const passport = require('passport');



router.post('/posture', async function(req, res) {
    const id = req.body.id;
    const password = req.body.password;
    const name = req.body.name;
    const email = req.body.email;
    console.log(id, password, name, email);
    console.log('DB_USER', process.env.DB_USER);

    hasher( {password: password } , async function(error, pass, salt, hash) {
        var user = {
            id: id,
            password: hash,
            salt: salt,
            name: name,
            email: email,
        };
        const result = await UserModel.AddUser(user);
        if (result.error) {
            console.log(result.error);
            res.redirect('/user/signup');
        }
        else {
            console.log('USER CREATED');
            res.redirect('/user/signin');
        }
    }); //hasher
});

router.post('/mypage', async function(req, res, next) {
    const id = req.body.id; // Assuming you're passing the user's ID in the request body

    try {
        const result = await UserModel.DeleteUser(id); // Assuming there's a deleteUser function in UserModel
        if (result.error) {
            console.log(result.error);
            res.status(500).json({ error: 'An error occurred while deleting the user.' });
        } else {
            console.log('USER DELETED');
            //res.status(200).json({ message: 'User deleted successfully.' });
            

                //자동 로그아웃
                req.logout(function(error) {
                    if (error) {
                        console.log('error', error);
                        return next(error);
                    }
                    res.redirect('/');
                });
            
                //res.redirect('/');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }

    

    

    //req.logout(function(error) {
      //  if (error) {
        //    return next(error);
        //}
        //res.redirect('/');
   // });


    


});



module.exports = router;