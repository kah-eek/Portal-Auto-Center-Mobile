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
}