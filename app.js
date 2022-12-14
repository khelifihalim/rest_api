const express = require('express');
const app = express();
const bodyparser = require('body-parser')

app.use(bodyparser.json())

app.get('/', (req,res)=> {
    res.send('hello RestApi ')
})

app.use(express.json())

userRoute = require('./routes/usersRoute')
app.use('/', userRoute)

module.exports = app

