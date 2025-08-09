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
function setupToggle(monthlyBtn, annualBtn, priceSelector) {
    const prices = document.querySelectorAll(priceSelector);
    
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
}

setupToggle(
    document.getElementById("monthly-btn"),
    document.getElementById("annual-btn"),
    "#pricing-container .price"
);

setupToggle(
    document.getElementById("modal-monthly-btn"),
    document.getElementById("modal-annual-btn"),
    "#starterPlanModal .price"
);


// Modal for Starter Plan
const starterPlanLink = document.getElementById("starterPlanLink");
const starterPlanModal = document.getElementById("starterPlanModal");
const closeModal = document.getElementById("closeModal");

// Open modal
starterPlanLink.addEventListener("click", () => {
  starterPlanModal.classList.remove("hidden");
  starterPlanModal.classList.add("flex");

  document.getElementById("modal-monthly-btn").click();
});

// Close modal
closeModal.addEventListener("click", () => {
  starterPlanModal.classList.remove("flex");
  starterPlanModal.classList.add("hidden");
});

// Close when clicking outside
starterPlanModal.addEventListener("click", (e) => {
  if (e.target === starterPlanModal) {
    starterPlanModal.classList.remove("flex");
    starterPlanModal.classList.add("hidden");
  }
});
