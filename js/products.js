document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.filter a');
    const productItems = document.querySelectorAll('.product-item');
    const colorButtons = document.querySelectorAll('.color-btn');

    filterLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            filterLinks.forEach(link => link.classList.remove('active'));
            
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            productItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    colorButtons.forEach(button => {
        button.addEventListener('click', function () {
            const color = this.getAttribute('data-color');
            const productItem = this.closest('.product-item');
            const image = productItem.querySelector('.product-image');
            const baseImageUrl = '../assets/images/products/wit_'; 
            const colorImageUrl = `${baseImageUrl}${color}.JPG`; // используем JPG

            image.src = colorImageUrl;
        });
    });
});
