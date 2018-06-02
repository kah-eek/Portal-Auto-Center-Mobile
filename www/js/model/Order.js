class Order
{
	// Default constructor
	constructor(productId, price, clientId, orderSituationId, requestDate)
	{
		this.productId = productId;
		this.price = price;
		this.clientId = clientId;
		this.orderSituationId = orderSituationId;
		this.requestDate = requestDate;

		localStorage.setItem('order',JSON.stringify(this));
	}

	/**
	* Return the current Order existent on application
	* @return OrderPayment The current Order existent on application
	*/
	static getOrder()
	{
		return JSON.parse(localStorage.getItem('order'));
	}

	/**
	* Insert a new order register into database
	* @param orderObj Object that will be inserted into database
	* @param callbackSuccess(data) Callback executed in success on get data 
	* @param [callbackFail(error)] Callback executed in fail on get data 
	*/
	requestNewOrder(orderObj, callbackSuccess,callbackFail)
	{
		new OrderDAO().requestNewOrder(orderObj, callbackSuccess,callbackFail);
	}
}