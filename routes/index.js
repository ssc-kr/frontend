const express = require('express');
const router = express.Router();

const config = require('../config');

const SESSION_NAME = config.cookie.session;
const SESSION_DOMAIN = config.cookie.domain;

router.get('/', (req, res, next) => {
    if (req[SESSION_NAME]) {
        res.redirect('/dashboard');   
    } else {
        res.redirect('/user/login');
    }
});

router.get('/dashboard', (req, res, next) => {
    return res.sendfile('dist/dashboard.html');
})

module.exports = router;