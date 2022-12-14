const express =require('express');
const router = express.Router()
const { getAllUsers, getOneById,addUser, deletOne, update_User } = require('../controllers/userControler')

router.get('/users', getAllUsers)
router.get('/users/:id_User', getOneById)
router.post('/users/add', addUser)
router.delete('/users/:id_User', deletOne)
router.patch('/users/:id_User', update_User)




module.exports = router