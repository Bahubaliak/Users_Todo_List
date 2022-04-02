const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.status(200).json({message: "get users infomation"})
})

route.post('/', (req, res) => {
    res.status(200).json({message: "post user infomation"})
})

route.put('/:id', (req, res) => {
    res.status(200).json({message: "update user infomation"})
})

route.delete('/:id', (req, res) => {
    res.status(200).json({message: "delete user infomation"})
})

module.exports = route