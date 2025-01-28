//1.PRIMITIVE DATATYPES:

let num1 =34;
   console.log(typeof num1);

 let empolyee="arun"
console.log(typeof empolyee);

let ispresent =true;
 console.log(typeof ispresent);

 let a;
  console.log(typeof a);

  let water =null;
   console.log(typeof water);
   
   //2.NON-PRIMITIVE TYPES:
        
let arr =[2,3,4,]
console.log(arr);
 console.log(arr[2]);
 
 
let obj ={
  name:"arun",
  id:34546,
  isempolyer:true,
};
 
console.log(obj);
  
obj.age=25
console.log(obj);//adding

obj.age=26
console.log(obj); //modifiying

obj.job="testor"
console.log(obj); //adding

obj.job="developer";
console.log(obj);//modifiying

delete obj.age;
 console.log(obj);// deleting

 delete obj.isempolyee;// deleting
console.log(obj);

console.log(Object.keys(obj)); //first keys will returns
console.log(Object.values(obj));//first value will returns
console.log(Object.entries(obj));//will returns want we insert in the curly brackets it will retuns as it

 

  

  