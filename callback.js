function task(callback){
  console.log("class &object task given")
  
setTimeout(() => {
  console.log("task for laptop,car is assigned and once done will move");
  callback();

}, 3000);

 }
  
function nexttopic(){
  console.log("nexttopic is promises");
}
 
task(nexttopic);

