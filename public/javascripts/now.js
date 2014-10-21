
$(document).ready(function() {
  
  $('#sponsors ul').bxSlider({
    controls: false, 
    mode: 'fade', 
    pager: false, 
    auto: true, 
    speed: 500
  });

  twitterFetcher.fetch({
    "id": '524692224211042304',
    "domId": 'twitter',
    "maxTweets": 5,
    "enableLinks": true,
    "showImages": true
  });
});

