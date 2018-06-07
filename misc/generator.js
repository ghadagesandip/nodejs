function* gen () {
    var x = yield "banna";

    var y = yield "orange";

    return x+y;

}

var  Some = gen();
console.log(Some.next())
console.log(Some.next())
console.log(Some.next())