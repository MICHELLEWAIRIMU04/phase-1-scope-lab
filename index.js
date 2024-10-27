var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    window.bestCustomer = 'not bob'
}

function overwriteBestCustomer(newBestCustomer) {
    window.bestCustomer = newBestCustomer
}
const leastFavoriteCustomer = 'somebody';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'anybody else'; 
}

console.log(customerName)
console.log(window.bestCustomer)
console.log(leastFavoriteCustomer)

