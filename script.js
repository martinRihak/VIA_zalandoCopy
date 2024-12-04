const saleEnd = new Date("2024-12-04T23:59:59").getTime();
const countdownInterval = setInterval(updateSale,1000);
document.addEventListener("DOMContentLoaded", function(){
    updateSlide();
    updateSale();
})
let resetSliderTimer = setInterval(nextSlide,5000);

function updateSale(){
    const now = new Date().getTime();
    const left = saleEnd - now;

    const days = Math.floor(left / (1000 * 60 * 60 * 24));
    const hours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((left % (1000 * 60)) / 1000);

    // Získání a aktualizace <p> v .saleInfo
    let saleInfoParagraph = document.querySelector(".saleInfo p");
    if (saleInfoParagraph) {
        saleInfoParagraph.innerHTML = `Sleva končí za: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Když čas vyprší
    if (left < 0) {
        clearInterval(countdownInterval);
        saleInfoParagraph.innerHTML = "Sleva skončila!";
    }
 }



let currentSlide = 0;

function updateSlide(){
    const sliderMain = document.querySelector('.slider-main');
    const slides = document.querySelectorAll('.slider-item');
    slides.forEach((slide) =>{
        slide.classList.remove('active');
    });
    slides[currentSlide].classList.add('active');
    const currentBG = slides[currentSlide].getAttribute('data-bg');

    sliderMain.style.backgroundColor = currentBG;
}
function nextSlide() {
    const slides = document.querySelectorAll(".slider-item");
    currentSlide = (currentSlide + 1) % slides.length; // Přechod na další slid nebo zpět na začátek
    updateSlide();
    resetSliderInerval();
}

function prevSlide() {
    const slides = document.querySelectorAll(".slider-item");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Přechod na předchozí slid nebo na konec
    updateSlide();    
    resetSliderInerval();
}
function resetSliderInerval(){
    clearInterval(resetSliderTimer);
    resetSliderTimer = setInterval(nextSlide,5000);
}

// Udržuje správnou velikost a pozadí při změně velikosti okna
window.addEventListener('resize', updateSlide);


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Zabrání odeslání formuláře pro testování validace
  
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const zip = document.getElementById("zip").value.trim();
  
    // Základní validace
    if (!firstname || !lastname || !email || !/^\d{5}$/.test(zip)) {
      alert("Vyplňte všechna povinná pole správně!");
      return;
    }
  
    alert("Formulář byl úspěšně odeslán!");
  });

//Hidden menu
document.addEventListener("DOMContentLoaded", () => {
const toggleButton = document.querySelector(".hidden-menu-toggle");
const hiddenMenu = document.querySelector(".hidden-menu");

toggleButton.addEventListener("click", () => {
    hiddenMenu.classList.toggle("active");
});
});