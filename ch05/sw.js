const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("num입력", function (num){
switch (parseInt(num)){
            case 1:   
                console.log ("mom")
                break;
            case 2:
                console.log ("dad")
                break;
             case 3:
                console.log ( "sister")
                break;
            default:
                console.log ("x")
                break;
            
            }

    rl.close();
});