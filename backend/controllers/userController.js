const asyncHandler = require('express-async-handler')

// @desc get user
// @route GET
// @access Private
const getUser = asyncHandler(async(req, res) => {
  res.status(200).json({ message: "get user information" })
})

// @desc set user
// @route POST
// @access Private
const setUser = asyncHandler(async(req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text')
  }
  
  res.status(200).json({ message: "post user information" })
})

// @desc update user
// @route PUT
// @access Private
const putUser = asyncHandler(async(req, res) => {
  res.status(200).json({ message: "update user information" })
})

// @desc delete user
// @route DELETE
// @access Private
const deleteUser = asyncHandler(async(req, res) => {
  res.status(200).json({ message: "delete user information" })
})

module.exports = {
  getUser,
  putUser,
  setUser,
  deleteUser
}