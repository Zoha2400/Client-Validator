const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, '../data', 'users.json');

module.exports.jsonvalidate = function(data){

	let jsonData;

	try{
		jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
	}catch(error){
		console.error(error);
		return false;
	}

	for(let i = 0; i < jsonData.names.length; i++){
		if(data.name === jsonData.names[i] && data.password === jsonData.passwords[i]){
			return true;
		}
		continue
	}
	return false;
}