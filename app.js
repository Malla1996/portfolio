//GET ELEMENTS FROM HTML DOCUMENT
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
let showMenu = false;


hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add("close");
        menu.classList.add("show");
        menuBranding.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach(function (item) { item.classList.add("show"); });
        showMenu = true;
    } else {

        hamburger.classList.remove("close");
        menu.classList.remove("show");
        menuBranding.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach(function (item) { item.classList.remove("show"); });
        showMenu = false;


    }
}


