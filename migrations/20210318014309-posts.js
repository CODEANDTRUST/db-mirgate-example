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

exports.up = function (db, callback) {
  db.createTable(
    "posts",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      created: {
        type: "datetime",
        defaultValue: new String("CURRENT_TIMESTAMP"),
      },
      updated: {
        type: "datetime",
        defaultValue: new String(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    },
    callback
  )
}

exports.down = function (db, callback) {
  db.dropTable("posts", callback)
}

exports._meta = {
  version: 1,
}
