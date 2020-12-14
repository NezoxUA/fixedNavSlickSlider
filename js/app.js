$(function(){

	let header = $("#header");
	let headerH = header.innerHeight();;
	let scrollPos = $(window).scrollTop();
	let nav =$("#nav");
	let navToggle = $("#navToggle");



	checkScroll(headerH , scrollPos)


	// fixed nav
	$(window).on("scroll resize" , function(){

		
		scrollPos = $(window).scrollTop();

		checkScroll(headerH , scrollPos);

	});

	function checkScroll(headerH , scrollPos){

		if(scrollPos > headerH){
			header.addClass("fixed");
		}else{
			header.removeClass("fixed");
		}
	}


	// smooth nav
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;
		
		nav.removeClass("show");

		$("html , body").animate({
			scrollTop: elementOffset -30
		}, 700);
	});

	

	// navToggle
	
	navToggle.on("click", function(event){
		event.preventDefault();
		nav.toggleClass("show");
	});


	// slic-slider
	let slider = $("#sliderBlock");

	$(slider).slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		dots: true
	});

});