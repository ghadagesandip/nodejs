var net = require('net');

var tcpServer = net.createServer(function(socket){
	
	console.log('Connection is established....');

	tcpServer.getConnections(function(err,count){
		console.log('number of tcp connections '+ count );
	});

	socket.on('end',function(){
		console.log('connection ended');
	});

	socket.on('data',function(data){
		console.log('data is ' + data);

	});

});

tcpServer.listen(function(){
	var port = tcpServer.address().port;
	console.log('server started  on port '+port);
});