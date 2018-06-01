class ProductDAO
{

  /**
  * Make a payment  
  * @param paymentObj Object Payment that will transferred to payment
  * @param customerObj Object Customer that will inserted on payment
  * @param billingObj Object Billing that will inserted on payment
  * @param orderPaymentObj Object OrderPayment that will inserted on payment
  * @param callbackSuccess(data) Callback executed in success on get data 
  * @param [callbackFail(error)] Callback executed in fail on get data 
  */
  makePayment($paymentObj, $customerObj, $billingObj, $orderPaymentObj, callbackSuccess, callbackFail)
  {
	$.ajax({
		type:"POST",
		url: api['payment'],
		// dataType:'json',
		success:function(response){
			// Success callback
			callbackSuccess(response);
		},
		error:function(a,error,c){
			// Fail callback
			if(callbackFail != null) {callbackFail(error)};
		}
	});;
   }	

}