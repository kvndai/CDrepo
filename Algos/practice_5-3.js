// function that takes two numbers 
// verify they are numbers and are present -- error out
// add together and store in another variable
// change the variable to a string
// return the first character of the string

function practice(num_1, num_2){
	var str="";
	var sum=0;
	var test1;
	var test2


	if(num_1==undefined || num_2==undefined){
		return `You need to input 2 numbers, please.`;
	}else if(typeof num_1 != 'number' || typeof num_2 != 'number'){
		return `Please enter numbers.`;
	}else{
		sum=num_1+num_2;
		str=sum.toString();
		return(str[0]);
	}	
}

console.log(practice(1,1));
console.log(practice("1",1));
