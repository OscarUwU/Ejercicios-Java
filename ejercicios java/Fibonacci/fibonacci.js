
var memo = {};
function fibonacci() {
    "use strict";
    var n = document.getElementById("num").value;
    var val = f(n);
    document.getElementById("Fibo").textContent = val;
    //return f;
}

function f(n) {

    var value;

    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        if (n === 0 || n === 1) {
            value = n;
        } else {
            value = f(n - 1) + f(n - 2);
        }

        memo[n] = value;
    }

    return value;
}
