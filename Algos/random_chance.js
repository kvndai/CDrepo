function randomChance(numOfQuarters){
	var response = prompt('Please choose a number from 1-100');
  console.log(`${response}`)
	for(var x=1; x<=numOfQuarters; x++){
		if(response === (Math.random()*100)){
			var winnings=Math.floor(Math.random()*50)+51;
			return(`Congratulations! You have won ${winnings} quarters. You have ${winnings+(numOfQuarters-x)}.`)
		}
	}
	return 0;
}

console.log(randomChance(500))

//console.log(Math.floor(Math.random()*50)+51)
//console.log(Math.trunc(Math.random()*100))