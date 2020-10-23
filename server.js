const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose') 
const bodyParser = require('body-parser')
const cors = require('cors');

mongoose.connect('mongodb://localhost/clients-db', {useNewUrlParser: true})

app.use(cors());
app.use(bodyParser.json())
app.use('/api', require('./src/api'))


app.listen(port, () => {
  console.log('Server is listening');
})



