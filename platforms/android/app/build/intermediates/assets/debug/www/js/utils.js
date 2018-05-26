/**
* Get variable on URL
* @param variable Variable to get on url
* @return String Variable's value
*/
function getVariable(variable)
{	
	var urlVariables = window.location.href.substring(window.location.href.search('\\?'));
	var startIndex = urlVariables.search(variable.substring(variable.length-1)+'=');
	var variableValue = urlVariables.substring(startIndex+2);
	// console.log(variableValue);
	return variableValue;
}