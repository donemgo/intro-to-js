// logical operators are also a different type of operators, but what they help us achieve is unique when compared to the other comparators

// || OR . the "or" statement simply looks at two values and checks to see if one of them is true, if one is true it is satisfied, OR returns the first true it can find, if not it returns false.

const me = true;
const you = false;

me || you || console.log('I passed o');
// && AND . the "and" statement, unlike the OR is kind of stricter, it wants and needs all values to be true before it can allow you through. and would return the last true statement if it successfull, if not it returns false
const me = true;
const you = true;

me && you && console.log('I passed o');

// ! NOT .  we already saw a bit of this one in the previous exercises, this one simply switches a Boolean value to it's opposite
let aki = true;
aki = !aki;
console.log(aki); // you should see false;
