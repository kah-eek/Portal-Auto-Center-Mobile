class Product
{

	/**
	* Get all product's minified information
	* @param  callbackSuccess(data) Callback executed in success on get data 
	* @param  [callbackFail(error)] Callback executed in fail on get data 
	*/
	static getProductsMinInfo(callbackSuccess,callbackFail)
	{
		new ProductDAO().getProductsMinInfo(callbackSuccess,callbackFail);
	}




}