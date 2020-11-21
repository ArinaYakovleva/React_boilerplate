const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    phone: String,
    vehicles: Array
})

const Client = mongoose.model('client', ClientSchema)

module.exports = Client