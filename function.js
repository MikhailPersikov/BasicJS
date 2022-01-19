// let userName = 'Jon';

// function showName() {
//     console.log('Hi ' + userName)
// }

// showName();

// function changeName() {
//     userName = 'Vasya'
//     console.log(userName)
// }

// changeName();

// console.log(userName);


// let userNickname = "Joys";

// function showNickname() {
//     let userNickname = "Root";
//     let message = "Hi " + userNickname;
//     console.log(message)
// }

// showNickname();

// function showMessage(x,y){
//     x = '<' + x + '>'
//     x = x + ': ' + y
//     console.log(typeof(x))
//     console.log(x)
// }

// // let x = "blank"

// showMessage("ya");

function dontShowUndefiend(name,text = getSum()) {
    // name = "Crist"
    console.log(name + ": " + text)
}

// let name = "Vova"

dontShowUndefiend("Moris")

function getSum(){
    return 8+8
}

console.log(getSum());

function testReturn (age) {
   if(age >= 18 ) {
      return true
   } else {
       return confirm ("Are you sure?")
   }
} 

let age = +prompt('How old are you? ')
// testReturn(age);

if(testReturn(age)){
    alert("Welcome")
} else {
    alert("Go away!!!")
}

console.log(typeof(age))




