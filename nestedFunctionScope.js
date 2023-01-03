let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}
outer();

/*
---Nested Function Scope---

From the view point of JS engine -

JavaScript looks up values of a, b, c in log statement. 
It starts with variable c. If c is defined in inner() function scope, the value of c is logged in terminal.

Next, it looks for variable b in inner() function. Since it's not present in inner(), JS goes one level up
and searches for b in the outer() function scope. Here, the value of 20 is logged.

Similarly for variable a, JS searched for it in inner(), doesn't find it; goes one level up and searches it 
in outer() function, doesn't find it there also. Now it again goes one level up in the global scope and 
finds variable a there. Now 10 is logged in the terminal.

=> This is an example of lexical scoping which describes how JS resolves variable names when functions are nested.

=> When functions are nested, JS variable lookup starts from the innermost function, where we are trying to access those 
variables, and moves outwards until it reaches the global scope.

=> The inner() function will have access to all the variables in its scope(Its scope being all the variables inside the 
outer() function.)

>>> Next up - *****Closures*****

*/