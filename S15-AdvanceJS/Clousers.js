function outer() {
  var x = 10;

  function inner() {
    console.log(x);
    var y = 30;
  }

  inner();
  //   console.log(y); invalid
}

outer();
