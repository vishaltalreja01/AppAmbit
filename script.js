// Toggle Navbar Menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const navbarMenu = document.getElementById("navbar-cta");
  const [hamburgerIcon, closeIcon] = toggleButton.querySelectorAll("svg");

  toggleButton.addEventListener("click", function () {
    navbarMenu.classList.toggle("hidden");

    // Toggle icons
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });
});

// Toggle Pricing Plan
const monthlyBtn = document.getElementById("monthly-btn");
const annualBtn = document.getElementById("annual-btn");
const prices = document.querySelectorAll(".price");

monthlyBtn.addEventListener("click", () => {
  prices.forEach((price) => {
    price.innerHTML = `$${price.dataset.monthly} <span class="text-sm text-gray-500 font-normal">/month</span>`;
  });
  monthlyBtn.classList.add("bg-[#d87800]", "text-white");
  annualBtn.classList.remove("bg-[#d87800]", "text-white");
  annualBtn.classList.add("text-gray-400");
});

annualBtn.addEventListener("click", () => {
  prices.forEach((price) => {
    price.innerHTML = `$${price.dataset.annual} <span class="text-sm text-gray-500 font-normal">/month</span>`;
  });
  annualBtn.classList.add("bg-[#d87800]", "text-white");
  monthlyBtn.classList.remove("bg-[#d87800]", "text-white");
  monthlyBtn.classList.add("text-gray-400");
});