const fs = require('fs');

module.exports.fsreader = function(path, file, res) {

	fs.readFile(path + '/style.css', (errcss, css) => {
		if(errcss){
			res.statusCode = 500;
			res.end('Not found!');
		}

		fs.readFile(path + file, (errhtml, html) =>{
			if(errcss){
				res.statusCode = 500;
				res.end('Not found!');
			}
		    
		    res.writeHead(200, { 'Content-Type': 'text/html' });
    		res.write(`<style>${css}</style>`);
		    res.write(html);
		    res.end();


		});

	});
}

