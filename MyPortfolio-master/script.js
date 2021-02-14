//Variables
const portfolioBtn = document.querySelector("#portfolio-btn");
const footerBtn = document.querySelector("#second");
const showcaseSection = document.querySelector(".showcase");
const portfolioChevron = document.querySelector(".chevron-up");


//Event Listeners
portfolioBtn.addEventListener("click", () =>{
    const portfolioSection = document.querySelector(".portfolio");
    portfolioSection.scrollIntoView();
});

footerBtn.addEventListener("click", () =>{
    showcaseSection.scrollIntoView();
});

portfolioChevron.addEventListener("click", () =>{
    showcaseSection.scrollIntoView();
});