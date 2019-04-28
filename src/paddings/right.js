const { stringLength } = require('../helpers');

module.exports = (string, padding) => {
  if (!string) string = '';
  while (stringLength(string) < padding) string += ' ';
  return string;
};
