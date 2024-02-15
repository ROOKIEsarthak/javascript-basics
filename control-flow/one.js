/* skipped the basic loops and condition concepts in JavaScript 

Conditional Statements 

if() , else()

looping statement

for , while , do while

*/


// for of loope

// ["","",""]
// [{},{},{},{}]

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    //console.log(num*2);
}
 

// can work on strings too

const greeting = " Hello World! "

for (const greet of greeting) {
    if (greet==" ")
    {
        continue
    }
    //console.log(`each char is ${greet} \n`); 
}


// Map function ---> non iterable using forin loop

const map = new Map()
map.set('IN',"India")
map.set('JPN',"JAPAN")
map.set('FR',"FRANCE")
map.set('IN',"India")

//console.log(map);


// ------> for of loop on map()

// for (const key of map) {
//     console.log(key); // prints the complete array
// }

for (const [key,value] of map) {  // [key,value] array is desctructured here
    console.log(key,"-:",value); // prints the key and value
}

// ---> for of loop on object

const myObject = {
    "game1":"NFS",
    "Game2":"Spiderman"
}
// ---> objects are not iterable using this method. 
// They are iterated using (forin)
for (const [key,value] of myObject) {
    //console.log(key,"-:",value);
}


