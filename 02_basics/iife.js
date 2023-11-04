// Immediately Invoked Funtions Expressions (IIFE)
// Global scope ke variable and polution ko hatane ke liye IIFE ka use karte hai and for run immediatly
// IIFE is used when we want to protect our code from global variables and populations.

(function code() {
  // named iife
  console.log(`DB is connected`);
})();

((name) => {
  // simple iife
  console.log(`DB is connected again ${name}`);
})("Manisha");
