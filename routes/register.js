const path = require('path')

const express = require('express');

const router = express.Router();

const students = [];
const jackHall = [];
const jumboHall = [];
const theCatherines = []
const queensHall = []

router.get('/register', (req, res, next)  =>  {
    res.render('register', {pageTitle: "Registration"})
});

router.post("/", (req, res, next) => {
    const studentInfo = req.body;
    students.push({firstName: studentInfo.firstName, lastName: studentInfo.lastName});
    if (studentInfo.sex === "male" && studentInfo.faculty === "engineering" || studentInfo.faculty === "sciences") {
            jackHall.push({firstName: studentInfo.firstName, lastName: studentInfo.lastName, dept: studentInfo.dept});
    }
    else if (studentInfo.sex === "male" && studentInfo.faculty === "arts" || studentInfo.faculty === "business") {
        jumboHall.push({firstName: studentInfo.firstName, lastName: studentInfo.lastName, dept: studentInfo.dept});
    }
    else if (studentInfo.sex === "female" && studentInfo.faculty === "engineering" || studentInfo.faculty === "sciences") {
        theCatherines.push({firstName: studentInfo.firstName, lastName: studentInfo.lastName, dept: studentInfo.dept});
    }
    else if (studentInfo.sex === "female" && studentInfo.faculty === "arts" || studentInfo.faculty === "business") {
        queensHall.push({firstName: studentInfo.firstName, lastName: studentInfo.lastName, dept: studentInfo.dept});
    }
    res.redirect('/hostel-allocation')
});


exports.routes = router;
exports.students = students;
exports.jackHall = jackHall;
exports.jumboHall = jumboHall;
exports.theCatherines = theCatherines;
exports.queensHall = queensHall;