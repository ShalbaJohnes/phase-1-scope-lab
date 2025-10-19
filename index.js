// Write your solution in this file!
// Declare variables properly
var customerName = 'bob';
let bestCustomer; // let allows reassignment later
let leastFavoriteCustomer = 'some initial value'; // changed from const to let

// Function to capitalize customer name
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set the best customer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite the best customer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Function to change the least favorite customer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'billy';
}
