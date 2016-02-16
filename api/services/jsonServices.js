/**
 * jsonServices
 *
 * @description :: JSONService for sails
 * 
 */

module.exports = {

    validateJson: function(toValidate) {
	try {
	console.log("Tovalidate", toValidate)
	if (!toValidate)
	    return false;
	var jsonContent = JSON.parse(toValidate);
        console.log("jsonContent", jsonContent)
	if (!jsonContent || !jsonContent.header || !jsonContent.infos)
	    return false;
	if (!jsonContent.header.hasOwnProperty("name"))
	    return false;
	if (!jsonContent.header.hasOwnProperty("village"))
	    return false;
	}catch (ex){
	    console.log("ex : ", ex);
	    return false;
	}
	return true;
    },
    getInfo: function(json){
	var jsonContent = JSON.parse(json);
	console.log("INFO : " + JSON.stringify(jsonContent.infos));
	return JSON.stringify(jsonContent.infos)
    },
    
    getHeader: function(json){
	var jsonContent = JSON.parse(json);
	var arr = [];
	
	for(var key in jsonContent.header) {
	    arr.push(jsonContent.header[key]);
	}

	console.log("HEADER : " + arr);
	return arr;
    }
};
