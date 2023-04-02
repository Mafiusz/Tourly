"use strict";

const headerBottom = document.querySelector(".header__bottom");
const headerHeight = document.getElementById("header").clientHeight;
const headerBottomHeight = headerBottom.clientHeight;

const headerSticky = () => {
    if (window.scrollY > headerHeight) {
        headerBottom.classList.add("active");
    } else {
        headerBottom.classList.remove("active");
    }
};

const links = document.querySelectorAll(".navigation .header__nav-links a");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop - headerBottomHeight,
        behavior: "smooth",
    });
}

window.addEventListener("scroll", headerSticky);

