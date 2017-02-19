// Have you noticed those coin slides used by modern cash registers that automatically give the correct amount of change? Build a app that lets users enter an amount of dollars and cents and shows the smallest number of quarters, dimes, nickels, and pennies needed to make that change.

var bills = 0;
var quarter = 0;
var dime = 0;
var nickel = 0;
var penny = 0;
var userCoin = 0;
var userMoney = 0;

var makeChange = function(userCoin){
  if(userCoin > 0){
    if(userCoin / 25 >= 1){
      //Use Quarter
      quarter = Math.floor(userCoin / 25);
      makeChange(userCoin % 25);

    }else if(userCoin / 10 >= 1){
      //Use Dime
      dime = Math.floor(userCoin / 10);
      makeChange(userCoin % 10);

    }else if(userCoin / 5 >= 1){
      //use Nickel
      nickel = Math.floor(userCoin / 5);
      makeChange(userCoin % 5);

    }else {
      //use Penny
      penny = userCoin;
    }
  }
}

userMoney = prompt("Please input cash");
bills = Math.floor(userMoney);
userCoin = ((userMoney - bills) * 100).toFixed(0);
makeChange(userCoin);
alert("Bills: " + bills + " Quarter: " + quarter + " Dime: " + dime + " Nickel: " + nickel + " Penny: " + penny);
