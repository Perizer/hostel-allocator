// const path = require('path')

// const express = require('express');

// const Student = require('../models/student')

// const router = express.Router();

// const students = [];
// const jackHall = [];
// const jumboHall = [];
// const theCatherines = []
// const queensHall = []

// router.get('/register', (req, res, next)  =>  {
//     res.render('register', {pageTitle: "Registration"})
// });

// router.post("/", (req, res, next) => {
//     const studentInfo = req.body;
//     console.log(studentInfo);

//     student = new Student({firstName: studentInfo.firstName, lastName: studentInfo.lastName, sex: studentInfo.sex, faculty: studentInfo.faculty, age:studentInfo.age, dept: studentInfo.dept})

//     student.save()

//     // students.push({firstName: studentInfo.firstName, lastName: studentInfo.lastName});
//     // if ((studentInfo.sex === "male") && (studentInfo.faculty === "engineering") || (studentInfo.faculty === "sciences")) {
//     //         jackHall.push({firstName: studentInfo.firstName, lastName: studentInfo.lastName, dept: studentInfo.dept});
//     //         studentInfo.hostel = "Jack Hall";
//     // }
//     // else if ((studentInfo.sex === "male") && (studentInfo.faculty === "arts") || (studentInfo.faculty === "business")) {
//     //     jumboHall.push({firstName: studentInfo.firstName, lastName: studentInfo.lastName, dept: studentInfo.dept});
//     //     studentInfo.hostel = "Jumbo Hall";
//     // }
//     // else if ((studentInfo.sex === "female") && (studentInfo.faculty === "engineering") || (studentInfo.faculty === "sciences")) {
//     //     theCatherines.push({firstName: studentInfo.firstName, lastName: studentInfo.lastName, dept: studentInfo.dept});
//     //     studentInfo.hostel = "The Catherines Hall";
//     // }
//     // else if ((studentInfo.sex === "female") && (studentInfo.faculty === "arts") || (studentInfo.faculty === "business")) {
//     //     queensHall.push({firstName: studentInfo.firstName, lastName: studentInfo.lastName, dept: studentInfo.dept});
//     //     studentInfo.hostel = "Queens Hall";
//     // }
//     console.log(studentInfo);
//     res.redirect('/hostel-allocation')
// });

// exports.routes = router;
// exports.students = students;
// exports.jackHall = jackHall;
// exports.jumboHall = jumboHall;
// exports.theCatherines = theCatherines;
// exports.queensHall = queensHall;
