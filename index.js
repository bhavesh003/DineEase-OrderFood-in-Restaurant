var vectorIcon1 = document.getElementById("vectorIcon1");
if (vectorIcon1) {
    vectorIcon1.addEventListener("click", function (e) {
        window.location.href = "SearchResult.html";
    });
}

var shoppingCart = document.getElementById("shoppingCart");
if (shoppingCart) {
    shoppingCart.addEventListener("click", function (e) {
        window.location.href = "Cart.html";
    });
}


// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.cart-child');

// Add a click event listener to each "Add to Cart" button
addToCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', () => {
        // Get the details of the dish
        const dishName = addToCartButton.parentElement.querySelector('.dish-name').textContent;
        const dishPrice = addToCartButton.parentElement.querySelector('.dish-price').textContent;

        // Create a new item object
        const item = { name: dishName, price: dishPrice };

        // Get the existing cart items from local storage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Add the new item to the cart
        cartItems.push(item);

        // Save the updated cart items to local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    });
});

// Add a click event listener to the "View Cart" button
const viewCartButton = document.querySelector('.shoppingCart');
viewCartButton.addEventListener('click', () => {
    window.location.href = 'cart.html';
});


