const express = require('express');
const cors = require('cors');
const dotenv=require('dotenv')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const newmeet=require('./models/userSchema')

/* const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
}) */

//configuration of env file
dotenv.config({path:' ./config.env'});


 /* app.post('/add',(req,res)=>{
    try{
    const meetingname=req.body.meetingname;
    const starttime=req.body.starttime;
    const endtime=req.body.endtime;
    const participants=req.body.participants;

    const newmeet=new newmeet({
         meetingname :meetingname,
         starttime :starttime,
         endtime :endtime,
         participants:participants

    });


    const created=createUser.save();
    console.log(created);
    res.status(400).send("registered");
}catch(error)
{
    res.statusMessage(400).send(error)
}
 }) */


 app.get('/',(req,res)=>
 {
    res.send("Hello World");
 })

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});