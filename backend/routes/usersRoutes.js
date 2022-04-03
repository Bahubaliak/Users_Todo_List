const express = require('express')
const router = express.Router()
const {
  getUser,
  setUser,
  deleteUser,
  putUser
} = require('../controllers/userController')  

router.get('/', getUser)

router.post('/', setUser)

// router.route('/').get(getUser).post(setUser)
// router.route('/:id').put(putUser).delete(deleteUser)

router.put('/:id', putUser)

router.delete('/:id', deleteUser)

module.exports = router