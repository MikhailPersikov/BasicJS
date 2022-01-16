const string = false;
const number = 0;
//Abstract Equality Comparison
console.log(string == number);
//true 

//Strict Equality Comparison
console.log(string === number);
//false


// let x = 1;
// x = -x;
// console.log(x);

let x = -1;
x = -x;
console.log(x);

console.log((1/2));

let s = "my" + " "+"string";
console.log(s)


let f = 6;
let u = "8";
console.log(f+u,"concat");

let i = 3;
console.log(f+u+i,"hmm");

console.log(f+i+u,"wow");

let b = i + u;
console.log(typeof(b));

b = f - u;
console.log(typeof(b));
//Outputs the string
b = u - f;
console.log(typeof(b));
//Outputs the number 

