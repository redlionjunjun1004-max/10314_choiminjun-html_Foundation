function solution(num_list) {
    let even = 0;
        for (let i = 0; i <num_list.length;i++){
        if (num_list[i] % 2 == 0) {
            even++;
        }  
      }
      return[even, num_list.length -even];
}
console.log(solution([1,2,3,4,5]));

function solution(my_string, letter) {
    let a = '';

    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] !== letter) {
            a += my_string[i];
        }
    }

    return a;
}
const b = [1,2,3,4,5]
console.log(solution(b))

function solution(numbers) {
    let num1 = 0;
    let num2 = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > num1) {
            num2 = num1;
            num1 = numbers[i];
        } else if (numbers[i] > num2) {
            num2 = numbers[i];
        }
    }

    return num1 * num2;

}
const a = [1,2,3,4,5]
console.log(solution(a));

function solution(money) {
    let cup = 0;

    for (; money >= 5500; ) {
        money -= 5500;
        cup++;
    }

    return [cup, money];
}
const c  = solution(15000)
console.log("커피잔수:", c[0])
console.log("거스럼돈:", c[1])
