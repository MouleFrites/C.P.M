const router = require('express').Router()
const Users = require('./../models/users')
const _ = require('lodash')

router.get('/users', (req, res) => {
    Users.getAll().then((users) => res.json(users)).catch((err) => {
        return res.status(404).send(err)
    })
})

router.post('/users', (req, res) => {
    Users.createUser(req.body).then((users) => res.json(users)).catch((err) => {
        return res.status(404).send(err)
    })
})

router.delete('/users', function (req, res) {
    Users.deleteUser(req.body).then((users) => res.json(users)).catch((err) => {
        return res.status(404).send(err)
    })
})

module.exports = router