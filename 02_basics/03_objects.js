// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Usha",
  "full name": "Usha Dhamiwal",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "usha@google.com",
  isLoggedIn: false,
  lastLogginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "usha@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "usha@microsoft.com";

// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
