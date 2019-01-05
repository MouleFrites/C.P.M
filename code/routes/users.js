const router = require('express').Router()
const Users = require('./../models/users')
const _ = require('lodash')
var moment = require('moment');

router.get('/users', (req, res) => {

    Users.getAll().then((users) => res.json(users)).catch((err) => {
        return res.status(404).send(err)
    })
})

router.post('/users', (req, res) => {
    login = req.body.login
    password = req.body.password
    created_at = moment().format("MMM Do YY");
    updated_at = moment().format("MMM Do YY");

    Users.createUser(login, password, created_at, updated_at).then((users) => res.json(users)).catch((err) => {
        return res.status(404).send(err)
    })
})

module.exports = router