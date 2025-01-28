// function without parameter or function declaration or hoisting:
greeting();

 function greeting(){
    console.log("gud evening");
 }
 greeting();

//function with parameter:
 
function clg(a){
console.log(a);
 }
 clg("suguna collage of enginerring");
 
// function with two or more parameter:

 function add(num1,num2){
    console.log(num1+num2);  
 }
 add(34,45)

// function with return parameter:

 function sub(a,b){
    console.log("before return");
    return a-b;
 }

let ans=add(44,56){
    console.log("before return");
    return a+b;
}
    
    
    
// function experssion :

let d=function box(){
    console.log("this is expression function");    
}
d();

// arrow function or anonymous function ===function without its name so it is assigined to a variable :

let k=()=>{
    console.log("this is an arrow function");   
}
k();

 let single =()=>
    console.log("this is arrow function or single expression or no needs of block");
 single();
 
// task arrow function with  parametre and aruguments  or immediate invoke function expression (IIFE):

(function pen(){
    console.log("this is arun pen ");
})();  

(function express(lover) {
    console.log("my fav person in my life is "+ lover);
})("rithanya");


