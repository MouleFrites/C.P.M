const db = require('sqlite')
const _ = require('lodash')

module.exports = {
  getAll() {
    return db.all("SELECT rowid AS id, * FROM passwords")
  },
  findOne(id) {
    return db.get("SELECT rowid AS id, * FROM passwords WHERE rowid = ?", id)
  }
}