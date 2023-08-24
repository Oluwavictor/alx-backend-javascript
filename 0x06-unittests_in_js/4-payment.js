const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const container = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${container}`);
}

module.exports = sendPaymentRequestToApi;
