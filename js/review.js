const reviewTrack = document.querySelector('.review-track');
const reviewItems = document.querySelectorAll('.review-item');
const itemWidth = reviewItems[0].getBoundingClientRect().width;
let currentIndex = 1;

// Клонирование первого и последнего элемента
const firstItemClone = reviewItems[0].cloneNode(true);
const lastItemClone = reviewItems[reviewItems.length - 1].cloneNode(true);

// Добавляем клон первого элемента в конец и клон последнего элемента в начало
reviewTrack.appendChild(firstItemClone);
reviewTrack.insertBefore(lastItemClone, reviewItems[0]);

// Обновляем список элементов, включая клоны
const updatedReviewItems = document.querySelectorAll('.review-item');

// Устанавливаем смещение для правильного начального отображения
reviewTrack.style.transform = `translateX(${-itemWidth}px)`;

function moveReviews() {
    currentIndex++;
    const offset = -(currentIndex * itemWidth);

    // Анимация перемещения
    reviewTrack.style.transition = 'transform 0.5s ease-in-out';
    reviewTrack.style.transform = `translateX(${offset}px)`;

    // Проверяем, достигли ли мы конца или начала, и корректируем позицию
    if (currentIndex === updatedReviewItems.length - 1) {
        setTimeout(() => {
            reviewTrack.style.transition = 'none'; // Убираем анимацию
            reviewTrack.style.transform = `translateX(${-itemWidth}px)`; // Возвращаем к первому реальному элементу
            currentIndex = 0;
        }, 500); // Задержка равна длительности анимации
    } else if (currentIndex === 0) {
        setTimeout(() => {
            reviewTrack.style.transition = 'none'; // Убираем анимацию
            reviewTrack.style.transform = `translateX(${-itemWidth * (updatedReviewItems.length - 2)}px)`; // Возвращаем к последнему реальному элементу
            currentIndex = updatedReviewItems.length - 2;
        }, 500); // Задержка равна длительности анимации
    }
}

// Запускаем функцию через каждые 4 секунды
setInterval(moveReviews, 4000);
