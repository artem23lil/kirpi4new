document.addEventListener('DOMContentLoaded', function() {
    const deliveryImage = document.querySelector('.delivery-image img');

    deliveryImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    deliveryImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
