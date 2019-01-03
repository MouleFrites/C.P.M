const router = require('express').Router()
const Passwd = require('./../models/passwd')
const _ = require('lodash')

router.get('/', (req, res) => {
  Passwd.getAll().then((passwd) => res.json(passwd)).catch((err) => {
    return res.status(404).send(err)
  })
})


module.exports = router