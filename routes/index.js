var express = require('express');
var router = express.Router();
const { requiresAuth } = require('express-openid-connect');

/* GET home page. */
const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'TkokTTz21K5ACJ50dsMeO7oI05TGP6wl',
    issuerBaseURL: 'https://oladmuni.us.auth0.com',
};


// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));

// req.isAuthenticated is provided from the auth router
//router.get('/', /*requiresAuth(),*/ (req, res) => {
//var checkStat = req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out';
// var UserName = req.oidc.user.name;
//if (checkStat = 'Logged in') {
//  res.render('dashboard', { title: 'Dashboard', checkStat: checkStat, username: UserName });
//} else {
// res.render('index', { title: 'Welcome' });
//}
//});

router.get('/', function(req, res, next) {
    res.render('index', { title: 'welcome' });
});
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});
router.get('/profile', requiresAuth(), (req, res) => {
    const UserName = `hello there ${req.oidc.user.name}`;

    res.send(UserName);
});

module.exports = router;