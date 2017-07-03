function printRange(start,end,skip){


	if(skip==undefined || skip==null){
		skip=1;
	}
	
	for(var x=start; x<end; x+=skip){
		console.log(x);
	}
	
}

printRange(2,10,2);
printRange(1,10,1);
printRange(1,10,3);