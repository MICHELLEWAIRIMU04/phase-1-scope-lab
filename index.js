var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
console.log(customerName)

function setBestCustomer() {
    window.bestCustomer = 'not bob';
}
console.log(bestCustomer)

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
console.log(bestCustomer)

const leastFavoriteCustomer = 'somebody';
console.log(leastFavoriteCustomer)

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'anybody'
}




