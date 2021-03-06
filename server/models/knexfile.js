// var username = require('os').userInfo().username;
var username = 'test'
var options = {
    development: {
        client: 'pg',
        connection: 'postgres://postgres:5432@localhost/' + username,
  //      searchPath: ['knex', 'public'],
        pool : {
            min: 1,
            max:3
        }
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
     //   searchPath: ['knex', 'public'],
        pool : {
            min: 1,
            max:3
        }
      },
      test: {
          client: 'pg',
          connection: 'postgres://postgres:5432@localhost/test',
          pool: {
              min: 1,
              max: 3
          }
      }
  };

var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
console.log("config is ", config);
module.exports = require('knex')(config);