const router = require('express').Router()
const Passwords = require('./../models/passwords')
const _ = require('lodash')

router.get('/', (req, res) => {
  res.redirect('/passwords');
})

router.get('/passwords', (req, res) => {
  login = req.body.login
  Passwords.getAll(login).then((passwd) => res.json(passwd)).catch((err) => {
    return res.status(404).send(err)
  })
})


module.exports = router