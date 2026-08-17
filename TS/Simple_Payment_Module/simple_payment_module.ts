// UNION TYPE
// Payment method can be only one of these values
type PaymentMethod = "card" | "upi" | "cash";


// Basic Payment information
type Payment = {
    amount: number;
    method: PaymentMethod;
};


// Customer information
type Customer = {
    name: string;
    email: string;
};


// INTERSECTION TYPE
// Combines Payment + Customer
type PaymentDetails = Payment & Customer;


// Function to process payment
function processPayment(payment: PaymentDetails): void {

    console.log("----- Payment Details -----");

    console.log("Customer:", payment.name);
    console.log("Email:", payment.email);
    console.log("Amount:", payment.amount);
    console.log("Payment Method:", payment.method);

    console.log("Payment Successful!");
}


// Create payment
const payment1: PaymentDetails = {
    name: "Rahul",
    email: "rahul@gmail.com",
    amount: 1500,
    method: "upi"
};


// Process payment
processPayment(payment1);