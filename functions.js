// JavaScript Document
var date = document.lastModified;
document.getElementById("date").innerHTML = date;
function calculate()
{
var comic1 = parseInt(document.myForm.comic1.value); //takes in how many for Batman Knightfall
var comic2 = parseInt(document.myForm.comic2.value); //takes in how many for Batman Halloween
var comic3 = parseInt(document.myForm.comic3.value); //takes in how many for Batman Hush

if(comic1 < 0 || comic2 < 0 || comic3 < 0) //checks to see if any value is less than 0 and sends a warning
{
	document.getElementById("order").innerHTML = "Not so fast Joker, one of your orders is below 0. Please fix this to continue";
}
else
{

//Starts the string to return in the textarea on the order page
var confirmation = "Batman: Knightfall Part 1: Broken Bat: " + comic1 + "\n" +
"Batman: The Long Halloween: " + comic2 + "\n" +
"Batman: Hush: " + comic3;

comic1 = comic1 * 17.95; //converts the number of how many to the subtotal for that comic(next 2 lines also)
comic2 = comic2 * 19.99;
comic3 = comic3 * 24.99;

var total = comic1 + comic2 + comic3; //adds up the total

if(total > 25) //checks total to see if the customer gets the first featured item and if so, adds it to the string
{
confirmation = confirmation + "\n" + "FREE WHITE LANTERN BATMAN";
}
if(total > 50) //checks total to see if the customer gets the second featured item and if so, adds it to the string
{
confirmation = confirmation + "\n" + "FREE LIFE SIZE BATARANG";
}

confirmation = confirmation + "\n" + comic1 + "\n" + comic2 + "\n" + comic3 + "\n" + "Total: " + total.toFixed(2); // adds to the string the subtotals and the total

document.getElementById("order").innerHTML = confirmation;
}
}