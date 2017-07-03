window.onload = function(){
var years=[];
for(var i=1975; i<2017; i++){
	years.push(i)
}
var yearMaker = document.getElementById('year');
for(year in years){
	yearMaker.innerHTML+= '<option value="hi">'+years[year]+'</option>'
}
};