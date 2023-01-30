let currentIndex = 1;

//Show current image
showSlides(currentIndex);

//Function to move Next
function plusSlides(n) {
    showSlides(currentIndex += n);
}

//Function to move back
function currentSlide(n) {
    showSlides(currentIndex = n);
}


//Initiate moving of slides
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("images");
    const dots = document.getElementsByClassName("navigation-dot");
    if (n > slides.length) { currentIndex = 1 }
    if (n < 1) { currentIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    
    //slides[currentIndex - 1].style.display = "flex";
    dots[currentIndex - 1].className += " active";

    //if (window.innerWidth <= 550) {
        slides[currentIndex - 1].style.display = "grid"; 
        slides[currentIndex - 1].style.gridTemplateRows = "repeat(2, 1fr)";
    //} 

    if (window.innerWidth > 550) {
        slides[currentIndex - 1].style.display = "flex";
    }
}