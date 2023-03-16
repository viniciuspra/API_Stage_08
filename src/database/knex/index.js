const config = require("../../../knex");
const knex = require("knex");

const connection = knex(config.development);

module.exports = connection;