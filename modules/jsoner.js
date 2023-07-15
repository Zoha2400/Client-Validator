const fs = require("fs");

module.exports.jsoner = function(ask){
	fs.readFile('../data/users.json', (err, data) => {
		if(err){
			console.error(err);
   			return;
		}else{
			const jsonData = JSON.parse(data);
  			return jsonData;		}
	});
}