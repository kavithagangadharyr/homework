const mongoose = require("mongoose");

//Creating schema / model
const dataBaseStudentSchema = new mongoose.Schema({
    firstName: String,
    latName: String,
    dataOfBirth: Date,
    gender: String,
    address: String,
    phoneNumber: Number
});

const studentInfoData = mongoose.model("studentInfoData", dataBaseStudentSchema);

module.exports = studentInfoData
Footer