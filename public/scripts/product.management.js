const productDeleteButtonElement = document.getElementById("product-delete");

async function productDelete(e) {
  e.stopPropagation();

  const {
    target: {
      dataset: { productId, csrf },
    },
  } = e;
  console.log(productId);

  const { result, message } = await (
    await fetch(`/admin/product/${productId}?_csrf=${csrf}`, {
      method: "DELETE",
    })
  ).json();

  if (result) {
    location.href = "/admin/products";
  } else {
    alert(message);
  }
}

productDeleteButtonElement.addEventListener("click", productDelete);
