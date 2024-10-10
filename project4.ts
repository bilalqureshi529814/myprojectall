// currecy  converter

import inquirer from "inquirer";
 
let currency : any ={
    USD : 1,  //base currency
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR: 280
};
let User = await inquirer.prompt(
   
    [ 
        {
    name:"from",
    message:"Enter from currency",
    type:"list",
    choices:<any>["USD","EUR","GBP","INR","PKR"]
  },{
    name:"to",
    message:"Enter to currency",
    type:"list",
    choices:<any>["USD","EUR","GBP","INR","PKR"]
 
  },{
    name:"amount",
    message:"Enter your amount",
    type:"number"
  }
     ] 
 )
 let fromAmount = currency [User.from]
 let toAmount = currency[User.to]
 let amount = User.amount

 let baseAmount = amount/fromAmount
 let convertedAmount = baseAmount * toAmount
 console.log(Math.round(convertedAmount));

 
