"use strict"

var dbm
var type
var seed

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate
  type = dbm.dataType
  seed = seedLink
}

// create users table
exports.up = function (db, callback) {
  db.createTable(
    "users",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      first_name: "string",
      last_name: "string",
      email: "string",
      phone: "string",
      age: "int",
    },
    callback
  )
}

// remove users table
exports.down = function (db, callback) {
  db.dropTable("users", callback)
  return null
}

exports._meta = {
  version: 1,
}
