// functions are basically a way of repeating logic, that is it, that is just it. now this sounds a lot like what we talked about in conditionals, but functions allow us do so much more.

// functions can be called multiple times

const consoleLogList = function(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
};
consoleLogList([1, 3, 4, 5, 5]);

// When we declare a function it is different from a statement, the function would only be run when you call it, so yea. if you delcare a function and want it to run, you have to call it.

// let us talk about how we define and make use of variables within a function, let us talk about SCOPE.
// variables defined inside a function can only be used withing that function
