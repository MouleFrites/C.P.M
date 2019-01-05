const db = require('sqlite')
const _ = require('lodash')

module.exports = {
  getAll() {
    return db.all("SELECT rowid AS id, * FROM users")
  },
  findOne(login) {
    return db.get("SELECT rowid AS id, * FROM users WHERE login = ?", login)
  },
  createUser(login, password, created_at, updated_at){
    return db.run("INSERT INTO users (login, password, created_at, updated_at) VALUES (?, ?, ?, ?)", login, password, created_at, updated_at)
  }
}