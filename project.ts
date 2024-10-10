// number gueessing game


import inquirer from "inquirer"

// 1) computer will generate a random number

// 2) user input for gussing number 

// 3) compare user input with computer generate number and show result

let randomNumber = Math.floor(Math.random() * 10 + 1) ; 


let ans = await inquirer.prompt([{

    name:"userGuessnumber",
    message:"please guess a number between 1-10?",
    type:"number"
}]);
console.log(ans)
if (ans.userGuessnumber === randomNumber ){
    console.log("Congratulation! you have guessted rigth.");
    
}
else{
    console.log("you have guessted wrong number.")
}
