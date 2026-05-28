//var 특징
//1.제정의 가능
//2.함수 스코프 
//스코프 - 유효한범위
 function functionScope() {
         if (true){
        var a = 15;
    }
     console.log(a);
 }

functionScope()
//let / const의 특징
//1. 제정의 불 ㄱㄴ
//2,let은 재할당 ㄱㄴ const는 불가
//3. 블럭 스코프
function blockScope() {
    if (true){
        var a = 15;
    }
    console.log(a);
}

blockScope();
//,let은 재할당 ㄱㄴ const는 불가
let alpha = 10;
alpha = 15;

const beta = 15;
beta = 20;
console.log(alpha+beta);