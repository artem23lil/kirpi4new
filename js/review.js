const reviewTrack = document.querySelector('.review-track');
const reviewItems = document.querySelectorAll('.review-item');
const itemWidth = reviewItems[0].offsetWidth + 30; 
let currentIndex = 0;


function moveReviews() {
    currentIndex++;
    if (currentIndex >= reviewItems.length) {
        currentIndex = 0; 
    }
    const offset = -(currentIndex * itemWidth);
    reviewTrack.style.transform = `translateX(${offset}px)`;
}

setInterval(moveReviews, 4000); 