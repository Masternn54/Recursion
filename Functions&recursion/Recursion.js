// task is Define a recursive function isEven corresponding to this description. The function should accept a single parameter
// (a positive, whole number) and return a Boolean.
//Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?




var isEven = function ( a ) {
    var r = false;
    if ( a === 0 || a === 1 ) {
        a === 0 ? r = true : r ;
        return r;
    }else
        return a < 0 ? isEven(-1 * a) : isEven( a-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ?? turns out false aswell

// another way is to do it this way

function isEven(a) {
    return a % 2 === 0;
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false