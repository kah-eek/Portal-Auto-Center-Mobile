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
		var list = shoppingCart;
		var returnList = [];
		var needToAdd = [];
		var add = true;

		if (shoppingCart.length > 0)
		{
			var checked = 0;

			for(var i = 0; i < shoppingCart.length; i++)
			{

				for(var h = 0; h < list.length; h++)
				{

					// console.log(shoppingCart[h].order.productId+' == '+list[h].order.productId);

					if (shoppingCart[i].order.productId == list[h].order.productId)
					{
						checked += 1;
					}

					if (checked > 1 && add == true)
					{
						needToAdd.push(shoppingCart[h].order.productId);
						add = false;
					}
				}

				add = true;

				if(checked == 1)
				{
					returnList.push(shoppingCart[i].order.productId);
				}
				checked = 0;
			}

			for(var j = 0; j < needToAdd.length; j++)
			{
				returnList.push(needToAdd[j]);
			}

			console.log(needToAdd);

			
			return returnList;
		}

		return returnList;
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
	* Get full amount existent in shopping cart to user to pay
	* @return float Total amount to user to pay
	*/
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