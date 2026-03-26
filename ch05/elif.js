const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("점수입력", function (score){


    let result = null;
    if (score >= 90 && score<=100){
        result = "winner";
    }   else if (score >= 60 && score<90) {
        result = "winner";
    }else if (score >=0 && score,60) {
        result = "no";
    } else {
        result = "갑유호 x";
   console.log(result);
      }  rl.close();
});