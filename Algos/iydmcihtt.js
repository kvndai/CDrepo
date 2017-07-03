function time(hour, min, per){
	var hour=hour
	var minute=min
	var period=per
	var minute_text = ""
	var period_text = ""

	if(minute<30){
		minute_text="just after";
	}else if(minute>30){
		minute_text="almost";
	}else{
		minute_text="";
	}

	if(period==="AM"){
		period_text="in the morning"
	}else{
		period_text="in the evening"
	}
	
	console.log(`Its ${minute_text} ${hour} ${period_text}`);
}
