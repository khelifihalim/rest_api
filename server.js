const app = require('./app');
const mongoose = require('mongoose')

const dotenv = require('dotenv');
dotenv.config({path:'./config/config.env'})
const myPORT = process.env.PORT 

//----connecte to mdb
const DB = process.env.DB_CONNECT
mongoose.connect(DB, ()=> console.log('database connected'))

app.listen(myPORT,()=> console.log(`server is runing on ${myPORT}`))