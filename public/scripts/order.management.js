const formElements = document.querySelectorAll("form");

async function orderChangeStatus(event) {
  event.preventDefault();
  const status = event.target.querySelector("select").value;
  const {
    dataset: { csrf, targetid },
  } = event.target;
  console.log(csrf, targetid);

  await fetch("/admin/order/" + targetid, {
    method: "PATCH",
    headers: {
      "CSRF-Token": csrf,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
}

formElements.forEach((formElement) => {
  formElement.addEventListener("submit", orderChangeStatus);
});
