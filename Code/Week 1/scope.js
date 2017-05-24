/**
 * Created by perryd on 5/24/17.
 */
var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    console.log(foo);
}
bar();

(function () {

    var foo = 1;
    function bar() {
        if (!foo) {
            var foo = 10;
        }
        console.log(foo);
    }
    bar();

}())