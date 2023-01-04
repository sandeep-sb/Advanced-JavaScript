/**
 * Currying is a process in functional programming where we transform a function with mulyiple arguments
 * into a sequence of nesting functions that take one argument at a time.
 *
 * e.g. => function(a, b, c) ===> function(a)(b)(c)
 *
 * Currying doesn't call a function. It simply transforms it.
 */

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(2, 3, 5));

/**
 * Now we transform this function from calling with 3 parameters to calling with 1 parameter at a time.
 *
 * sum(2, 3, 5) ===> sum(2)(3)(5)
 *
 * We define a function curry() and pass a function fn() as its argument, curry() then returns the curried version of fn().
 */

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5);


/**
 * Currying is used to compose re-useable functions.
 */