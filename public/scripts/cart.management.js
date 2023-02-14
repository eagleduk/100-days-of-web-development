const cartItemContainers = document.querySelectorAll(".cart-item-management");
const cartTotalPriceElement = document.getElementById("cart-totalPrice");
const cartCountSpanElement = document.getElementById("cartCount");

cartItemContainers.forEach(function (cartItemContainer) {
  const productId = cartItemContainer.dataset.id;
  const csrf = cartItemContainer.dataset.csrf;

  const decreaseBtnElement = cartItemContainer.firstElementChild.children[0];
  const cartCountInputElement = cartItemContainer.firstElementChild.children[1];
  const increaseBtnElement = cartItemContainer.firstElementChild.children[2];

  const cartItemTotalPriceElement = cartItemContainer.querySelector(
    "span.cart-item-totalPrice"
  );

  async function updateCartItem(value) {
    const response = await fetch(`/cart/${productId}`, {
      method: "PATCH",
      headers: {
        "CSRF-Token": csrf,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });

    if (response.ok) {
      const carts = await response.json();
      let price = 0;
      for (const id in carts) {
        price += +carts[id].price * +carts[id].count;
      }
      cartTotalPriceElement.textContent = price;
      cartItemTotalPriceElement.textContent =
        +carts[productId].count * +carts[productId].price;
    }
  }

  cartCountInputElement.addEventListener("input", async function (e) {
    if (e.target.value < 0) e.target.value = 0;
    if (e.target.value > 99) e.target.value = 99;
    await updateCartItem(e.target.valueAsNumber);
  });

  decreaseBtnElement.addEventListener("click", async function (e) {
    if (cartCountInputElement.valueAsNumber > 0) {
      cartCountInputElement.value = cartCountInputElement.valueAsNumber - 1;
      await updateCartItem(cartCountInputElement.valueAsNumber);
    }
  });

  increaseBtnElement.addEventListener("click", async function (e) {
    if (cartCountInputElement.valueAsNumber < 99) {
      cartCountInputElement.value = cartCountInputElement.valueAsNumber + 1;
      await updateCartItem(cartCountInputElement.valueAsNumber);
    }
  });

  const deleteBtnElement = cartItemContainer.lastElementChild.children[0];

  async function deleteCartItem(e) {
    const response = await fetch(`/cart/${productId}`, {
      method: "DELETE",
      headers: {
        "CSRF-Token": csrf,
      },
    });

    if (response.ok) {
      const { carts, cartCount } = await response.json();
      let price = 0;
      for (const id in carts) {
        price += +carts[id].price * +carts[id].count;
      }
      cartTotalPriceElement.textContent = price;

      cartCountSpanElement.textContent = cartCount;
      cartItemContainer.parentElement.parentElement.remove();
    }
  }

  deleteBtnElement.addEventListener("click", deleteCartItem);
});
