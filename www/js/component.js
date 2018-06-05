$(function(){

	// Load navigator header on page
	$('.header').load('nav_header.html',function(){

	  // Get client from local storage 
      var client = JSON.parse(localStorage.getItem('client'));

      /*
        Set data into fields
      */
      // Profile picture
      $('#profile-picture').attr('src',picturePath['profile']+getPictureName('perfil',client.foto_perfil));
      // $('#profile-picture').attr('src',client.foto_perfil);

      // Name
      $('#name').text(client.nome);

      // Email
      $('#email').text(client.email);
      // ***********************************************><

      // Pass client's id to another page
      $('#update-profile').click(function(){
      	location.assign(`updateProfile.html?id=${client.id_cliente}`);
      });
      // ***********************************************><

	  // Open hamburger menu when click on it
      $('#menu').click(function(){
        $('.hamburger-container').animate({left:'100%'},500);
      });

      // Close hamburger menu when click on it (dark side)
      $('#close-menu').click(function(){
        $('.hamburger-container').animate({left:'-100%'},800);
      });
	});
  // *********************************************
  
  // Load header no navigation on page
  $('.no-nav-header').load('only_header.html');
	// *********************************************
});

/**
* Show a toast message on screen
* @param message Message to show to user
* @param duration Message's life duration
*/
function toast(message,duration)
{
	var $toast = $('.toast'); 

	$toast.text(message);

	$toast.css({
		animation:'fadein 0.5s linear 1',
		display:'flex'
	});

	setTimeout(function()
		{
			$toast.css({animation:'fadeout 1s linear 1'})
			setTimeout(function(){
				$toast.css({display:'none'});
			},900);
		}
		,duration
	);
}