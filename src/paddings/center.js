const { stringLength } = require('../helpers');

module.exports = (string, padding) => {
  if (!string) string = '';
  let alt = false;
  while (stringLength(string) < padding) {
    if (alt) { string = ` ${string}` } else { string += ' ' };
    alt = !alt;
  };
  return string;
};
