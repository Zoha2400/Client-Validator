const fs = require('fs');

module.exports.fsreader = function(path, res) {

	fs.readFile(path, (err, data) => {
		if(err){
			res.statusCode = 500;
			res.end('Not found!');
		}else{
			res.statusCode = 200;
			res.end(data);
		}
	});
}

