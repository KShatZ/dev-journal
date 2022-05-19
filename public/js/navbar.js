// Elements
const mobileToggle = document.querySelector(".mobile-toggle");
const mobileToggleIcon = document.querySelector(".mobile-toggle i");
const navMenu = document.querySelector(".nav-menu");

console.log(mobileToggle);

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

mobileToggle.addEventListener("click", toggleMenu);