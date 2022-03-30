const carouselSide = document.querySelector(".my-slides-fade");
const carouselImages = document.querySelectorAll(".my-slides-fade img");

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let counter = 1;
const size = carouselImages[0].clientWidth;

// Makes the first images appear as the first 
carouselSide.style.transform = 'translateX(' + (-size * counter) + 'px';

nextButton.addEventListener('click', ()=>{
    if (counter >= carouselImages.length - 1) return;
    carouselSide.style.transition = "transform 0.4s ease-in-out";
    counter ++;
    carouselSide.style.transform = 'translateX(' + (-size * counter) + 'px';
});

prevButton.addEventListener('click', ()=>{
    if (counter <=0) return;
    carouselSide.style.transition = "transform 0.4s ease-in-out";
    counter --;
    carouselSide.style.transform = 'translateX(' + (-size * counter) + 'px';
});

//Basically an event listener that won't let the user slide off the page in either direction

carouselSide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone'){
        carouselSide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSide.style.transform = 'translateX(' + (-size * counter) + 'px';
    }

    if (carouselImages[counter].id === 'firstClone'){
        carouselSide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSide.style.transform = 'translateX(' + (-size * counter) + 'px';
    }
})