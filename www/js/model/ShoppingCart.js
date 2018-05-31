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

	/**
	* Get amount that one products exists in shopping cart
	* @param productId Product's id
	* @return int Amount the product exists in shopping cart
	*/
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
	* Get products' id existing in shopping cart
	* @return array List containing products's id existing in shopping cart
	* @return empty array Fail in attempt to get products's id list existing in shopping cart
	*/
	static getProductsId()
	{
		shoppingCart = this.getShoppingCart();
		var list = [];

		if (shoppingCart.length > 0)
		{
			var oldProcustId;

			for(var i = 0; i < shoppingCart.length; i++)
			{
				if (shoppingCart[i].order.productId != oldProcustId)
				{
					list.push(shoppingCart[i].order.productId);
					oldProcustId = shoppingCart[i].order.productId;
				}
			}

			return list;
		}

		return list;
	}

	/**
	* Get the shopping cart object
	* @return JSON Shopping cart object
	*/
	static getShoppingCart()
	{
		return JSON.parse(localStorage.getItem('shopping_cart'));
	}

	static getFullAmount()
	{
		var shoppingCart = ShoppingCart.getShoppingCart();
		var totalPay = 0;

		for(var i = 0; i < shoppingCart.length; i++)
		{
			totalPay += parseFloat(shoppingCart[i].order.price);
		}

		return totalPay;
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