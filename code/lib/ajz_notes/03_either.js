// define the Functor
// Left and Right are subclasses of the abstract class Either
// Either is not defined here because it is not directly needed

var _ = require('ramda');
var curry = _.curry;
var moment = require('moment');

var Left = function(x) {
  return this.__value = x;
}

Left.of = function(x) { return new Left(x) }

// does nothing to value (keeps it in container)
Left.prototype.map = function(f) {
  return this;
}

var Right = function(x) {
  return this.__value = x;
}

// executes function on value (keeps it in container)
Right.prototype.map = function(f) {
  return Right.of(f(this.__value));
}

Right.of = function(x) { return new Right(x) }

const bee = function(x){ return 'b' + x }
console.log(Right.of('rain').map(bee))
console.log(Left.of('rain').map(bee))

// Left, does nothing (value is from error message)
// Right executes function on value and keep containerization (same as basic Container)
//

// example: get birthday or show some error
var getAge = curry(function(now, user) {
  var birthday = moment(user.birthday, 'YYYY-MM-DD');
  if(!birthday.isValid()) return Left.of("Birthday Blew Up");
  return Right.of(now.diff(birthday, 'years'));
})

// note that the resulting container can have a string or number as its underlying value
console.log(getAge(moment(), { birthday: '2005-12-12' }))
console.log(getAge(moment(), { birthday: '123412341234' }))
