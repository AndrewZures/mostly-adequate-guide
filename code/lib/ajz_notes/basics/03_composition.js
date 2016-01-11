// compose defined
// f and g are functions, x is value being piped through them
var compose = function(f,g){
  return function(x){
    return f(g(x));
  }
}

// example
// instead of running inside to outside, we run right to left
var toUpperCase = function(x){ return x.toUpperCase(); }
var exclaim = function(x) { return x + '!'; }

//composition is associative
//associative means it doesn't matter how you group / associate them, the
//result will be the same
var associative = compose(f, compose(g, h)) === compose(compose(f,g), h);

//because composition is associative, we can write a variadic function that takes
//N number of function and compose all of them together

// since composition is associative, can break out pieces of the composition logic
// for the same of readability logic
var last = _.compose(head, reverse)
var LastCount = _.compose(length, last)

// pointfree style means never directly referencing your data

// not pointfree since data (word) is referenced
var snakeCase = function(word) {
  return word.toLowerCase().replace(/\s+/ig, '_');
}

// pointfree since data in never referenced
var snakeCase = _.compse(replace(/\s+/ig, '_'), toLowerCase);

//point free allows us to keep things precise and generic


// Category Theory
// generalized concepts surrounding numerous more specific branches of mathematics
// including Type theory, Set Theory, Logic...
//
// generalized concepts found in Category Theory
// 1. a collection of object
//    object with a data type e.g. String, Boolean
//    often viewed as set of all possible values for that data type e.g. Boolean as set [True, False]
// 2. a collection of morphisms
//    method of transforming data, in this context it would be pure functions
// 3. a notion of the composition of morphisms
//    the ability to compose functions together to build results
// 4. a distinguished morphism called identity
//    a special function tah returns what it is given, basically like a value but has the
//    container api necessary to be able to be used with function composition
