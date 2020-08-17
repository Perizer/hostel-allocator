const path = require('path')

const express = require('express');

const registerData = require('./register')

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(registerData.students);
    const students = registerData.students;
    res.render('index', {students: students, pageTitle: "Registered Students"});
});

module.exports = router;