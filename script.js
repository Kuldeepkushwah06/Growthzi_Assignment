// script.js

function updateQuantity(id, change) {
    var quantityElement = document.getElementById(id);
    var currentQuantity = parseInt(quantityElement.innerText);
    var newQuantity = currentQuantity + change;

    // Ensure the quantity does not go below 0
    newQuantity = Math.max(newQuantity, 0);

    // Update the quantity text
    quantityElement.innerText = newQuantity;
}
