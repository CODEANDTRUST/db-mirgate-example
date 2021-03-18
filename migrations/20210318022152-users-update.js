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
  const addCreated = (err) => {
    if (err) return callback(err)
    db.addColumn(
      "users",
      "created",
      {
        type: "datetime",
        defaultValue: new String("CURRENT_TIMESTAMP"),
      },
      callback
    )
  }

  const addUpdated = (err) => {
    if (err) return callback(err)
    db.addColumn(
      "users",
      "updated",
      {
        type: "datetime",
        defaultValue: new String(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
      addCreated
    )
  }

  db.addColumn("users", "password", { type: "string" }, addUpdated)
}

exports.down = function () {
  return null
}

exports._meta = {
  version: 1,
}
