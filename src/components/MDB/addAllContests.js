const connectDB = require('./connection');
const contestModel = require('./contestModel');
const data = require('../data.json');
connectDB('mongodb+srv://raheelkhanlohani116039:dPwbervoDjHeUCZO@cluster0.jpwlyb4.mongodb.net/');

const upload = async ()=>{
    await contestModel.create(data)
    .then(()=>console.log("Successfully Uploaded"))
    .catch((err)=>console.log(err));
}
upload();