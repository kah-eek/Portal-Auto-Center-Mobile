class ShoppingCart 
{
	/*
		Default constructor
	*/
	// Create a shopping cart in local storage
	constructor()
	{
		// Create shooping cart in local storage
		localStorage.setItem('shooping_cart',JSON.stringify([]));
	}

	/**
	* Add a new order into shopping cart
	* @param orderObj Order that will insert into shopping cart
	*/
	static addOrderToCart(orderObj)
	{
		var shoopingCart = JSON.parse(localStorage.getItem('shooping_cart'));

        shoopingCart.push({'order':orderObj});

        localStorage.setItem('shooping_cart',JSON.stringify(shoopingCart));
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