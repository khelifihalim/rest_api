const User = require('../models/userModel')



exports.getAllUsers = async (req,res,next)=>{
    const Users = await User.find({})
   
     res.status(200).json({
         count : Users.length,
         Users
     })
}

//------------add a user-------

exports.addUser = async (req,res,next) => {
    const new_User = new User({
        name : req.body.name,
        age : req.body.age
    })
    try {
        const saved_User = await new_User.save()
    res.status(200).json(saved_User)
    } catch (err) {
        res.json({message : err})
    }
    
}
//------------------find one by id--------
exports.getOneById = async (req,res,next) => {
    try {
        const oneUser = await User.findOne({_id : req.params.id_User})
            res.status(200).json(oneUser)
    } catch (err) {
            res.json({message : err})
    }
}  
    //------delete a user------------
exports.deletOne = async (req,res,next) => {
    try {
        const deleted_User = await User.remove({_id : req.params.id_User})
            res.status(200).json(deleted_User)  
    } catch (err) {
            res.json({message : err})
        }
}

//--------update one user------
exports.update_User = async (req,res,next) => {
    try {
        const updated_User = await User.updateOne({_id : req.params.id_User},{$set : {age : req.body.age}})
            res.status(200).json(updated_User)  
    } catch (err) {
            res.json({message : err})
        }
}