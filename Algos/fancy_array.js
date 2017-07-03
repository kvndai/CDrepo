function print_fancy_arr(arr, sym, reversed){
	
	if(!reversed){
		for(var x=0; x<arr.length; x++){
			console.log(`${x} ${sym} ${arr[x]}`)	
		}
		
	}else{
		for(var x=arr.length-1; x>=0; x--){
			console.log(`${x} ${sym} ${arr[x]}`)
		}
	}
}

//print_fancy_arr([1,2,3,4,5,6,7], "::",false);
//print_fancy_arr([1,2,3,4,5,6,7], "::", true);
//print_fancy_arr([1,2,3,4,5,6,7], "-->");