var app = require('http').createServer(handler)  , io = require('socket.io').listen(app);

app.listen(9001);

var socketObj;
io.sockets.on('connection', function (socket) {

	socketObj=socket;
	
	
	

});


function handler (req, res) {


    console.log(req.url);
	

	if(req.url.indexOf("name")>-1)
	{
		var name = req.url.split("=")[1];
	
		console.log("name"+name);

		socketObj.emit('send', { name: name });
		
	}
	
	
	
	
	res.end("ok"); 

	


}

