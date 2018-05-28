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

	/**
	* Get date on one format
	* @param formatType Fromat type. (user = dd/mm/yyyy)
	* @return String Date formatted
	*/
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
					formatedMonth = '02';
					break;
				case 'mar':
					formatedMonth = '03';
					break;
				case 'apr':
					formatedMonth = '04';
					break;
				case 'may':
					formatedMonth = '05';
					break;
				case 'jun':
					formatedMonth = '06';
					break;
				case 'jul':
					formatedMonth = '07';
					break;
				case 'aug':
					formatedMonth = '08';
					break;
				case 'sep':
					formatedMonth = '09';
					break;
				case 'oct':
					formatedMonth = '10';
					break;
				case 'nov':
					formatedMonth = '11';
					break;
				case 'dec':
					formatedMonth = '12';
					break;
			}

			var year = fullDate.substring(11,15);

			return day+'/'+formatedMonth+'/'+year;
		}
		else if(formatType == 'mysql')
		{	
			var day = fullDate.substring(0,2);
			var month = fullDate.substring(3,5);
			var year = fullDate.substring(6);

			return year+'-'+month+'-'+day;
		}
	}
}