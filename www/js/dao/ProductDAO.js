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

}