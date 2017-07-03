function birthdayCountDown(daysTilBirthday){
	var birthdayMessage = "";

	if(daysTilBirthday >=30){
		birthdayMessage=`Woo hoo -- birthday is coming in ${daysTilBirthday} days!`
	}else if(daysTilBirthday<30 && daysTilBirthday >= 5){
		birthdayMessage=`So sad -- birthday is still ${daysTilBirthday} away.`
	}else if (daysTilBirthday < 5 && daysTilBirthday != 0){
		birthdayMessage = `HAPPY BIRTHDAY in ${daysTilBirthday} days.`
	}else if(daysTilBirthday === 0){
		birthdayMessage = `BIRTHDAY CELEBRATION TODAY!`
	}
	console.log(birthdayMessage);
}

birthdayCountDown(3);
birthdayCountDown(55);
birthdayCountDown(0);
birthdayCountDown(30);
birthdayCountDown(10);