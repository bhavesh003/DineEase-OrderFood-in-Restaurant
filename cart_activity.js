const minusButton = document.querySelector(".minus");
const quantityButton = document.querySelector(".quantity");
const plusButton = document.querySelector(".plus");
const priceElement = document.querySelector(".dish-price");
const totalPriceElement = document.querySelector(".price");

minusButton.addEventListener("click", function () {
    let quantity = parseInt(quantityButton.textContent);
    if (quantity > 0) {
        quantity--;
        quantityButton.textContent = quantity;
        let price = parseInt(priceElement.textContent);
        let totalPrice = price * quantity;
        totalPriceElement.textContent = totalPrice;
    }
});

plusButton.addEventListener("click", function () {
    let quantity = parseInt(quantityButton.textContent);
    quantity++;
    quantityButton.textContent = quantity;
    let price = parseInt(priceElement.textContent);
    let totalPrice = price * quantity;
    totalPriceElement.textContent = totalPrice;
});