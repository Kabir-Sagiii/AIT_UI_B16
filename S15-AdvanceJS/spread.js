var user = {
  name: "raj",
  city: "hyd",
  gender: "male",
  email: "raj@gmail.com",
};

var anotherUser = {
  ...user,
  name: "Rohan",
  email: "rohan@gmail.com",
};

// console.log(user);
// console.log("---------------------------");
// console.log(anotherUser);

var arr = [10, 20, 30, 40, 50];

var data = ["Hello", ...arr, "Hi"];

console.log(arr);
console.log("---------------------------");
console.log(data);
