const db = require('sqlite')
const _ = require('lodash')
var moment = require('moment');

module.exports = {
  getAll(query) {
    user = query.user
    return db.all("SELECT rowid AS id, * FROM passwords WHERE user = ?", user)
  },
  findOne(id, user) {
    return db.get("SELECT rowid AS id, * FROM passwords WHERE user = ? AND rowid = ?", user, id)
  },
  addPassword(body) {
    console.log(body)
    password = body.password
    email = body.email
    site = body.site
    user = body.user
    created_at = moment().format("MMM Do YY");
    updated_at = moment().format("MMM Do YY");

    return db.all("INSERT INTO passwords (password, email, site, user, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)", password, email, site, user, created_at, updated_at)
  },
  delPassword(body){
    user = body.user
    id = body.id

    return db.run("DELETE FROM passwords WHERE user = ? AND rowid = ? ", user, id)
  },
  updatePassword(query, id){
    console.log(query)
    toChange = query.toChange
    change = query.change
    user = query.user
    switch (toChange) {
      case 'password' :
        return db.run("UPDATE passwords SET password = ? WHERE user = ? AND rowid = ?", change, user, id)
      case 'email' :
        return db.run("UPDATE passwords SET email = ? WHERE user = ? AND rowid = ?", change, user, id)
      case 'site' :
        return db.run("UPDATE passwords SET site = ? WHERE user = ? AND rowid = ?", change, user, id)
      case 'user' :
       return db.run("UPDATE passwords SET user = ? WHERE user = ? AND rowid = ?", change, user, id)
      default :
        return console.log("Bad configuration")
    }
  }
}

