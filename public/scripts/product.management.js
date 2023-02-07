const productDeleteButtonElement = document.getElementById("product-delete");

if (productDeleteButtonElement) {
  async function productDelete(e) {
    e.stopPropagation();

    const {
      target: {
        dataset: { productId, csrf },
      },
    } = e;

    const { result, message } = await (
      await fetch(`/admin/product/${productId}`, {
        method: "DELETE",
        headers: {
          "CSRF-Token": csrf,
        },
      })
    ).json();

    if (result) {
      location.href = "/admin/products";
    } else {
      alert(message);
    }
  }
  productDeleteButtonElement.addEventListener("click", productDelete);
}

const productImageElement = document.getElementById("image");
const productImagePreview = document.getElementById("preview");

productImageElement.addEventListener("change", function (e) {
  const {
    target: {
      files: [file],
    },
  } = e;

  if (file) {
    productImagePreview.style.display = "block";
    productImagePreview.src = URL.createObjectURL(file);
  } else if (!file) {
    productImagePreview.style.display = "none";
    productImagePreview.src = "";
  }
});
