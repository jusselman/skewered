// var firstName = prompt("What is your first name");
// var lastName = prompt("What is your last name?");
// var age = prompt("What is your age?");
//
// document.write("Your name is " + firstName + " " + lastName + " and you are " + age + " years old.")
//
// var days = age * 365
// alert("You are approximately " + days + " days old.")

// var userAge = prompt("How old are you?");
// if(userAge >= 21) {
//   alert("You may enter");
// } else if (userAge >= 18) {
//   alert("You can enter, but no booze");
// } else if (userAGe == 21) {
//   alert("Congrats on turning 21!")
// }
// else if (userAge <= 0) {
//   alert("Please enter a valid age")
// } else {
//   alert("You can't come in")
// };
//
// if (userAge % 2 != 0) {
//   alert("That's an odd age!")
// }
//
// var myString ="Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World";
// 		  for(var i = 0; i <myString.length; i++) {
// 			console.log(myString[i])
//     }

// for(var i = 0; i <= 100; i = i + 1) {
//   if(i % 5 == 0) {
//     console.log(i);
//   }
// }

// function capitalize(str) {
//   if(typeof str === "number") {
//     return "That's not a string!";
//   }
//   return str.charAt(0).toUpperCase()
//    + str.slice(1);
// }


//
// var sum = function(x,y) {
//     return x + y }



// var userInput = prompt("Type in a number, I'll tell you if it's even or odd");
//
// if(userInput % 2 != 0) {
//   alert("That's an odd number")
// } else { alert("That's an even number")
// }
//
// function isEven(num) {
//     if(num % 2 == 0) {
//       return true;
//     }
//     return false
// }
//
// function isEven2(num) {
//   return numb % 2 == 0;
// }


// function factorial(num) {
//     var result = 1;
//     for(var i = 1; i <= num; i++) {
//         result = result * i;
//     }
//     return result;
// }

function kebabToSnake(str) {
    //replace all dashes with
    var myString = str.replace(/-/g, "_");
    //return str
    return myString;
    //try with: "this - is -a - ---test";
}
