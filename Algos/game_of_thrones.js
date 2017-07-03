$('document').ready(function(){

	function addHandlers(){
	$('img').click(function(){

		var house=$(this).attr("alt")
		var api_str=`https://www.anapioficeandfire.com/api/houses?name=${house}`
		//console.log(`house: ${house}`)
		//console.log(`apistr: ${api_str}`)
		$.get(api_str, function(data){
			//console.log(data)
			var len = data[0].titles.length
			for(var x=0; x<len; x++){
				//display name, words, and titles
				$('#display').html(`<h1>House Details</h1><p><span class="bold">Name:</span> ${data[0].name}</p><p><span class="bold">Words:</span> ${data[0].words}</p><p><span class="bold">Titles:</span> ${data[0].titles[x]}</p>`)
			}//end for
		}, 'json');

		
		//console.log(house)


		// var api_str=`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1e6fe42f5444d6c6708ab34f89bee55f`
		// $.get(api_str, function(data){
		// 	$('#display').html(`<h1>${city}</h1>`)
		// 	var temp=Math.trunc(data.main.temp*(9/5)-459.67)
		// 	$('#display').append(`<p>Temperature: ${temp}</p>`)
		// },'json');

	});
	}
	addHandlers()

});
