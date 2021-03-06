var
  AWS = require('aws-sdk'),
  config = require('../deploy.config.js'),
  _instance,
  Endpoint;

module.exports = Endpoint();

function Endpoint() {
  if (undefined === _instance) {
    _instance = new AWS.Endpoint(config.endpoint);
  }

  return _instance;
}
