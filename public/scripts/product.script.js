const addCartButtonElement = document.getElementById("addCart");
const cartCountSpanElement = document.getElementById("cartCount");

async function addCartEvent(event) {
  const { id, csrf } = event.target.dataset;
  const result = await fetch("/product/" + id, {
    method: "POST",
    headers: {
      "CSRF-Token": csrf,
      "Content-Type": "application/json",
    },
  });

  if (result.ok) {
    const { count } = await result.json();
    cartCountSpanElement.textContent = count;
  }
}

addCartButtonElement.addEventListener("click", addCartEvent);
