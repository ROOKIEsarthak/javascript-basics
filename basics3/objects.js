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


const tinderUser = {
    id: "123abc",
    name:"sammy",
    isLoggedIn:"false",
}

// console.log(jsUser["full name"]);
// console.log(jsUser.age);
// console.log(jsUser["age"]);
// console.log(jsUser.lastLoggedIn[1]);
// console.log(typeof jsUser.mySym);
// console.log(jsUser[mySym1]);
// console.log(jsUser);


// combining objects using spread(... operator)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {...obj1,...obj2}

//console.log(obj3);


const users = [
    {
        id:1,
        email:"user@gmail.com",
    },
    {
        id:1,
        email:"user@gmail.com",
    },
    {
        id:1,
        email:"user@gmail.com",
    },
    {
        id:1,
        email:"user@gmail.com",
    },
    {
        id:1,
        email:"user@gmail.com",
    },
    {
        id:1,
        email:"user@gmail.com",
    },
]

//console.log(users[1].email)

// console.log(tinderUser);
// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(users));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));




// ---->> Desctructuring of objects

const course = {
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor,price,courseName} = course
const {courseInstructor:instructor} = course



console.log(courseInstructor);
console.log(instructor);


// example of destructuring in react

// here company object is descrutured in navbar component ,
//so the elements inside object will be available in the function .


// ------> passing objects as props
const Navbar = ({company}) =>{
    const {name} = company
    console.log(name);
}

Navbar({company:"Hitesh"})
