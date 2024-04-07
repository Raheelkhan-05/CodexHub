const connectDB = require('./connection');
const practiceModel = require('./practiceModel');
const data = require('../pdata.json');
connectDB('mongodb+srv://raheelkhanlohani116039:dPwbervoDjHeUCZO@cluster0.jpwlyb4.mongodb.net/');

const upload = async ()=>{
    await practiceModel.create(data)
    .then(()=>console.log("Successfully Uploaded"))
    .catch((err)=>console.log(err));
}
upload();