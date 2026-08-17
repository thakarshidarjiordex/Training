"use strict";
// Function to process payment
function processPayment(payment) {
    console.log("----- Payment Details -----");
    console.log("Customer:", payment.name);
    console.log("Email:", payment.email);
    console.log("Amount:", payment.amount);
    console.log("Payment Method:", payment.method);
    console.log("Payment Successful!");
}
// Create payment
const payment1 = {
    name: "Rahul",
    email: "rahul@gmail.com",
    amount: 1500,
    method: "upi"
};
// Process payment
processPayment(payment1);
