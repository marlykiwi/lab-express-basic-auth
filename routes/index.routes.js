const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

const loginCheck = () => {
    return (req, res, next) => {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/login')
        }
    }
}


router.get('/main', loginCheck(), (req, res, next) => {
    console.log('this is the user', req.session.user);
    res.render('main', {user: req.session.user});
});


module.exports = router;
