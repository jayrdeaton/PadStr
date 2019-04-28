const { stringLength } = require('../helpers');

module.exports = (string, padding, right) => {
  if (!string) string = '';
  while (stringLength(string) < padding) string = ` ${string}`;
  return string;
};
