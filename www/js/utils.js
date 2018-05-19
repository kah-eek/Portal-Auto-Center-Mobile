$(function(){
	// Load header on page
	$('.header').load('header.html',function(){
	  // Open hamburger menu when click on it
      $('#menu').click(function(){
        $('.hamburger-container').animate({left:'100%'},800);
      });

      // Close hamburger menu when click on it (dark side)
      $('#close-menu').click(function(){
        $('.hamburger-container').animate({left:'-100%'},800);
      });
	});
	// *********************************************
});