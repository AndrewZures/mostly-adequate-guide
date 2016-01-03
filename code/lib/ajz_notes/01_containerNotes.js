// container API


var Container = function(x) {
  this.__value = x;
}

Container.of = function(x) { return new Container(x) };

// container must be able to hold any type of value, including another container

//Container.of(3)
// => Container(3)
//
// Container.of(Container.of(3))
// => Container(Container(3))
//
// console.log(Container.of(3));
// console.log(Container.of(Container.of(3)));
//
// just like map but base map is on the container and result is another container
//funtion is on the container
// (a -> b) -> Container a -> Container b
Container.prototype.map = function(f) {
  return Container.of(f(this.__value));
}

// console.log(Container.of(4).map(function(x){ return x + 2 }));
// console.log(Container.of('flamethrower').map(function(x){ return x.toUpperCase() }))
// console.log(Container.of('bombs').map(function(x){ return x + ' away' }).map(function(x){ return x.length }))

// FUNCTORS ARE JUST CONTAINER APIES THAT IMPLEMENT THE MAP API
// we can compose executing map on a container
//
// the value we get is that the function application is abstracted away
// so WE don't have full control over the execution of the function over the
// Container's value, instead THE CONTAINER determines how (even if) to apply
// the function to the container value
//
