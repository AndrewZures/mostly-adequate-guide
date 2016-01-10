// a pure function is a function that, given the same input, always returns the
// same output, and has not visible side-effects
// slice versus splice (splice mutates the data)
//
// focus of pure function is dependencies and side-effects
// what are dependencies of function?
//   if they can (secretly) change then the function is impure, since that change
//   could mean that the same input does not return the same output
//
// impure function can increase complexity since have to consider a bunch of non-obvious
// dependencies

// impure, since function relies on non-injected min var
var min = 21
var checkAge = function(age) {
  return age >= 21
}

// pure since min dependency is injected (always same result when same input)
// see how injecting arg makes function pure
var checkAge2 = function(age, min) {
  return age >= 21
}

// defining SideEffects -> something that happens in the function's
// computation other than calculation the returned result
//
// side effects list:
//  changing the file system
//  inserting a record into a DB
//  making an http call
//  mutations
//  printing to the screen / logging
//  optaining uer input
//  querying the dom
//  accessing system state
//
//
// TRICK: a function is pure even if it return an impure function, so long as
// the (1) input / output rule holds and the (2) side-effects rule holds


// in mathematics, a function is a special relationship between values, every input can be
// mapped to exactly one output, the outputs do not need to be unique
// think of an impure function as violating this, since a given imput could be mapped to
// more than one output
//
// pure function are also stronger abstractions than impure functions since there is no
// need to worry about implementation details
//
// Benefits of Pure Functions:
//  (1) easier to reason about (since no concerns for unseen deps / side-effects) : referential transparency
//  (2) cacheable (since a given input always results in same output)
//  (3) portable, self-documenting (since all required args are injected and no side-effects)
//  (4) testable, dep injection is easier to hard mocks, and no side-effects === easier testing as well
//  (5) parrellelizable, since no side effects and only uses params, no race conditions, shared state
