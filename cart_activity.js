const items = document.querySelectorAll(".dish");
const totalPriceElement = document.querySelector(".total-price");

function updateTotalPrice() {
    let totalPrice = 0;
    items.forEach(function (item) {
        let price = item.querySelector(".dish-price").textContent;
        let price1 = price.slice(3,6);
        // console.log(price1);
        let quantity = parseInt(item.querySelector(".quantity").textContent);
        // console.log(price1, quantity);
        let itemTotalPrice = price1 * quantity;
        // console.log(itemTotalPrice);
        item.querySelector(".price").textContent = "Total : " + itemTotalPrice;
        totalPrice += itemTotalPrice;
        console.log(totalPrice);
    });
  let totalprice1 =document.getElementsByClassName(".total-bill-rs");
  console.log(totalprice1);
    // let totalPriceElement = document.getElementsByClassName(".total-bill-rs"); // Get the total price element by its ID
    totalPriceElement.textContent = "Total : " + totalPrice; // Set the total price as text content

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

