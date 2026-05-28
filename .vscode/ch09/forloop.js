const animals = ["악어", "고얌미","공룡"];

for (let i = 0; i < animals.length; i++){
   console.log(animals[i])
};

for (let animal of animals){
   console.log([animals])
}
const  str = "문자열";
for (let c of str){
   console.log([c])
}

 const obj ={
    name:"최민준",
    age: 27 ,
 }
for (let key in obj){
   console.log(key + "," + obj[key]);
}
for (let key in animals){
   console.log(key + "," + animals[key]);
}