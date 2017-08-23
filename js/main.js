var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2093},
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



