const { stringLength } = require('../helpers');

module.exports = (string, padding) => {
  if (string === null || string === undefined) string = '';
  while (stringLength(string) < padding) string += ' ';
  return string;
};
