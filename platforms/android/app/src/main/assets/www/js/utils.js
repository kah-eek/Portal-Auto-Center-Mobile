
// Keep pictures' path
var picturePath = {
	'product':`http://${host}/view/pictures/produto/`,
	'profile':`http://${host}/view/pictures/perfil/`
	// 'product':`http://${host}/Portal-Auto-Center/view/pictures/produto/`,
	// 'profile':`http://${host}/Portal-Auto-Center/view/pictures/perfil/`
};
// *************************************************************><

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

/**
* Get picture's name
* @param prefix Folder that is keeping the image
* @return path Full image path 
*/
function getPictureName(prefix,path)
{
	var startIndex = path.search(prefix+'/');
	var pictureName = path.substring(startIndex+prefix.length+1);
	// console.log(startIndex);
	// console.log(pictureName);
	return pictureName;
}