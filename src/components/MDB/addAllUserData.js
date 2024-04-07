const connectDB = require('./connection');
const userDataModel = require('./userDataModel');
const data = require('../../login/client/data/userData.json');
connectDB('mongodb+srv://raheelkhanlohani116039:dPwbervoDjHeUCZO@cluster0.jpwlyb4.mongodb.net/');

const upload = async ()=>{
    await userDataModel.create(data)
    .then(()=>console.log("Successfully Uploaded"))
    .catch((err)=>console.log(err));
}
upload();