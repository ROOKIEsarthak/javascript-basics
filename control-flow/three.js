
// foreach loop for arrays


const coding = ["js","ruby","java","python","cpp"]

coding.forEach(index => {
    //console.log(index);
    
});


// const values = coding.forEach((Item,key)=>{
//     console.log(Item,"-:",key);
//     //return Item

// })
// console.log(values);


// # ----> Filter function

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum1 = myNums.filter((num)=> num > 4) // single line code no scope initialized
// ---> implicit return . 
// you donot have to use a return keyword to return the value to a variable.
// if the code is a single line

// const newNums = myNums.filter((num)=> {
//     return (num > 4)
// } ) // --> example of an explicit return . 
// You have to write return when using curly braces when the code is in multi line or
// using curly brackets as they imply that a scope has been create in a function
//console.log(newNums);


const books = [
    {title: "Book One" , genre:"Fiction" , publish: 1981 , edition: 2004 },
    {title: "Book Two" , genre:"Non-Fiction" , publish: 1992 , edition: 2006 },
    {title: "Book Three" , genre:"History" , publish: 1985 , edition: 2014 },
    {title: "Book Four" , genre:"Non-Fiction" , publish: 1941 , edition: 2014 },
    {title: "Book Five" , genre:"Science" , publish: 1921 , edition: 2002 },
    {title: "Book Six" , genre:"History" , publish: 1943 , edition: 2004 },
    {title: "Book Seven" , genre:"Science" , publish: 1987 , edition: 2003 },
    {title: "Book Eight" , genre:"Fiction" , publish: 1941 , edition: 2005 },

]

//const userBooks = books.filter((book)=>book.genre === "History")
let userBooks1 = books.filter((book)=>{

    return (book.publish >=1950 && book.genre==="History")
    
})


//console.log(userBooks);
console.log(userBooks1);



