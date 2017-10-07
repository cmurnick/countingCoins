
var howMuch = prompt("How much do you have in your coin purse?");

var quarter = 25;
var dime = 10;
var nickel = 5;
var penny = 1;

function coinCounter (howMuch) {

	var howMuch = howMuch * 100;
	var whatLeft = howMuch;
  var coinPurse = {
  	quarters: '',
  	dimes: '',
  	nickels: '',
  	pennies: '',
  };
 
 coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;
 
 do {
	 	if (whatLeft >= quarter) {
	 		coinPurse.quarters = Math.floor(whatLeft / quarter);
	 		whatLeft = whatLeft % quarter;

	 	} else if (whatLeft >= dime) {
	 		coinPurse.dimes = Math.floor(whatLeft / dime);
	 		whatLeft = whatLeft % dime;

	 	} else if (whatLeft >= nickel) { 
	 		coinPurse.nickels = Math.floor(whatLeft / nickel);
	 		whatLeft = whatLeft % nickel;

	 	} else if (whatLeft >= penny) {
	 		coinPurse.pennies = Math.floor(whatLeft / penny);
	 		whatLeft = whatLeft % penny;

	 	} else {
	 			whatLeft =0;
	 	}

} while (whatLeft > 0);	

return coinPurse;

}



 var coins = coinCounter(howMuch);
  console.log(coins);






