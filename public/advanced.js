// JS variable scope (has 3 scopes)
//global
//function - var is a function scope
// block - let is a block scope

// function myfunc(){
//     k = "myfunc_global"
//     var v = "myfunc_var";
//     let le = "myfunc_let";

//     // this prints out bc 'v' is in the scope of the function
//     console.log(v);
//     // prints out bc 'le' is in the scope of the block
//     console.log(le);

//     // test to see if i still exists using both var and let
//     //var will exsist until this function exits
//     // let will exisit until the for loop stops / block scope exits
//     for(var i = 0; i < 10; i++){
//         console.log(i);
//     }

//     // after test, the i will print bc it was declared in this function
//     // only if using the var function
//     // console.log(i);
// }

// // for testing the global, function, and block scopes
// // k is global, var is function, and le is for certain blocks
// myfunc();
// console.log(k);



// this whole thing tested and showed the call stack and event loops
// shows the order of execution
// not for callbacks
// var cb1 = ()=>{console.log("cb1");}
// var cb2 = ()=>{console.log("cb2");}

// console.log("start....");
// // give a function to be run after certain # of ms
// // cb1 is run after 1 second
// setTimeout(cb1, 1000);
// // cb2 is run after .5 seconds
// setTimeout(cb2, 500);

// console.log("end...");