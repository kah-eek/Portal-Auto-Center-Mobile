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
			},1000);
		}
		,duration
	);
}