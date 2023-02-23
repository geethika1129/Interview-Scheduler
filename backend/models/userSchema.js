const mongoose=require('mongoose');
/* const bcryptjs=require('bcryptjs'); */
/* const jwt=require('jsonwebtoken'); */

const userschema=new mongoose.Schema({
    meetingname:{
        type : String,
        required:true,
        unique:true
    },
    starttime:{
        type : String,
        required :true,
        unique :true,
    },
    endtime:{
        type :String,
        required :true,
        unique:true,
    },
    participants:{
        type : [String],
        required :true,
        unique :true,
    }

})

const postUser = mongoose.model('user', userschema);
const newmeet =new mongoose.model("meet",userschema);
module.exports =newmeet