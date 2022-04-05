const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

// @desc get user
// @route GET
// @access Private
const getUser = asyncHandler(async(req, res) => {
  const users = await User.find()
  res.status(200).json(users)
})

// @desc set user
// @route POST
// @access Private
const setUser = asyncHandler(async(req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text')
  }

  const user = await User.create({
    name: req.body.text,
  })
  
  res.status(200).json(user)
})

// @desc update user
// @route PUT
// @access Private
const putUser = asyncHandler(async(req, res) => {
  const user = await User.findById(req.params.id)
  console.log(req.params);
  
console.log(req.body);

  if (!user) {
    res.status(400)
    throw new Error('User doesn\'t exist')
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body}, {new: true})

  res.status(200).json(updatedUser)
})

// @desc delete user
// @route DELETE
// @access Private
const deleteUser = asyncHandler(async(req, res) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    res.status(400)
    throw new Error('User doesn\'t exist')
  }

  await user.remove()

  res.status(200).json(req.params.id)
})

module.exports = {
  getUser,
  putUser,
  setUser,
  deleteUser
}