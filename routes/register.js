const path = require('path')

const express = require('express');

const router = express.Router();

const students = [];

router.get('/register', (req, res, next)  =>  {
    res.sendFile(path.join(__dirname, '../', 'views', 'register.html'));
});

router.post("/", (req, res, next) => {
    studentInfo = req.body;
    students.push({firstName: studentInfo.firstName, lastName: studentInfo.lastName});
    console.log(students);
    res.send("Thanks for posting that");
})


exports.routes = router;
exports.students = students;