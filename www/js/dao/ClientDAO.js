class ClientDAO
{
	/**
	* Verify if exists the client in database
	* @param  userObj User object containing client's authentication data to find the client
	* @param  callbackSuccess(data) Callback executed in success on get data 
	* @param  [callbackFail(error)] Callback executed in fail on get data 
	*/
	existsClient(userObj, callbackSuccess, callbackFail)
	{
		$.ajax({
			type:"POST",
			url: api['authentication'],
			dataType:'json',
			data:
			{
				usuario:userObj.username,
				senha:userObj.password
			},
			success:function(response){
				// Success callback
				callbackSuccess(response);
			},
			error:function(a,error,c){
				// Fail callback
				if(callbackFail != null) {callbackFail(error)};
			}
		});
	}
}