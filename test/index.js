const { center, left, right, stringLength } = require('../');

console.log(`${right('test 0', 0)}|`);
console.log(`${right('test 8', 8)}|`);
console.log(`${right('test 10', 8)}|`);
console.log(`|${left('test 0', 0)}`);
console.log(`|${left('test 8', 8)}`);
console.log(`|${left('test 10', 15)}`);
console.log('stringLength("test")', stringLength('test'));
console.log(`|${left(1, 10)}`);
console.log(`|${center('test', 10)}|`);
console.log(`|${center('tests', 10)}|`);
