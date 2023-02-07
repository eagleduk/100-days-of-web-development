const burgerButtonElement = document.getElementById("burger-button");
const mobileNavigationElement = document.getElementById("mobile-navigation");

function toggleMobileNavigation() {
  mobileNavigationElement.classList.toggle("open");
}

burgerButtonElement.addEventListener("click", toggleMobileNavigation);
