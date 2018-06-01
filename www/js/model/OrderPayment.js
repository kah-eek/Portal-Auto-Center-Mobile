class OrderPayment
{
	// Default constructor
	constructor
	(
		id,
		title,
		unitPrice,
		quantity,
		tangible
	)
	{
		this.id = id;
		this.title = title;
		this.unitPrice = unitPrice;
		this.quantity = quantity;
		this.tangible = tangible;

		localStorage.setItem('orderPayment',JSON.stringify(this));
	}

	/**
	* Return the current OrderPayment existent on application
	* @return OrderPayment The current OrderPayment existent on application
	*/
	static getOrderPayment()
	{
		return JSON.parse(localStorage.getItem('orderPayment'));
	}
}
