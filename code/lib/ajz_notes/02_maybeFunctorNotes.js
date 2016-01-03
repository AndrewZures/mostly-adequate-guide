// implementing the Maybe Functor

var Maybe = function(x) {
  this.__value = x;
}

Maybe.of = function(x){ return new Maybe(x); }

//determine if contained value is 'nothing'
Maybe.prototype.isNothing = function() {
  return this.__value === null || this.__value === undefined;
}

//only executes given function if contained value is not 'nothing'
Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}

//So Maybe is just like the basic container except that will not run the provided
//functtion if the contained value is 'nothing'
// note the layer of logic between the provided function and the value,
// and note that the logic lives on the container

var addOne = function(x){ return x + 1 };
console.log(Maybe.of(1).map(addOne))
console.log(Maybe.of(null).map(addOne))

// pointfree mapping
// map :: Functor f => (a -> b) -> f a -> f b
var map = curry(function(f, any_functor) {
  return any_functor.map(f);
})

// extracting the value - custom maybe (lowecase)
// maybe :: b -> (a -> b) -> Maybe a -> b

var maybe = curry(function(x, f, m) {
  return m.isNothing ? x : f(m.__value);
})

// note: can use maybe monad inherent 'nothing' value check to repesent an error
// using the maybe (lowercase) function
// maybe(defaultFailValue, successFn, MaybeMonad);
//return a static value monad is empty or run function on the contained monad value
