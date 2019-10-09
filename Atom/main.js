const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

const { setCookie } = require('./cookie')

router.get('/', async (req, res) => {
    const token = jwt.sign({token:'THE WORLD!!!'},'001001')
    console.log('token->>',token);
    await setCookie(token,res)
    console.log('COOKIE SET ! ! !')
    // res.send('COOKIE SET')
        res.send('/')
});

module.exports = router;