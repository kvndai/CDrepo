//recursive_fibanacci

function fib(val){
	if(val==0){

	}
}

function rBinStr(str, i=0){
	if(i>=str.length){
		console.log(str);
	}
	if(str[i] != '?'){
		rBinStr(str, i+1)
	}else{
		//build the string to that character string and add 0 or/and 1
		//can use slice
		str1=buildStr(i, 0);
		str1=buildStr(i, 1);
		rBinStr(str1, i+1)
		rBinStr(str2, i+1)
	}

}
//return does 2 things; breaks out of the function and returns whatever (undefined by default)