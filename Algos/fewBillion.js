//returns the reward
function reward(days){
	var sum=1;

	if(days>1){
		for(var x=1; x<days; x++){
		sum*=2
		}
	}else if(days==0){
		sum=0;
	}
	//sum is in cents so convert to dollars
	sum/=100;
	console.log(sum);
}
reward(1); //.01
reward(2); //.02
reward(4); //.08
reward(0); //0
reward(30);//5,368,709.12


function days(rewardInDollars){
	var days=0;
	while(rewardInDollars>.009){
		days+=1;
		rewardInDollars/=2;
	}
	console.log(days);
}
days(.01);//1
days(.08);//4
days(5368709.12);//30
days(0);//0
days(1000000)//27





