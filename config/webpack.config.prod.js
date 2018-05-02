const client = require('./prod/webpack.config.client.prod');
const server = require('./prod/webpack.config.server.prod');

module.exports = [client, server];
