$('document').ready(function(){


	$('button').click(function(){
		//fetch the input from the user
		var city = $('input').val();
		var api_str=`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2462029c5a115c42be0548a72f958f83`
		$.get(api_str, function(data){
			$('#display').html(`<h1>${city}</h1>`)
			var temp=Math.trunc(data.main.temp*(9/5)-459.67)
			$('#display').append(`<p>Temperature: ${temp}</p>`)
      console.log(data);
		},'json');

	});



});
