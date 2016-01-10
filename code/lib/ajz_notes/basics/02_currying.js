// the ability to call a function with fewer arguments than it is official
// defined with, and receiving a new function that can take the remaining arguments

// x is "remembered' via closure
var add = function(x){
  return function(y){
    return x + y;
  }
}

var match = curry(function(what, str){
  return str.match(what);
});

var replace = curry(function(what, replacement, str){
  return str.replace(what, replacement);
});

var filter = curry(function(f, ary) {
  return ary.filter(f);
});

var map = curry(function(f, ary) {
  return ary.map(f);
});

// notice how data operated on is last arg

// hasSpaces can now take in a string at any time and determine if it has spaces
var hasSpaces = match(/\s+/g)

// filter can now use hasSpaces with data to filter out items with spaces
filter(hasSpaces, ['has aspace', 'no_space'])

// now findSpaces is a portable function that can work on any list
var findSpaces = filter(hasSpaces);

// "preload" a function with args
// preloading args allows the general function to get more specific but still
// portable and used all around the app
//
// hidden benefit, anything that works on a single element can be applied to an
// array of those elements by applying 'map'

var getChildren = function(node){
  return node.childNodes;
}

var allChildNodes = map(getChildren)

//old way
var allTheChildNodes = function(arr){
  return _.map(arr, getChildren);
}

// currying is pure because for each input, it return the same output
// either a function expecting the remainder of the args, or the executed result
// depending on the input
//
// Note: Higher order functions: functions that can take functions as args (input),
// or return a function as output
