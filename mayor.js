var num1=Math.floor(Math.random()*30)+1;
var num2=Math.floor(Math.random()*30)+1;
var num3=Math.floor(Math.random()*30)+1;

console.log(num1);
console.log(num2);
console.log(num3);

if(num1>num2 && num1>num3){
     console.log("el numero mayor es "+ num1);
}
else
if(num2>num1 && num2>num3){
     console.log("el numero mayor es "+ num2);
}
else{
console.log("el numero mayor es "+ num3);
}
