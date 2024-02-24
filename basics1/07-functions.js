// callback functions explained

function fetchData(callbackFuncAsParameter){ 
    
    // here the smaller function that is giveData() is passed as reference parameter to the bigger function fetchData()

    setTimeout(()=>{

        const data = " Hello World !!"
        callbackFuncAsParameter(data) // here the smaller function which was passed as a reference is actually executed 
        // execution of a function
        
    })
}

function giveData(data){ // this is the smaller function which is passed as an arguement to fetchData()
    console.log(" Given data is -:",data);

}

fetchData(giveData)


// here the fetchData() is the higher order function which accepts smaller function as an arguement and return the output