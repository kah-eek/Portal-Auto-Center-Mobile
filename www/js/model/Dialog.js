class Dialog
{

	/**
	* Show alert dialog
	* @param title Dialog's title
	* @param message Dialog's message
	* @param callback Callback executed after clicked on button
	* @param button Button's name
	*/
	static alert(title, message, callback, button)
	{
		document.addEventListener('deviceready',function(){
			navigator.notification.alert(
				message,
				callback(),
				title,
				button
			);
		},false);
	}


}