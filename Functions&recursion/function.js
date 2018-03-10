
// alot of these task were made using code pen which is why they may not work when running here


//this function times the parameter x with it self = 12 * 12
const triangle = function(x){
    return x * x;
};

console.log(triangle(12));
//144



// this a function with no parameters
const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();
// → Pling!



let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
    // → 60
}
// y is not visible here
console.log(x + z);
// → 40


console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}