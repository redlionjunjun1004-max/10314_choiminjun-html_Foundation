
const orderCoffee = function(num){
    
    console.log(`${num} 번쨰주문`)

const makeCoffee = function(){
    console.log(`${num}커피완성`);
};
setTimeout(makeCoffee, 5000);
}
for (let i = 1; i <=30; i++){
    orderCoffee(i)
}
