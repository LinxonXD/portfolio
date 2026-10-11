// Select HTML Elements
const hamburgerToggle = document.querySelector(".hamburger__toggle");
const navLinks = document.querySelector(".nav__links");
const navItems = document.querySelectorAll(".nav__links a");
// End of HTML Elements

// Hamburger Menu
hamburgerToggle.addEventListener("click", () => {
  // Toggle navigation Menu
  const isOpen = navLinks.classList.toggle("open");

  // Update accessibility Attributes
  hamburgerToggle.setAttribute("aria-expanded", isOpen);
  hamburgerToggle.setAttribute(
    "aria-label",
    isOpen ? "Close menu" : "Open menu",
  );
  // End of accessibility Attributes
});
// End of Hamburger menu

// Navigation Links
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Close menu when a navigation link is clicked
    navLinks.classList.remove("open");

    // Reset accessibility attributes
    hamburgerToggle.setAttribute("aria-expanded", "false");
    hamburgerToggle.setAttribute("aria-label", "Open menu");
    // End of Accessibility Attributes
  });
});
// End of Navigation links
