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

	/**
	* Get product's basic informations
	* @param  productId Product id
	* @param  callbackSuccess(data) Callback executed in success on get data 
	* @param  [callbackFail(error)] Callback executed in fail on get data 
	*/
	getProductBasicInfoById(productId, callbackSuccess,callbackFail)
	{
		new ProductDAO().getProductBasicInfoById(productId, callbackSuccess,callbackFail);
	}




}