var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
console.log(upperCaseCustomerName())

function setBestCustomer() {
    window.bestCustomer = 'not bob';
}
console.log(setBestCustomer())

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
console.log(overwriteBestCustomer())

const leastFavoriteCustomer = 'somebody';
console.log(leastFavoriteCustomer())

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'anybody'; 
}
console.log(changeLeastFavoriteCustomer())