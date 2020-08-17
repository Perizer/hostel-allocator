const path = require('path')

const express = require('express');

const registerData = require('./register')

const router = express.Router();


router.get('/hostel-allocation', (req, res, next) => {
    const jackHall = registerData.jackHall;
    const jumboHall = registerData.jumboHall;
    const theCatherines = registerData.theCatherines;
    const queensHall = registerData.queensHall;
    res.render('hostelList', {
        jackHall: jackHall, 
        jumboHall: jumboHall, 
        theCatherines: theCatherines,
        queensHall: queensHall,
        pageTitle: "Hostel Allocator"});
});

module.exports = router;
 