function count(i, x=i+i){
	
	if(i>=x){
		return;
	}
	console.log(i);
	return(count(++i, x));
}

var c=count(3)
//console.log(c)

function count(i, x=i+i){
	
	if(i>=x){
		return;
	}
	//console.log(i);
	return(count(++i, x));
}

//var c=count(3)
//console.log(c)
function countBack(x,y){
	if(x<=y) return 
		//console.log(x)
		return countBack(--x,y)
}

//countBack(10,5

function sigma(x, sum){
	if(x===0){
		return sum;
	}
	sum+=x
	console.log(sum)
	return sigma(--x, sum)
}

//var s = sigma(3, 0)
//console.log(s)

function sigma_2(num){
	if(num<=1){
		return 1;
	}else{
		return num+sigma_2(num-1);
	}
}

console.log(sigma_2(3))