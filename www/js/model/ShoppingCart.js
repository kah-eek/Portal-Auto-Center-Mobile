class ShoppingCart 
{
	/*
		Default constructor
	*/
	// Create a shopping cart in local storage
	constructor()
	{
		// Create shooping cart in local storage
		localStorage.setItem('shopping_cart',JSON.stringify([]));
	}

	static getProductsCount(productId)
	{
		shoppingCart = this.getShoppingCart();
		var amount = 0;

		for(var i = 0; i < shoppingCart.length; i++)
		{
			if (shoppingCart[i].order.productId == productId)
			{
				amount += 1;
			}
		}

		return amount;
	}

	/**
	* Get the shopping cart object
	* @return JSON Shopping cart object
	*/
	static getShoppingCart()
	{
		return JSON.parse(localStorage.getItem('shopping_cart'));
	}

	/**
	* Add a new order into shopping cart
	* @param orderObj Order that will insert into shopping cart
	*/
	static addOrderToCart(orderObj)
	{
		var shoppingCart = JSON.parse(localStorage.getItem('shopping_cart'));

        shoppingCart.push({'order':orderObj});

        localStorage.setItem('shopping_cart',JSON.stringify(shoppingCart));
	}

	/**
	* Add a new order into shopping cart
	* @param orderObj Order that will insert into shopping cart
	*/
	// removeOrderFromCart(orderObj)
	// {
	// 	var shoopingCart = JSON.parse(localStorage.getItem('shooping_cart'));

 //        shoopingCart.push({'order':order});

 //        localStorage.setItem('shooping_cart',JSON.stringify(shoopingCart));
	// }

}