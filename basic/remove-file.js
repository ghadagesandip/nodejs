var fs = require('fs');

fs.rename('tmp/hello.txt','tmp/new-hello.txt',function(err){
	if(err) throw err;
	console.log('renamed file');
});