const router = require('express').Router()
const Passwords = require('./../models/passwords')
const _ = require('lodash')

router.get('/', (req, res) => {
  res.redirect('/passwords');
})

router.get('/passwords', (req, res) => {
  Passwords.getAll(req.query).then((passwd) => res.json(passwd)).catch((err) => {
    return res.status(404).send(err)
  })
})

router.post('/passwords', (req, res) => {
  Passwords.addPassword(req.body).then((passwd) => res.json(passwd)).catch((err) => {
    return res.status(404).send(err)
  })
})

router.delete('/passwords', (req, res) => {
  Passwords.delPassword(req.body).then((passwd) => res.json(passwd)).catch((err) => {
    return res.status(404).send(err)
  })
})

router.get('/passwords/:id', (req, res) => {
  Passwords.findOne(req.params.id, req.query.user).then((passwd) => res.json(passwd)).catch((err) => {
    return res.status(404).send(err)
  })
})

router.put('/passwords/:id', (req, res) => {
  Passwords.updatePassword(req.query, req.params.id).then((passwd) => res.json(passwd)).catch((err) => {
    return res.status(404).send(err)
  })
})


module.exports = router