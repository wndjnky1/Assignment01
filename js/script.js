// Assignment 1 - Part 2
/*
// STEP 1
var someMonth;
function theMonth 		// function to return current month
currentMonth 		// a constant
var summerMonth; 		// an array of summer months
myLibraryAFunction 	// a function 
*/

/*
// STEP 2
// Numeric literal expression
10
// String literal expression
"Penelope"
// Boolean literal expression
false
*/

/*
// STEP 3
// Complex/variable expression
var anExpression = 3 * (4 / 5) + 6;
var aThirdExpression = aSecondExpression + "%" + anExpression;
*/

/*
// STEP 4
var firstName;
var lastName;
var address;
var city;
var state;
var intZipCode;
var yourAge;
var strReferralSource;
var blnMayWeContactYou;
*/


/*
// STEP 5
var firstName = 'Betty', lastName = 'Smith', address='1145 Opal Street', city = 'San Diego', state ='CA', intZipCode = 92109, yourAge = 29, strReferralSource = 'a business associate', blnMayWeContactYou = false;

var firstName;
var lastName;
var address;
var city;
var state;
var intZipCode;
var yourAge;
var strReferralSource;
var blnMayWeContactYou;
firstName = 'Betty';
lastName = 'Smith';
address='1145 Opal Street';
city = 'San Diego';
state ='CA';
intZipCode = 92109;
yourAge = 29;
strReferralSource = 'a business associate';
blnMayWeContactYou = false;

var firstName = 'Betty',
    lastName = 'Smith',
    address='1145 Opal Street',
    city = 'San Diego',
    state ='CA',
    intZipCode = 92109,
    yourAge = 29,
    strReferralSource = 'a business associate',
    blnMayWeContactYou = false;   
*/   
/*    
 // STEP 6

 // add a number and a string

var totOnWater = 'The total number of sailors on the water is ' + 15;
window.console.log(totOnWater);
window.console.log(typeof totOnWater);


// add a boolean and a string
var goneCrazy = 'Thinking the entire world has gone crazy is definitely ' + Boolean(10>9);
    window.console.log(goneCrazy);
    window.console.log(typeof goneCrazy);

// add a boolean and a number
var blnNum = 20 + Boolean(10>9);
    window.console.log(blnNum);
    window.console.log(typeof blnNum);
*/

/*
// STEP 7 - HOISTING
var numWindsurfers = 6; // Initialize numWindsurfers
var numKiters;

elem = document.getElementById("more"); // Find an element 
window.console.log('numWindsurfers is ' + numWindsurfers + ', ' + 'numKiters is ' + numKiters);           // //Display numWindsurfers and numKiters
numKiters = 10; // set numKiters =10
*/

/*
// STEP 8
// No it is incorrect. Fixed below

var someString = 'Who once said, \"Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.\"';
window.console.log(someString);
*/

/*
// STEP 9

var popsicles=null;
window.console.log(popsicles);

var pops;
window.console.log(pops);
*/

/*
// STEP 10
typeof "Betty"                // Returns string 
typeof 9.24                   // Returns number
typeof false                  // Returns boolean
typeof null                   // Returns object
typeof popsicles                  // Returns undefined (if popsicles is not declared)
window.console.log(typeof "Betty "  + ' ' +
                    typeof 9.24 +  ' ' +
                    typeof false + ' ' +
                    typeof null + ' ' +
                    typeof popsicles);
*/          

/*
// STEP 11
var someString = ('Hello ' + 'Kari Eding' + ', welcome to the JavaScript class!');
    window.alert(someString);
*/

/*
// STEP 12
var name = 'Kari Eding';
var someString = ('Hello ' + name + ', welcome to the JavaScript class!');
    window.alert(someString);
*/
/*
// STEP 13
var name = 'Kari Eding';
var course = 'JavaScript';
var someString = ('Hello ' + name + ', ' + 'welcome to the ' + course + ' ' + 'class!');
    window.alert(someString);
*/
/*
// STEP 14
var name = 'Kari Eding';
var course = 'JavaScript';
var someString = ('Hello ' + name + '.' + '\nWelcome to the ' + course + ' ' + 'class!');
    window.alert(someString);
*/
/*
// STEP 15
var name = window.prompt('Please enter your name');
var course = 'JavaScript';
var someString = ('Hello ' + name + '.' + '\nWelcome to the ' + course + ' ' + 'class!');
    window.alert(someString);
*/

/*
// STEP 16
var name = window.prompt('Please enter your name');
var course = window.prompt('Enter the course you are taking');
var someString = ('Hello ' + name + '.' + '\nWelcome to the ' + course + ' ' + 'class!');
    window.alert(someString);
*/

/*
// STEP 17
var x = 10;
var y = 20;
window.console.log('The sum of x + y is ' + (x + y));
*/

/*
// STEP 18
var x = 20;
x = x + 20;
window.console.log(x);
*/

/*
// STEP 19
var x = 20;
x *= 5;
window.console.log(x);
*/

/*
// STEP 20
var x;
x = 20 % 3;
window.console.log(x);
*/

/*
// STEP 21
var x = 6;
var y = 3;
window.console.log(x < 10 && y > 1);
*/

/*
// STEP 22
var numWindSurfers = 15;
var numKiters = 15;
window.console.log("We won\'t be sailing today: " + ((numWindSurfers != numKiters) || (numWindSurfers + numKiters) >= 50));
*/

/*
// STEP 23
var widget = new Object();
widget.peaShooter = 'shoots peas';
widget.color = 'green';
widget.numPeas = 500;
window.console.log(typeof widget);
window.console.log('A peashooter is ' + widget.color + ' and ' + widget.peaShooter);
*/

/*
// STEP 24
var widget = ['peaShooter', 'color', 'numPeas'];
    window.console.log(widget instanceof Object);
*/

/*
// STEP 25
var widget = ['peaShooter', 'color', 'numPeas'];
window.console.log(widget instanceof String);
*/
