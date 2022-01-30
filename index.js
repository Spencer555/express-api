// api app

const express = require('express')
const app = express()

//handle raw json
app.use(express.json())

//handle form submission
app.use(express.urlencoded({extended: false}))


//using the router just like django urls include
app.use('/api/members', require('./api/router'))

const PORT = process.env.PORT || 5000 

app.listen(PORT, () => console.log(`Server For API Running On Port ${PORT}`))

