$(document).ready(function(){

	"use strict";

	new WOW().init();

	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(1200).fadeOut();
    $(".animationload").delay(1200).fadeOut("slow");	

	/* =================================
	NAVBAR 
	=================================== */
	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var batas = jQuery(window).height();
		var header = jQuery('#header');
		var windowW = $( window ).width();

			if ( top > 0 ) {
				$('.if-s').addClass('sticky');
			}else {
				$('.if-s').removeClass('sticky'); 
			}
	});

	/* =================================
	TO TOP 
	=================================== */
	var scroll = $(document).scrollTop();
	var toTop =  $('#back-to-top');

	/*-------------------------------------
	Top menu - fixed
	-------------------------------------*/
	jQuery(window).scroll(function () {
		var winTop = $(document).scrollTop();

		if(winTop >= 150){
			toTop.addClass("visible");
		}else{
			toTop.removeClass("visible");
		}
	})

	/* =================================
	COUNTER
	=================================== */
	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

	/* =================================
	VIDEO
	=================================== */
    var video = $('.video-wrap');
    if (video.length) {
      $(".overlay-image").on("click", function(){
        $(this).addClass("hide");
        $("#video-frame")[0].src += "&autoplay=1";
      });
    }

	/* =================================
	FAQ
	=================================== */	
	$(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
	    if (e.type=='show'){
	      $(this).addClass('active');
	    }else{
	      $(this).removeClass('active');
	    }
  	});  
	
	/* =================================
	SCROLL TO
	=================================== */
	$('.navbar-nav li a[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});
	$('a#back-to-top[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});	

	/* =================================
	MAGNIFIC POPUP
	=================================== */
	 $('.popup-with-zoom-anim').magnificPopup({
		type:'inline',
		fixedContentPos: false,
		removalDelay: 100,
		preloader: true,
		 mainClass: 'my-mfp-zoom-in'
	 });

	  $('.popup-image-zoom').magnificPopup({ 
	    removalDelay: 300,
	    type: 'image',
	    callbacks: {
		    beforeOpen: function() {
		       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));
		    }
	  	},
	  });

	  $('.popup-youtube').magnificPopup({
        type: 'iframe',
        callbacks: {
          	beforeOpen: function() {
       			this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));
    		}
  		},
    });

    /*====================
    FEAUTURES 1
    ====================*/
	$(".tab-header .tab-item").click(function() {
		if (!$(this).hasClass("active")) {
			var i = $(this).data('content');
			$(".tab-item.active").removeClass("active");
			$(".tab-header .active").hide().removeClass("active");
			$(this).addClass("active");
			$(i).fadeIn(700).addClass("active");
		}
	});

    /*====================
    PRICES TABS
    ====================*/
	$(".prices-tab-header .item-price").click(function() {
		if (!$(this).hasClass("active")) {
			var i = $(this).data('content');
			$(".item-price.active").removeClass("active");
			$(".prices-tab-header .active").hide().removeClass("active");
			$(this).addClass("active");
			$(i).fadeIn(700).addClass("active");
		}
	});

	/* =================================
	SWIPER SLIDER
	=================================== */
	var swiper = new Swiper('.swiper-testimonial-container-1', {
	 	slidesPerView: 3,
		fixedContentPos: true,
		removalDelay: 100,
	    pagination: {
	      	el: '.swiper-pagination',
	      	clickable: true,
	    },
	    autoplay: {
    		delay: 5000,
  		},
	    breakpoints: {
		    // when window width is <= 640px
		    992: {
		      slidesPerView: 1,
		    }
	  	},
	  	loop: 'true',
	  	grabCursor: 'true'	    
	});

	var swiper = new Swiper('.swiper-testimonial-container-2', {
	 	slidesPerView: 2,
		removalDelay: 100,
	    pagination: {
	      	el: '.swiper-pagination',
	      	clickable: true,
	    },
	    autoplay: {
    		delay: 5000,
  		},
	    breakpoints: {
		    // when window width is <= 640px
		    992: {
		      slidesPerView: 1,
		    }
	  	},
	  	loop: 'true',
	  	grabCursor: 'true'	    
	});

	var swiper = new Swiper('.swiper-testimonial-container-3', {
 		slidesPerView: 'auto',
		fixedContentPos: true,
		removalDelay: 100,
		autoplay: {
    		delay: 5000,
  		},	 	
	    breakpoints: {
		    992: {
 				slidesPerView: 1,
		    }
	  	},
	  	loop: 'true',
	  	grabCursor: 'true'	    
	});

	var swiper = new Swiper('.swiper-testimonial-container-4', {
 		slidesPerView: 2,
		fixedContentPos: true,
		removalDelay: 100,
		autoplay: {
    		delay: 5000,
  		},	 	
	    breakpoints: {
		    // when window width is <= 640px
		    992: {
		      slidesPerView: 1,
		    }
	  	},
	  	loop: 'true',
	  	grabCursor: 'true',
	    pagination: {
	      	el: '.swiper-pagination',
	      	clickable: true,
	    },	  	
	});

	var swiper = new Swiper('.swiper-testimonial-container-5', {
      	slidesPerView: 'auto',
      	centeredSlides: true,
      	spaceBetween: 30,
        autoplay: {
    		delay: 5000,
  		}, 	
	    breakpoints: {
		    // when window width is <= 640px
		    992: {
		      slidesPerView: 1,
		    }
	  	},
	  	loop: 'true',
	  	grabCursor: 'true',
	    pagination: {
	      	el: '.swiper-pagination',
	      	clickable: true,
	    },	  	
	});

	var swiper = new Swiper('.swiper-testimonial-container-6', {
      	slidesPerView: 1,
      	centeredSlides: true,
      	spaceBetween: 30,
        autoplay: {
    		delay: 5000,
  		}, 	
	    breakpoints: {
		    // when window width is <= 640px
		    992: {
		      slidesPerView: 1,
		    }
	  	},
	  	loop: 'true',
	  	grabCursor: 'true',
	    navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	    },	  	
	});

	var swiper = new Swiper('.swiper-partners-container-1', {
      	slidesPerView: 3,
      	centeredSlides: true,
		spaceBetween: 70, 
		autoplay: {
    		delay: 5000,
 		},	
	    breakpoints: {
		    1024: {
		      slidesPerView: 2,
		      centeredSlides: false,
		    },
		    991: {
		      slidesPerView: 3,
		      centeredSlides: false,
		    },
		    480: {
		      slidesPerView: 1,
		      centeredSlides: true,
		      		spaceBetween: 30, 
		    },		    
	  	},
	  	loop: 'true',
	  	grabCursor: 'true'	    
	});

	var swiper = new Swiper('.swiper-partners-container-2', {
      	slidesPerView: 5,
		spaceBetween: 30,
		autoplay: {
    		delay: 5000,
  		}, 	
	    breakpoints: {
		    // when window width is <= 640px
		    992: {
		      slidesPerView: 1,
		    }
	  	},
	  	loop: 'true',
	  	grabCursor: 'true'	    
	});

	var swiper = new Swiper('.swiper-screenshots-container-1', {
        effect: 'coverflow',
        grabCursor: true,
        initialSlide: 2,
        centeredSlides: true,
        loop: true,
        spaceBetween: 0,
        slidesPerView: 5,
	    pagination: {
	      	el: '.swiper-pagination',
	      	clickable: true,
	    },        
        coverflowEffect: {
            rotate: -5,
            stretch: -60,
            depth: 125,
            modifier: 4,
            slideShadows: false,
        },
        autoplay: {
    		delay: 5000,
  		},
        breakpoints: {
            992: {
                slidesPerView: 3,
            },
            480: {
                effect: 'slide',
              	slidesPerView: 2,
              	spaceBetween: 15,
              	centeredSlides: false,
            },  
            360: {
                effect: 'slide',
              	slidesPerView: 1,
              	spaceBetween: 15,
              	centeredSlides: false,
            },	            
        }					
	 });

	var swiper = new Swiper('.swiper-screenshots-container-2', {
		slidesPerView: 5,	
		spaceBetween: 15,
		autoplay: {
    		delay: 5000,
  		},
	    pagination: {
	      	el: '.swiper-pagination',
	      	clickable: true,
	    },		    	
		loop: 'true',
		grabCursor: 'true',
        breakpoints: {
            992: {
                slidesPerView: 3
            },
    		480: {
      			slidesPerView: 2,
    		},  
    		360: {
      			slidesPerView: 1,
    		},	
        },
	 });


	var swiper = new Swiper('.swiper-screenshots-container-3', {
		effect: 'coverflow',
		loop: true,
		centeredSlides: true,
		slidesPerView: 4,
		initialSlide: 3,
		keyboardControl: true,
		mousewheelControl: true,
		lazyLoading: true,
		preventClicks: false,
	    pagination: {
	      	el: '.swiper-pagination',
	      	clickable: true,
	    },
        breakpoints: {
            768: {
                slidesPerView: 3
            },
    		480: {
      			slidesPerView: 2,
    		},  
    		360: {
      			slidesPerView: 1,
    		},     
        },	    
		autoplay: {
    		delay: 5000,
  		},
		preventClicksPropagation: false,
		lazyLoadingInPrevNext: true,
		nextButton: '.swiper-button-next',
	   	prevButton: '.swiper-button-prev',
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 250,
			modifier: 1,
			slideShadows : false,
		}
	 });

	var swiper = new Swiper('.swiper-screenshots-container-4', {
		slidesPerView: 4,	
		spaceBetween: 15,
		autoplay: {
    		delay: 5000,
  		},
	    pagination: {
	      	el: '.swiper-pagination',
	      	clickable: true,
	    },		    	
		loop: 'true',
		grabCursor: 'true'			
	 });

	var swiper = new Swiper('.swiper-banner-container-1', {
		slidesPerView: 1,	
		spaceBetween: 0,
		autoplay: {
    		delay: 5000,
  		},	    	
		loop: 'true',
		grabCursor: 'true'			
	 });

	/* =================================
	WORDS ANIMATIONS
	=================================== */
	if ($(".tlt").length){
		$('.tlt').textillate({
		    minDisplayTime: 1000, 
		    loop: true
		});
	}

	/* =================================
	PARTICLES
	=================================== */
	$(window).load(function() {
		'use strict';
		var ini =  $(this);
		var currentheight =  ini.height();
		if(currentheight >= 600){
			/*banner*/
			if ($("#particles-banner-js").length){
				particlesJS("particles-banner-js", {
				  particles: {
				    number: {
				      value: 140,
				      density: { enable: true, value_area: 1000 }
				    },
				    color: { value: "#ffffff" },
				    shape: {
				      type: "circle",
				      stroke: { width: 0, color: "#000000" },
				      polygon: { nb_sides: 4 },
				      image: { src: "img/github.svg", width: 100, height: 100 }
				    },
				    opacity: {
				      value: 0.4,
				      random: true,
				      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
				    },
				    size: {
				      value: 3,
				      random: true,
				      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
				    },
				    line_linked: {
				      enable: true,
				      distance: 120,
				      color: "#ffffff",
				      opacity: 0.1,
				      width: 1
				    },
				    move: {
				      enable: true,
				      speed: 4,
				      direction: "none",
				      random: false,
				      straight: false,
				      out_mode: "out",
				      bounce: false,
				      attract: { enable: false, rotateX: 600, rotateY: 1200 }
				    }
				  },
				  interactivity: {
				    detect_on: "canvas",
				    events: {
				      onhover: { enable: true, mode: "repulse" },
				      onclick: { enable: true, mode: "push" },
				      resize: true
				    },
				    modes: {
				      grab: { distance: 400, line_linked: { opacity: 1 } },
				      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
				      repulse: { distance: 200, duration: 0.4 },
				      push: { particles_nb: 4 },
				      remove: { particles_nb: 2 }
				    }
				  },
				  retina_detect: true
				});
		  	}
		}
	}); 
});