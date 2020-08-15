const path = require('path')

const express = require('express');

const registerData = require('./register')

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(registerData.students)
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

module.exports = router;
 