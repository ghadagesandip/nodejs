var promise = new Promise(function (resolve, reject) {

    try{
        resolve(5)
    }catch (e){
        reject(e);

    }
});

promise.then(function (details) {
   return details;
})
.then(function (val) {
    console.log(val*2)
})