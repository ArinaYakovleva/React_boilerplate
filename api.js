const express = require('express')
const router = express.Router()
const Client = require('./client')

router.get('/clients', function (req, res) {
    Client.find({})
          .then(client => {
              res.send(client)
          })    
})


router.post('/clients', function (req, res) {
    Client.create(req.body)
          .then(client => {
              res.send(client)
          })
})

router.delete('/clients/:id', function (req, res) {
    Client.deleteOne({_id: req.params.id})
           .then(client => {
               res.send(client)
           })
})

router.put('/clients/:id', function (req, res) {
    Client.findByIdAndUpdate({_id: req.params.id}, req.body)
          .then(() => {
              Client.findOne({_id}, req.params.id)
                    .then(client => {
                        res.send(client)
                    })
          })
})

module.exports = router;