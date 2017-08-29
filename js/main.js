var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.909018, lng: 151.179694},
          zoom: 15
        });
      }


$('.infodiv').on("click", function(){
	if( $(this).find('.infotext').hasClass('infotextopen') ){
		$('.infotext').removeClass('infotextopen');	
	}
	else{
		$('.infotext').removeClass('infotextopen');
		$(this).find('.infotext').addClass('infotextopen');
	}
	
	// console.log("working")

});      


$("#goHome").fadeOut(0);

function scrollTo(sectionNumber){
  
   $('html, body').animate({
    scrollTop: $('#section' +sectionNumber).offset().top
   }, 2000);

}

$(window).on( 'scroll', function(){
  // console.log('events fired');
  
  // console.log($('#section3').offset().top < 100);
  
  if( $(window).scrollTop() > $('#section3').offset().top){
    $("#goHome").fadeIn(1000);
  }else{
    $("#goHome").fadeOut(1000);
  }
});

// scream on hover

var beepOne = $("#beep-one")[0];
$("#rimshot-hover-sound").mouseenter(function() {
    beepOne.play();
  });

var rimShotAudio = document.getElementById("beep-one");

// item.addEventListener('mouseover', rimShotAudio.playRim, false);

var beepTwo = $("#beep-two")[0];
$("#rimshot-hover-sound-two").mouseenter(function() {
    beepTwo.play();
  });

var rimShotAudioTwo = document.getElementById("beep-two");

// item.addEventListener('mouseover', rimShotAudioTwo.playRim, false);




