$('document').ready(function(){

	function addHandlers(){
	$('button').click(function(){
		//fetch the input from the user 
		var city = $('input').val();
		var api_str=`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1e6fe42f5444d6c6708ab34f89bee55f`
		$.get(api_str, function(data){
			$('#display').html(`<h1>${city}</h1>`)
			var temp=Math.trunc(data.main.temp*(9/5)-459.67)
			$('#display').append(`<p>Temperature: ${temp}</p>`)
		},'json');

	});
	}
	addHandlers()

});
