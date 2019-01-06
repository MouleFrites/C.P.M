const db = require('sqlite')
const express = require('express')
const bodyParser = require('body-parser')
const api = express()
const path = require('path')

db.open('api.db').then(() => {
  Promise.all([
    db.run("CREATE TABLE IF NOT EXISTS passwords (password, email, site, user, created_at, updated_at)"),
    db.run("CREATE TABLE IF NOT EXISTS users (login, password, public_key, private_key, created_at, updated_at)")
  ]).then(() => {
    console.log('Database is ready')
  }).catch((err) => {
    console.log('Une erreur est survenue :', err)
  })
})

// MIDDLEWARE POUR PARSER LE BODY
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: false }))
// api.use(methodOverride(‘_method’))

// ROUTES
api.use('/', require('./routes/passwords'))
api.use('/', require('./routes/users'))

api.use(express.static(path.join(__dirname, 'html_page')));
api.engine('html', require('ejs').renderFile);
api.set('view engine', 'html');

api.listen(3000);

console.log("http://localhost:3000/");