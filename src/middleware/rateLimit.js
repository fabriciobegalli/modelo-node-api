const rateLimit = require('express-rate-limit');
const { requests } = require('@config/index');
const slowDown = require('express-slow-down');

const limiter = rateLimit({
  windowMs: requests.rateLimit.window,
  max: requests.rateLimit.max, // limit each IP to 100 requests per windowMs
});

const slower = slowDown({
  windowMs: requests.slowDown.window,
  delayAfter: requests.slowDown.delayAfter,
  delayMs: requests.slowDown.delayMs,
});

module.exports = [limiter, slower];
