/**
 * Previously we saw how nested function scoping worked. We'll now see how Closures work.
 * 
 * In JavaScript, when we return a function from another function, we are effectively 
 * returning a combination of the function definition along with the function's scope.
 * This would let the function definition have an associated persistent memory which could
 * hold on too live data between executions. This combination of the function definition 
 * and its scope is what is called a closure in JavaScript.
 */

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
outer();
outer();

/**
 * Here the output is:
 * 1
 * 1
 *
 * This happened because both the times outer() function was invoked, a new memory was assigned to the counter
 * variable, both the times it was assigned with the initial value 0. Hence, when inner() was called, both times
 * the value 1 was logged.
 *
 *
 * Now instead of invoking the inner() function, we'll return the inner() function and assign it to a variable.
 */

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
let fn = outer();
fn();
fn();

/**
 * ---Output---
 * 1
 * 2
 *
 * How does it happen?
 *
 * ---Working---
 *
 * The 1st line to execute is line 37, where outer() function is invoked and the reference to the inner() function
 * is assigned to variable fn. This fn is called a closure.
 *
 * In C++/Java, what happens is as soon as outer() function is executed, the variables declared inside its scope are inaccessible.
 * But in JS, the inner functions can access the variables declared in its scope(i.e., scope of the inner function).
 * Since, counter variable is asked in inner() function, JS searches for counter variable in inner() function first.
 * As it is not present there, JS moves to function's scope to search for the variable, where it finds the variable.
 *
 * => The counter variable is a part of inner() function's LEXICAL ENVIRONMENT(i.e., scope of the inner function).
 *
 * Now, reference to the inner function + its lexical envrionment is assigned to the variable fn.
 * fn remembers the variable counter even though outer() has finished execution and is destroyed.
 * So when we call the fn() twice, it increments the counter variable twice, hence the output.
 *
 * >>> Next up - *****Function Currying*****
 */
