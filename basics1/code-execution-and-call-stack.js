// javascript execution context

/*

1-: Global execution context (GEC) - created first and stored in (this) keyword
in node environment (this) keyword globally has undefined value
but in server side (this) keyword return window object globally 

2-: Functional execution context(FEC) 

3-: Eval Execution Context

Javscript Code runs in 2 phases -:

# ----> Memory Creation Phase (MCP/MP) -: only space is allocated to all variables or whatever you've declared
# ----> Execution Phase -: all the operations like add,sub,multiply are done in this Phase

// eg Code

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1+num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)



Step1 ----> Global Execution allocated in (this) keyword .

Step2 ----> Memory Phase 

    # ----> FIRST CYCLE

            val1 = undefined
            val2 = undefined
            addNum ----> whatever is to happen in function goes into addNum here(function definition is done here)
            result1 ----> undefined
            result2 -----> undefined 

Step3 ----> Execution Phase

            val1 = 10
            val2 = 5
            addNum -> #executional context ( new variable environment + execution thread )

            after this again step2 and step3 are executed with all the above processes

            ----> Memory Phase
                val1 -> undefined
                val2 -> undefined
                total-> undefined

            -----> Execution Context
                num1 --> 10
                num2 --> 5
                total -> 15  ---> returned back to global executional context 
            
            (after this the #executional context is deleted)

*/



