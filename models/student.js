// module.exports = class Student {
//     constructor(firstName, lastName, sex, faculty, age, dept) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.sex = sex;
//         this.faculty = faculty;
//         this.age = age;
//         this.dept = dept;
//     }

//     save(){
//         //
//     }

//     assignToHostel(){
//         //
//     }
//}

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    sex: String,
    age: Number,
    faculty: String,
    dept: String ,
   
});

const Student =mongoose.model('Student', studentSchema)

module.exports = Student