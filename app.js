setTimeout(() => {
  console.log("Timeout");
}, 0);

setImmediate(() => {
  console.log("Immediate");
});

var a = 2;
var name = "kathir";
console.log(a);
console.log(name);