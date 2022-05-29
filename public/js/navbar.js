// Mobile Menu Toggle
const mobileToggle = document.querySelector(".mobile-toggle i");
const navItems = document.querySelector(".nav-items");

const toggleMobileMenu = function () {
    if (navItems.classList.contains("mobile-active")) {
        navItems.classList.remove("mobile-active");
        mobileToggle.classList.remove("fa-xmark");
        mobileToggle.classList.add("fa-bars");

    } else {
        navItems.classList.add("mobile-active");
        mobileToggle.classList.add("fa-xmark");
    }
}

// Dropdown Toggle
const navDropdownItems = document.querySelectorAll(".nav-dropdown-item");

const toggleDropdown = function () {
    if (this.children[1].classList.contains("dropdown-active")) {
        this.children[1].classList.remove("dropdown-active");
    } else {
        this.children[1].classList.add("dropdown-active");
    }
}

// Event Listeners
mobileToggle.addEventListener("click", toggleMobileMenu);
navDropdownItems.forEach(function(dropdown) {
    dropdown.addEventListener("click", toggleDropdown);
});