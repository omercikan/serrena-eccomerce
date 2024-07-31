let searchIcon = document.getElementById("searchIcon");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let sliderRow = document.querySelector(".sliders-row");
let clickCounter = 0;

let searchBox = document.querySelector(".search-box");
let searchBoxContainer = document.querySelector(".search-box-container");

let responsiveMenuIcon = document.getElementById("responsiveMenuIcon");

searchIcon.addEventListener("click", (e) => {
    e.stopPropagation()
    if(!searchBox.classList.contains("open") && !searchBoxContainer.classList.contains("open")) {
        searchBox.classList.add("open")
        searchBoxContainer.classList.add("open")
        document.querySelector("body").style.overflow = "hidden";
    } 
});

responsiveMenuIcon.addEventListener("click", () => {
    document.querySelector(".hamburger-menu").classList.toggle("open")
    document.querySelector(".main-home__responsive-nav").classList.toggle("responsive")
});

document.addEventListener("click", (e) => {
    if(searchBox.classList.contains("open") && searchBoxContainer.classList.contains("open")) {
        searchBox.classList.remove("open")
        searchBoxContainer.classList.remove("open")
        document.querySelector("body").style.overflow = "auto";
    } 
});

searchBoxContainer.addEventListener("click", (e) => {
    e.stopPropagation()
})

//!SLIDERS AREA EVENT
nextBtn.addEventListener("click", (e) => {
    sliderEvent(e);
});

prevBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(clickCounter > 0) {
        clickCounter--
        sliderRow.style.transform = `translateX(${sliderRow.computedStyleMap().get("transform")[0].x.value + 308}px)`;
    }
});

function sliderEvent(e = null) {
    if(e) e.preventDefault();

    clickCounter++;
    const sliderItem = sliderRow.querySelectorAll("img").length +1;
    const widthRatio = Math.floor(window.innerWidth / 308);    

    if(sliderItem - (8 + clickCounter) + (8 - widthRatio) >= 0) {
        sliderRow.style.transform = `translateX(${sliderRow.computedStyleMap().get("transform")[0].x.value - 308}px)`
    } else {
        sliderRow.style.transform = `translateX(0px)`
        clickCounter++;
        clickCounter = 0;
    }
};

setInterval(() => {
    sliderEvent();
}, 3000);