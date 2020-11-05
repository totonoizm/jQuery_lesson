
API_KEY = "bf76b09949653cadc3875e41049a5bdf"

$(function(){
  $('#btn').on('click', function(){
//  ユーザーが入力してきた都市名でWEBAPIに天気情報をリクエスト
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + "bf76b09949653cadc3875e41049a5bdf",
      dataType : 'jsonp',
    }).done(function (data){
      $('#place').text(data.name);
      $('#temp_max').text(data.main.temp_max);
      $('#temp_min').text(data.main.temp_min);
      $('#humidity').text(data.main.humidity);
      $('#speed').text(data.wind.speed);
      $('#weather').text(data.weather[0].main);
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt", data.weather[0].main);
    }).fail(function(data){
      alert('通信に失敗しました。');
    });
  });
});