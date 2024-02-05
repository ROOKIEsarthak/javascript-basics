console.log('2' > 1); //true
console.log('02' > 1); // true -> javascript implicitly converts string '02' to number 2 and then compares to give the answer


console.log(null > 0); // false
console.log( null == 0 ); // false

console.log(null >= 0); // gives true as answer

// it happens because the comparison operators ie (> , < , >= , <=) 
//convert null to a number , treating it as 0 , 
//which is not the case with equality (==) operator 


console.log(undefined == 0); //false
console.log(undefined > 0); //false 
console.log(undefined < 0); //false
console.log(undefined >= 0); //false


// strict check operator (===) checks the value as well as the datatype while comparing
console.log('2'===2); //false
console.log(null === 0); //false