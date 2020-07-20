$(document).ready(function() {

   $("#hamburger").click(function() {
      $(this).toggleClass("active");
   })

   /*-- WORK SECTION COUNTERUP PLUGIN --*/
   $(".counter").counterUp({
      delay: 10,
      time: 2000
   });

   /*-- TESTMONIAL SECTION OWL CAROUSEL PLUGIN --*/
   $('#testimonialSection .owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      autoplay: true,
      responsive: {
         0: {
            items:1
         },
         768: {
            items:2
         }
      }
   });

   AOS.init({
      duration: 1000
   });

})
