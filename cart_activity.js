const items = document.querySelectorAll(".dish");
const totalPriceElement = document.querySelector(".total-price");

function updateTotalPrice() {
    let totalPrice = 0;
    items.forEach(function (item) {
        let price = parseInt(item.querySelector(".dish-price").textContent);
        let quantity = parseInt(item.querySelector(".quantity").textContent);
        console.log(price, quantity);
        let itemTotalPrice = price * quantity;
        item.querySelector(".item.price").textContent = "Total : " + itemTotalPrice;
        totalPrice += itemTotalPrice;
    });
    totalPriceElement.textContent = "Total : " + totalPrice;
}

items.forEach(function (item) {
    item.querySelector(".minus").addEventListener("click", function () {
        let quantity = parseInt(item.querySelector(".quantity").textContent);
        if (quantity > 0) {
            quantity--;
            item.querySelector(".quantity").textContent = quantity;
            updateTotalPrice();
        }
    });

    item.querySelector(".plus").addEventListener("click", function () {
        let quantity = parseInt(item.querySelector(".quantity").textContent);
        quantity++;
        item.querySelector(".quantity").textContent = quantity;
        updateTotalPrice();
    });
});

updateTotalPrice();

