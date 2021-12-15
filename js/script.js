function showDialog() {
    alert("Hello World");
    document.getElementById("result").innerHTML = "Hello World.";
}

function addNumbers() {
    var x = 10;
    var y = 20;
    var sum = x + y;
    alert(sum)
    document.getElementById("result").innerHTML = sum;
}

document.getElementById("add-btn").onclick = addNumbers;

// document.getElementById("alert-btn").onclick = function () {
//     // alert("Hello World testing");
//     document.getElementById("result").innerText = "<h2 style='color: red;'>Hello World</h2>";
// }

document.getElementById("alert-btn").onclick = showDialog;

// showDialog

// Data Types

var name = "Umair" // String
var age = 25; // Number
console.log(name)
console.log(age)


// Boolean
var isJsEasy = false;
var areYouEnjoying = true;

console.log(isJsEasy)
console.log(areYouEnjoying)
// alert(areYouEnjoying)

// Undefined

var car;
// car = "Honda"
console.log(car)

// alert(car)

// Null
var klass = null;
console.log(klass)

// alert(klass)

// Object

var userName = "Ahsan"
var userPass = "123"
var userPhone = "0330001254"
var userID = 123456

var user = {
    name: "Ahsan",
    pass: "123",
    phone: "090078601",
    id: 123456
}



document.getElementById("result").innerHTML = "User ka Nam = " + user.name

// Array

var users = [
    {
        name: "Ahsan",
        pass: "123",
        phone: "090078601",
        id: 123456,
        photoURL: "https://firebasestorage.googleapis.com/v0/b/seeraht-institute.appspot.com/o/Images%2F0u9Hgn28EyQTD6ajggUzdZHh9QT2%2FprofilePhoto.jpg?alt=media&token=faacaf66-0ff7-42fe-ba5d-0616e7cf783c"
    },
    "User1",
    3
];
console.log("user =>", users[0].photoURL)

var loggedinUser = users[0];
document.getElementById("userPhoto").src = loggedinUser.photoURL



var fruits = ["Mango", "Apple", "Grapes"];

console.log(fruits[2])