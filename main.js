let _ = require('lodash');
//let array = [2, 4, 5, 6, 7];
function sum(array) {
    return _(array).sum();
}
module.exports={
    sum
}

