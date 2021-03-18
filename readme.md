# HELPFUL DB-MIGRATE INFO

npm - https://www.npmjs.com/package/db-migrate  
mysql - https://db-migrate.readthedocs.io/en/latest/API/SQL/  
commands - https://db-migrate.readthedocs.io/en/latest/Getting%20Started/commands/

# Getting Started

Create a .env file from the sample below. Then run install **db-migrate** with `npm install -g db-migrate`

# CLI Commands

- `db-migrate create [migration name]`
  - create new migration with name
  - add the `callback` function to the up function to use when calling db functions
- `db-migrate up [migration name]?`
  - run new migrations
- `db-migrate down [migration name]`
  - reverse a migration

## Sample .env

```
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=testing
```

## Random stuff

#### use this if can't connect to db on first try

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'PASSWORD';`

### UPDATED and CREATED

```
created: {
  type: "datetime",
  defaultValue: new String("CURRENT_TIMESTAMP"),
},
updated: {
  type: "datetime",
  defaultValue: new String("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
}
```
