// Elements
const mobileToggle = document.querySelector(".mobile-toggle");
const mobileToggleIcon = document.querySelector(".mobile-toggle i");
const navMenu = document.querySelector(".nav-menu");
const navDropdowns = document.querySelectorAll(".nav-dropdown");

const toggleMenu = function () {
    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        mobileToggleIcon.classList.remove("fa-xmark");
        mobileToggleIcon.classList.add("fa-bars");
    } else {
        navMenu.classList.add("active");
        mobileToggleIcon.classList.add("fa-xmark");
        mobileToggleIcon.classList.remove("fa-bars");
    }
};

const toggleDropdownMenu = function () {
    if (this.classList.contains("dropdown-active")) {
        this.classList.remove("dropdown-active");
    } else {
        this.classList.add("dropdown-active");
    }
}


mobileToggle.addEventListener("click", toggleMenu);

navDropdowns.forEach(function (dropwdown) {
    dropwdown.addEventListener("click", toggleDropdownMenu);
});