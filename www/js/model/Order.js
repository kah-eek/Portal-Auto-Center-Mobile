class Order
{
	// Default constructor
	constructor(productId, price, clientId, orderSituationId, log)
	{
		this.productId = productId;
		this.price = price;
		this.clientId = clientId;
		this.orderSituationId = orderSituationId;
		this.log = log;
	}
}