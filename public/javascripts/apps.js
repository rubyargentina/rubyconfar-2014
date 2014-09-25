$(document).ready(function() {

  // HOME - Speakers section
  var randomIndex, speaker, i;
  var speakers = $('#home section#speakers ul >li.main');

  for(i = 0; i < 5; i++) {
    randomIndex = Math.floor(Math.random() * speakers.size());
    speaker = speakers.splice(randomIndex, 1)[0];
    $(speaker).addClass( "show");
  }
  $('.show:last').addClass( "last");

  var arr = ['horseboy', 'erlich', 'woz', 'moss', 'staplerguy', 'trinity'];
  var character = window.location.hash.substr(1);

  if ($.inArray(character, arr)!==-1) {
    $('section#start').addClass(character);
  } else {
    var idx = Math.floor(Math.random() * arr.length);
    $('section#start').addClass(arr[idx]);
  }

  mainElementsHeight = function() {
    var wHeight = $(window).height();
    var windowWidth = $(window).width();
    $("section#start, .signal").height(wHeight);
    
    var characterWidth = $("img.character").width();

    $("img.character").css({'marginLeft' : characterWidth /-2});
    if ( wHeight < $("img.character").attr('height') ) {
      $("img.character").height(wHeight * 0.9);
    }
  }

  mainElementsHeight();

  $('#home nav').onePageNav({
    currentClass: 'active',
    scrollSpeed: 750,
    scrollThreshold: 0.2,
    easing: 'swing'
  });

  $('body:not(#home) nav li').removeClass('active');

  $("#home nav a.circle").click(function() {
    if ( $('#mobileMenuTrigger').hasClass('active') ) {
      $('#mobileMenuTrigger').click();
    }
  });

  // Mobile Navigation Trigger
  $('#mobileMenuTrigger').click(function(){
    $(this).next().slideToggle();
    $('section').toggleClass('fade');
    $(this).toggleClass('active');
    return false;
  });

  // Center trinity
  centerTrinity = function(){
    var Trinity =  $('img#matrix').width();
    $('img#matrix').css({'marginLeft' : Trinity / -2});
  }

  // Responsive Headlines
  $('section#start h1.trinity').fitText(
    1.2, { 
      minFontSize: '30px', 
      maxFontSize: '70px' 
  });

  $('section#start h1.moss').fitText(
    1.2, { 
      minFontSize: '40px', 
      maxFontSize: '90px' 
  });

  $('section#start h1.erlich').fitText(
    1.2, { 
      minFontSize: '47px', 
      maxFontSize: '90px' 
  });

  $('section#start h1.horseboy').fitText(
    1.2, { 
      minFontSize: '36px', 
      maxFontSize: '70px' 
  });

  $('section#start h1.staplerguy').fitText(
    1.2, { 
      minFontSize: '36px', 
      maxFontSize: '70px' 
  });

  $('section#start h1.woz').fitText(
    1.2, { 
      minFontSize: '40px', 
      maxFontSize: '90px' 
  });

  // Matrix
  var c = document.getElementById("c");
  var ctx = c.getContext("2d");

  //making the canvas full screen
  c.height = window.innerHeight;
  c.width = window.innerWidth;

  //chinese characters - taken from the unicode charset
  var chinese = "rubyconfargentina2014szstudios";
  //converting the string into an array of single characters
  chinese = chinese.split("");

  var font_size = 10;
  var columns = c.width/font_size; //number of columns for the rain
  //an array of drops - one per column
  var drops = [];
  //x below is the x coordinate
  //1 = y co-ordinate of the drop(same for every drop initially)
  for(var x = 0; x < columns; x++)
    drops[x] = 1; 

  //drawing the characters
  function draw()
  {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    
    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for(var i = 0; i < drops.length; i++)
    {
      //a random chinese character to print
      var text = chinese[Math.floor(Math.random()*chinese.length)];
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i*font_size, drops[i]*font_size);
      
      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if(drops[i]*font_size > c.height && Math.random() > 0.975)
        drops[i] = 0;
      
      //incrementing Y coordinate
      drops[i]++;
    }
  }

  setInterval(draw, 33);  


  // Ruby Fun Day
  $('a.magnific-popup').magnificPopup({
    type:'iframe', 
    iframe: {
       markup: '<div class="mfp-iframe-scaler">'+
               '<div class="mfp-close"></div>'+
               '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
               '</div>', 
       patterns: {
           gmaps: {
               index: '//maps.google.',
               src: '%id%&output=embed'
           }
       },
       srcAction: 'iframe_src', 
     }
  });

});
$(window).load(function() {
  centerTrinity();
  if ( $('section#start').hasClass('trinity') ) {
    $('img#matrix').fadeIn(2000);
  }

  mainElementsHeight();

  // Cleans URL of dirty hashtag.
  // history.pushState("", document.title, window.location.pathname);  
  //

});

$(window).resize(function() {
	mainElementsHeight();

  // Hack for when closing Mobile Nav on Desktop and then enlarging window.
  var windowWidth = $(window).width();
  if (windowWidth > 500) {
    $('nav').attr('style', ''); // removes display: none
  }

  centerTrinity();
});

$(window).scroll(function(){
  var windowTop = $(window).scrollTop(); // returns number  

  if (windowTop > 120) {
    $('header .fist-logo').addClass('fixed');
  }
  else {
    $('header .fist-logo').removeClass('fixed');
  }  
  // console.log(windowTop);

});

