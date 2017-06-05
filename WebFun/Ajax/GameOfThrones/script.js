$('img').on('click',function(){
  $(this).attr("id")
  $.get('https://www.anapioficeandfire.com/api/houses/${id}',function(data){
    console.log(data);
    var houseName = data.name;
    var houseWords = data.words;
    var houseTitles = data.titles;
    $('.details').append('<p>Name: '+houseName+'</p><p> Words: '+houseWords+'</p><p>Titles: '+houseTitles+'</p>')

  },'json')
})
