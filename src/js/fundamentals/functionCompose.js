var compose = function(...fns) {
  return function(val) {
    return fns.reduce(function(x, fn) {
      return fn(x);
    }, val);
  };
};

var f1 = x => x.toLowerCase();
var f2 = x =>
  x
    .split("")
    .reverse()
    .join("");
var f3 = x => x + "!";

var composedFn = compose(
  f1,
  f2,
  f3
);
console.log(composedFn("Hello"));
