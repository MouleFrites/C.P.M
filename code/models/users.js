const db = require('sqlite')
const _ = require('lodash')
var moment = require('moment');

module.exports = {
  getAll() {
    return db.all("SELECT rowid AS id, * FROM users")
  },
  findOne(body) {
    login = body.login

    return db.get("SELECT rowid AS id, * FROM users WHERE login = ?", login)
  },
  createUser(body){
    login = body.login
    password = body.password
    created_at = moment().format("MMM Do YY");
    updated_at = moment().format("MMM Do YY");

    return db.run("INSERT INTO users (login, password, created_at, updated_at) VALUES (?, ?, ?, ?)", login, password, created_at, updated_at)
  },
  deleteUser(body){
    login = body.login

    return db.run("DELETE FROM users WHERE login = ?", login)
  }
}