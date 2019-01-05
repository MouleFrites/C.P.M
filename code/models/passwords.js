const db = require('sqlite')
const _ = require('lodash')
module.exports = {
  getAll(login) {
    return db.all("SELECT rowid AS id, * FROM passwords WHERE user = ?", login)
  },
  findOne(id) {
    return db.get("SELECT rowid AS id, * FROM passwords WHERE rowid = ?", id)
  }
}