const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

//Reveive the information in json
app.use(express.json());
app.use(cors());

const studentDataModel = require("./Model/fetchStudentData")

app.listen(3002, ()  => {
    console.log("Server running on 3002")
})

mongoose.connect('mongodb://127.0.0.1:27017/StudentInfo')    
    .then(() => console.log("Connection succesful"));

app.post("/insert", async(req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const dateOfBirth = req.body.dateOfBirth
    const gender = req.body.gender
    const address = req.body.address
    const phoneNumber = req.body.phoneNumber

    //Constructor
    const model = new studentDataModel({
        firstName : firstName,
        lastName   : lastName,
        dataOfBirth : dateOfBirth,
        gender : gender,
        address : address,
        phoneNumber : phoneNumber
    });
    try {
        await model.save()
        res.send("insertedValues")
    } catch(error) {
        console.log("error")
    }
});