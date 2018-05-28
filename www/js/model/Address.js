class Address
{

	/**
	* Verify if exists the client in database
	* @param  userObj User object containing client's authentication data to find the client
	* @param  callbackSuccess(data) Callback executed in success on get data 
	* @param  [callbackFail(error)] Callback executed in fail on get data 
	*/
	getAddress(geolocationObj, callbackSuccess, callbackFail)
	{
		new AddressDAO().getAddress(geolocationObj, callbackSuccess, callbackFail);
	}

}