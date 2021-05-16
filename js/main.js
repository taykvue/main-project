$(document).ready(function() {
	$('.ripple-effect').ripples({
        resolution: 1000,
        dropRadius: 14,
        perturbance: 0.1,
    }); 
	// Used Slick JS library by Ken Wheeler: http://kenwheeler.github.io/slick/

	// activating slideshow and settings
	$('.slideshow').slick({
		autoplay: true, // self-explanatory
		autoplaySpeed: 100000, // ditto
		infinite: true, // allows for slideshow to loop to the beginning after the last slide
		dots: true, // enables dots on bottom center for navigation
		arrows: false // disables side arrow navigations
		
	});

	$('.zoomple').zoomple({ 
		blankURL :'images/blank.gif',    
		bgColor :'#1B0A03',
		loaderURL :'images/loader.gif',
		offset : {x:150,y:-150},
		zoomWidth : 500,  
		zoomHeight : 500,
		roundedCorners : true
	});


});