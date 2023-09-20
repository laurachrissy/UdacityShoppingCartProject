// Create an array named products to store product objects
const products = [];

// Create product objects using object literal notation
const product1 = {
    name: "Cherry",
    price: 2.99,
    quantity: 0,
    productId: 1,
    image: "images/cherry.jpg"
};

const product2 = {
    name: "Orange",
    price: 1.99,
    quantity: 0,
    productId: 2,
    image: "images/orange.jpg"
};

const product3 = {
    name: "Strawberry",
    price: 3.49,
    quantity: 0,
    productId: 3,
    image: "images/strawberry.jpg"
};

// Add the product objects to the products array
products.push(product1, product2, product3);

// Declare an empty array named cart to hold the items in the cart
const cart = [];

// Create a function named addProductToCart
function addProductToCart(productId) {
    // Find the product based on productId
    const product = products.find((p) => p.productId === productId);

    if (product) {
        // Check if the product is already in the cart
        const existingCartItem = cart.find((item) => item.productId === productId);

        if (existingCartItem) {
            // Increase the quantity if the product is already in the cart
            existingCartItem.quantity++;
        } else {
            // Add the product to the cart with quantity 1 if it's not already in the cart
            cart.push({...product, quantity: 1 });
        }
    } else {

    }
}


// Create a function named increaseQuantity
function increaseQuantity(productId) {
    // Find the product based on productId
    const product = cart.find((item) => item.productId === productId);

    if (product) {
        // Increase the product's quantity
        product.quantity++;
    } else {
        console.log("Product not found in the cart.");
    }
}


// Create a function named decreaseQuantity
function decreaseQuantity(productId) {
    // Find the product based on productId
    const productIndex = cart.findIndex((item) => item.productId === productId);

    if (productIndex !== -1) {
        // Decrease the product's quantity
        if (cart[productIndex].quantity > 1) {
            cart[productIndex].quantity--;
        } else {
            // Remove the product from the cart if the quantity becomes 0
            cart.splice(productIndex, 1);
        }
    } else {
        console.log("Product not found in the cart.");
    }
}


// Create a function named removeProductFromCart
function removeProductFromCart(productId) {
    // Find the product based on productId
    const productIndex = cart.findIndex((item) => item.productId === productId);

    if (productIndex !== -1) {
        // Set the product's quantity to 0
        cart[productIndex].quantity = 0;
        // Remove the product from the cart
        cart.splice(productIndex, 1);
    } else {
        console.log("Product not found in the cart.");
    }
}

// Create a function named cartTotal
function cartTotal() {
    // Use reduce to calculate the total of all products in the cart
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total;
}

// Create a function called emptyCart that empties the products from the cart
function emptyCart() {
    // Set the cart array to an empty array
    cart.length = 0;
}





// Create a function named pay that takes in an amount as an argument
// function pay(amount) {
// Calculate the change (amount - cart total)
//const change = amount - cartTotal();
//return change;
//}

/*
//* Create a function named pay that takes in an amount as an argument
function pay(amount) {
    const cartTotalValue = cartTotal();

    if (amount === cartTotalValue) {
        // Payment is equal to the cart total
        return 0; // No change is needed
    } else if (amount < cartTotalValue) {
        // Payment is less than the cart total
        return "Payment amount is less than the cart total.";
    } else {
        // Payment is greater than the cart total
        const change = amount - cartTotalValue;
        totalPaid += cartTotalValue; // Update the totalPaid
        return change; // Return the change amount
    }
} */

// Create a global variable to hold the totalPaid amount
let totalPaid = 0;

// Create a function named pay that takes in an amount as an argument
function pay(amount) {
    if (amount >= 0) {
        const cartTotalValue = cartTotal();

        // Update the totalPaid 
        totalPaid += amount;

        // Calculate the change
        const change = totalPaid - cartTotalValue;

        return change; // Return the change amount 
    } else {
        return "Invalid payment amount."
    }
}






module.exports = {
    products,
    cart,
    addProductToCart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    cartTotal,
    pay,
    emptyCart,
    /* Uncomment the following line if completing the currency converter bonus */
    // currency
}