// var a = window.prompt("tell me your name", "Name"); /*ask user for their name, default to NAME if none given */
// window.alert("Hello " + a); /*show on the screen via popup */

//func1(1,2,3);


// function func1(a,b,c){
//     console.log(a+b+c);
// }

// var func2 = function(){
//     console.log("hello world");
// }
//func2();


//-- arrays
// function asc(a,b){
//     return a-b;
// }

// var arr = [10,22,13,54,5,69];
// arr.sort(asc);
// // for(item in arr){
// //     console.log(arr[item]);
// // }

// /**return true or false, only if all values in the array has it*/
// var x = arr.every(function(val){
//     return val > 3;
// } );

//console.log(x);






// --objects

//working with one object
// var person = {
//     firstname: "Bob",
//     lastname: "Smith",
//     id:5555,
//     fullname: function(){
//         return this.firstname + " " + this.lastname;
//     }
// }

// //working with a class of objects
// function Person(f,l,i,a){
//     this.firstname = f;
//     this.lastname = l;
//     this.id = i;
//     this.age = a;
// }


// -- event handlers
function runcommand(){
    document.getElementsByTagName("h1")[0].innerHTML = "ADD USERS";
}

document.getElementById("button").onclick = runcommand;
// document.getElementById("button").onclick = function(evt){console.log(evt.clientX + " " + evt.clientY)};
//document.getElementById("button").onclick = = (evt)=>{console.log("hello")}; //faster way of showing a function

//-- event listeners (listening to event and applying it or smt)

//listen for the click event and when it does happen, spit out to the console 
document.getElementById("button").addEventListener('click',(evt)=>{console.log("hello")});
document.getElementById("button").addEventListener('click',(evt)=>{console.log("world")});

//when you press a key, say on the console what key you pressed
window.addEventListener('keypress',(evt)=>{console.log(evt.keyCode)});
