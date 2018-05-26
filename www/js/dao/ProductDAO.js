class ProductDAO
{

	/**
	* Get all product's minified information
	* @param  callbackSuccess(data) Callback executed in success on get data 
	* @param  [callbackFail(error)] Callback executed in fail on get data 
	*/
	getProductsMinInfo(callbackSuccess,callbackFail)
	{
		$.ajax({
			type:"GET",
			url: api['product'],
			dataType:'json',
			success:function(response){
				// Success callback
				callbackSuccess(response.produtos);
			},
			error:function(a,error,c){
				// Fail callback
				if(callbackFail != null) {callbackFail(error)};
			}
		});;
	}	

	/**
	* Get product's basic informations
	* @param  productId Product id
	* @param  callbackSuccess(data) Callback executed in success on get data 
	* @param  [callbackFail(error)] Callback executed in fail on get data 
	*/
	getProductBasicInfoById(productId, callbackSuccess,callbackFail)
	{
		$.ajax({
			type:"GET",
			url: `${api['product']}?id=${productId}`,
			dataType:'json',
			success:function(response){
				// Success callback
				callbackSuccess(response.produtos[0]);
			},
			error:function(a,error,c){
				// Fail callback
				if(callbackFail != null) {callbackFail(error)};
			}
		});;
	}	

}