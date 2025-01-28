// operators --> used to perform some operations on data 
// types ---> arithmetic,assigiment,comparision,strict,logical,ternary
//  1.ARITHMETIC OPERATION (+,-,/,%,++,--,)--and modulus,exponentiation,incrementand decrement:

var a=23;
 var b =45;
 console.log(a+b);
 console.log(a-b);
 console.log(a*b);
 console.log(a/b);
 console.log(a%b);
 console.log(a**b);
 console.log(a++);//print a= =23 a=23+1=24//post increment  
 console.log(a--);//print a=23 then a=24-1=23
 console.log(b++);//a=23+1 then print a=24
 console.log(b--);//a=24-1 then print a=23

// 2.ASSIGNMENT OPERATOR (+=,-=,*=,/=,%=,**=): 

 var a=23;
 a +=1;    //a=a+1
console.log(a);
a-=2 //a=a-2>>a=4=2>>a=2
console.log(a);
a*=3
console.log(a);
a/=4
console.log(a);
a%=5
console.log(a);
a**=6
console.log(a);

//3.COMPARISION OPERATOR (<,>,<=,>=): 

var a=10;
var b=23;
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);

// 4.STRICT(==,===):
var a=54;
var b=54
console.log(a==b); //checks only the values >>true 
console.log(a===b);//checks the both the values and datatypes>>false 

// 5.LOGICAL (&&,//,!)---AND.OR.NOT:

var a=76;
var b=66;
console.log(a !=b); //true 

var a=76;
var b=87;
console.log(a !==b); //true

// 6.TERNARY OPERATOR:
// SYNATX>>(CONDITION)?"TRUE_VALUE STATEMENT":"FALSE_VALUE STATEMENT"

var age =34;
var arun=(age <=30 &&age==30)?"ELIGIBLE":"not eligible "
console.log(arun);

 let fees=30000;
const check=(fees<=15000)?"class start":"class ends"
console.log(check);






 
 
 
 
 
 
 
 
