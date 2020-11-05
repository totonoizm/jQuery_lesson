
API_KEY = "bf76b09949653cadc3875e41049a5bdf"

$(function(){
  $('#btn').on('click', function(){
//  ユーザーが入力してきた都市名でWEBAPIに天気情報をリクエスト
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function (data){
    }).fail(function(data){
    });
  });
});