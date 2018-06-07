var easyimg = require('easyimage');

//info
//easyimg.info('image/Character-f4-Banner.jpeg').then(function(file){
//    console.log(file)
//},function(err){
//    console.log(err)
//});



easyimg.rescrop({
    src : 'image/Character-f4-Banner.jpeg',
    dst:'image/thumb/Character-f4-Banner.jpeg',
    width:500, height:500,
    cropwidth:128, cropheight:128,
    x:0, y:0

}).then(
    function(image) {
        console.log('Resized and cropped: ' + image.width + ' x ' + image.height);
    },
    function (err) {
        console.log(err);
    }
);