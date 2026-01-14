// (2).

/**
 * B.1. Write two different functions with two different ways of implementations that:
 * takes any number of parameters and returns them as a reversed collection using array’s reverse function.
 * Note: using of any loop is not allowed
 */

let customReverseCall = function () {
  [].reverse.call(arguments);
  return arguments;
};

console.log(customReverseCall(1, 2, 3));

let customReverseBind = function () {
  let reverseBind = [].reverse.bind(arguments);
  reverseBind();
  return arguments;
};

console.log(customReverseBind(4, 5, 6));

let customReverseApply = function () {
  [].reverse.apply(arguments);
  return arguments;
};

console.log(customReverseApply(7, 8, 9));
