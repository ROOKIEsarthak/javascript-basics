// singleton - means one of a kind only 

// object literals

// Object.create() ----->   constructor method 

// -----> literal method 
// objects are defined on the basis of key:value pair


// symbol datatype

const mySym = Symbol("key1") // the name of this datatype is symbol
const mySym1 = Symbol("key1") // the name of this datatype is symbol

const jsUser = {        // declaring objects here 
    name: "ambivert",
    "full name": "hitesh Chaudhari",
    mySym:"Mykey1",
    [mySym1]:"mykey1",
    age: 18,
    location: "jaipur",
    email: "ambi@google.com",
    isLoggedIn : false,
    lastLoggedIn: ["Monday","Saturday"]
}   


console.log(jsUser["full name"]);
console.log(jsUser.age);
console.log(jsUser["age"]);
console.log(jsUser.lastLoggedIn[1]);
console.log(typeof jsUser.mySym);
console.log(jsUser[mySym1]);
console.log(jsUser);
