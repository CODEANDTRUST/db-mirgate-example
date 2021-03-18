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
  db.addColumn(
    "posts",
    "user_id",
    {
      type: "int",
      foreignKey: {
        name: "FK_posts_users__users",
        table: "users",
        rules: {
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
        mapping: { user_id: "id" },
      },
    },
    callback
  )
}

exports.down = function () {
  return null
}

exports._meta = {
  version: 1,
}
