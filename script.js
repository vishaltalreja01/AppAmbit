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