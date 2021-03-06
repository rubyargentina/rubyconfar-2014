
$(document).ready(function() {
  
  $('#sponsors ul').bxSlider({
    controls: false, 
    mode: 'fade', 
    pager: false, 
    auto: true, 
    speed: 1000
  });

  function updateFeed() {
    twitterFetcher.fetch({
      "id": '524692224211042304',
      "domId": 'twitter',
      "maxTweets": 5,
      "enableLinks": true,
      "showImages": true
    });
    setTimeout(updateFeed, 60000);
  }

  updateFeed();

  $('.talk h1').fitText(
    1.2, { 
      maxFontSize: '65px' 
  });

  $('.talk h2').fitText(
    1.6, { 
      maxFontSize: '36px' 
  });

});

