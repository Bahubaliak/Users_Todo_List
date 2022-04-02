const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use('/api/users', require('./routes/usersRoutes'))

app.listen(port , () => console.log(`app listening on port ${port}`))