const path = require('path')

const express = require('express');
const Student = require('../models/student')

const registerData = require('./register')

const router = express.Router();

router.get('/', (req, res, next) => {
//    console.log(registerData.students);
    Student.find( (err, students) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(students)
            const students2 = students.toJSON()
            res.render('index', {students: students2, pageTitle: "Registered Students"})
        }
    }
)});


router.post("/", (req, res, next) => {
    const studentInfo = req.body;
    console.log(studentInfo);

    student = new Student({firstName: studentInfo.firstName, lastName: studentInfo.lastName, sex: studentInfo.sex, faculty: studentInfo.faculty, age:studentInfo.age, dept: studentInfo.dept})

    student.save()
    res.redirect('/')
});

router.get('/register', (req, res, next)  =>  {
    res.render('register', {pageTitle: "Registration"})
});

module.exports = router;