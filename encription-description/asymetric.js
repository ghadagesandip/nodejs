//  Convert RSA public key and private key to PEM format:
//  openssl rsa -in ~/.ssh/id_rsa -outform pem > id_rsa.pem
//  openssl rsa -in ~/.ssh/id_rsa -pubout -outform pem > id_rsa.pub.pem


var crypto = require('crypto');
var fs = require('fs');



//Reading the Private Key
var privK = {
    key: fs.readFileSync('/home/neosoft/.ssh/id_rsa.pem').toString(),
    passphrase: 'nodejsera'
}

//console.log(privK)

//Passing the text to be encrypted using private key
var buf = Buffer.from('this is a secret message', 'utf8');
//console.log('buf', buf)
//Encrypting the text
var secretData = crypto.privateEncrypt(privK, buf);
//printing the encrypted text
console.log('encrypted text' +secretData.toString('utf8'));

var pubK = fs.readFileSync('/home/neosoft/.ssh/id_rsa.pub.pem').toString();
//console.log('pubK ', pubK);
//decrypting the text using public key
var origData = crypto.publicDecrypt(pubK, secretData)
//Printing the original content
console.log('origData : '+ origData.toString());