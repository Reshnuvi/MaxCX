$(document).ready(function() {
     
      $("#customers-testimonials").owlCarousel({
     
    loop: true,
		items: 3,
    margin: -40,
		autoplay: true,
    nav:true,
        stagePadding: 30,
		autoplayTimeout: 2500,
		smartSpeed: 450,
  	navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1170: {
				items: 3
			}
    }
        
      });
     
    });