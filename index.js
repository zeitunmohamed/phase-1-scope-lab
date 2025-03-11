
 window.customerName = "bob"; 
const leastFavoriteCustomer = "Alice";  
window.bestCustomer = undefined;

function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = "not bob";
}

function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = "John";
  } catch (error) {
    throw new Error("Assignment to constant variable.");
  }
}
