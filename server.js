const http           = require('http');
const fs             = require('fs');
const path           = require('path');
const htmlSender     = require('./modules/fsreader.js'); //module of sending HTML file
// const jsonValidator	 = require('./modules/jsonvalidate.js');

const html = path.join(__dirname, '/html'); //dirname 

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  	

  	// htmlSender.fsreader(html + 'style.css', res);

	  // if (req.url !== '/reg.html') {
	  //   res.statusCode = 302;
	  //   res.setHeader('Location', 'reg.html');
	  //   res.end();
	  // } 

	  if (req.url === '/reg.html') {
	   	htmlSender.fsreader(html, '/reg.html', res);
	  }

	  else if (req.url === '/home.html') {
	   	htmlSender.fsreader(html, '/home.html', res);
	  }

	  else if (req.url === '/about.html') {
	 	htmlSender.fsreader(html, '/about.html', res);
	  }

	  else if (req.url === '/account.html') {
	 	htmlSender.fsreader(html, '/account.html', res);
	  }

	  else{
		htmlSender.fsreader(html, '/err.html', res);
	  }

  	// let data = {
  	// 	name: 'Zoha',
  	// 	password: '12345678'
  	// }

  	// console.log(jsonValidator.jsonvalidate(data));


});


server.listen(PORT, () => {
  console.log('Working on', PORT);
});




