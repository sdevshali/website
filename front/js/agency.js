/*
// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict
function initMap() {
   var myLatLng = {lat:45, lng:15.552022};
   var swedenlatlng = { lat:60.822894, lng:15.552022};
   var noidalatlng = {lat: 28.5169831, lng:77.2576991};
   var map = new google.maps.Map(document.getElementById('map'), {
       center: myLatLng,
       scrollwheel: false,
       zoom: 2
   });

   // Create a marker and set its position.
   var marker = new google.maps.Marker({
       map: map,
       position: swedenlatlng,
       label: 'Sweden'
   });
   // Create a marker and set its position.
   var marker = new google.maps.Marker({
       map: map,
       position: noidalatlng,
       label: 'Noida'
   });
}

*/
