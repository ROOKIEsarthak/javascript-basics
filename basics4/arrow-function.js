
//-------> ( rest operator )

const calculateCartPrice = (...num) => {
    return num
}
// ----> the (...num) means that the parameter num has multiple values in it and
// ((...) #rest )operator is used to bundle all these values together and pass them 
// returns the value combined in an array

console.log(calculateCartPrice(200 , 400 , 500)); // output [200,300,400]


const calculateCartPrice1 = (val1 , val2 , ...num1)=>{
    return num1
}
// val1 and val2 will have values 200,300 and the rest of the values will go to num1
// this is why it is known as rest operator as it combines the leftover value and 
// returns it as a single entity .
console.log(calculateCartPrice1(200 , 300,400,5000,600013,1324 )); // output [400,5000,600013,1324]


        // ---------> (this) keyword
        
        //keyword(this) is used to refer current context(values)
        // i.e. can be inside an object/function
        // . All it means that whenever we refer to 
        // something that is currenty executing the code 
        // in a scope we use (this) keyword.

const user = {
    username:"Hitesh",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
//console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);

//     // ------->  keyword(this.) cannot be used solely in functions.
//     // they are to be used with objects
// }
// chai()


const chai = () =>{
    let username = "Hitesh"
    console.log(this.username);
    console.log(this);
}
chai()



// -----> arrrow functions

const addTwo = (num1 , num2) =>{

    return num1+num2

}
console.log(addTwo(3,4));


const addTwo1 = (num1 , num2) => num1+num2   // ----> implicit return
const addTwo3 = (num1 , num2) => (num1+num2)  // ----> parenthesis used no return req
const addTwo4 = (num1 , num2) => {return num1+num2}  // ----> curly braces used return required

const addTwo5 = (num1 , num2) => ({username:"hitesh"})  // ----> parenthesis used return required when an object is passed 
console.log(addTwo5(3,4));

