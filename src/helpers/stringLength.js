module.exports = (string) => {
  if (!string) string = '';
  if (typeof string !== 'string') string = `${string}`;
  return string.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '').length;
}
