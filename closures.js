//function along with it's lexical scope is called closure
//example 1
function x(){
    var a = 7;
    function y (){
        console.log(a);
    }
    y();
}
x();

//example 2
function x(){
    var a = 7;
    function y (){
        console.log(a);
    }
    return y;
}
var z = x(); //closure return here (function along with it's lexical scope)