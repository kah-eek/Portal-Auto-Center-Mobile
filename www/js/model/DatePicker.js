class DatePicker
{

	/**
	* Default constructor
	* @param callbackSuccess Succeed to get the date selected
	* @param callbackFail Fail in to get the date selected
	*/
	constructor(callbackSuccess,callbackFail)
	{
		 var options = {
		    date: new Date(),
		    mode: 'date'
		 };

		 document.addEventListener('deviceready',function(){

		  	datePicker.show(
		  		options, 
		  		function(date)
		  		{
		  			callbackSuccess(date);
		  		}, 
		  		function(error)
		  		{
		  			callbackFail(error);
		  		}
		  	);
		 
		 },false);  
	}

	getOnFormat(formatType, fullDate)
	{

		if (formatType == 'user')
		{
			var day = fullDate.substring(8,10); 

			var month = fullDate.substring(4,7);

			var formatedMonth = '00';

			switch(month.toLowerCase())
			{
				case 'jan':
					formatedMonth = '01';
					break;
				case 'feb':
					formatedMonth = '01';
					break;
				case 'mar':
					formatedMonth = '01';
					break;
				case 'apr':
					formatedMonth = '01';
					break;
				case 'may':
					formatedMonth = '01';
					break;
				case 'jun':
					formatedMonth = '01';
					break;
				case 'jul':
					formatedMonth = '01';
					break;
				case 'aug':
					formatedMonth = '01';
					break;
				case 'sep':
					formatedMonth = '01';
					break;
				case 'oct':
					formatedMonth = '01';
					break;
				case 'nov':
					formatedMonth = '01';
					break;
				case 'dec':
					formatedMonth = '01';
					break;
			}

			var year = fullDate.substring(11,15);

			return day+'/'+formatedMonth+'/'+year;
		}
	}
}