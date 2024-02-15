const myObject = 
{
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by apple"
}
for (const key in myObject) {
    //console.log(key); // only key prints here
    //console.log(myObject[key]); // only value prints here

    //console.log(`${key} shorcut is for -: ${myObject[key]}`);
}


const programming = ["js","ruby","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]); // keys are printed in case of arrays they are its index
}