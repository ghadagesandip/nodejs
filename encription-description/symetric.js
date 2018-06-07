//same key is used for encryption and decryption

var crypto = require('crypto'), algorithm ='aes-256-ctr', password ="RJ23edrf";

function encrypt(text) {

    var cipher = crypto.createCipher(algorithm, password);
    var crypted = cipher.update(text, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}


function decrypt(text) {

    var decipher = crypto.createDecipher(algorithm, password);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec +=decipher.final('utf8');
    return dec;

}


var text = {
    "text" : "sandip",
    "message" : "hello user",
    "id" : 23,
    "data" :  {
        id : 1,
        message  :"hello again"
    }
};

text = JSON.stringify(text);

console.log('text : ', text);
//Calling the encrypt function and printing the encrypted content
var e = encrypt(text);
console.log('encrypted : ' + e);
//calling the decrypt function and printing the decrypted content
var d = decrypt(e);
console.log('decrypted text : ' + d);
