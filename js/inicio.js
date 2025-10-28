document.addEventListener('DOMContentLoaded', function () {
    const galeriaContainer = document.querySelector('.galeria-container');
    const items = document.querySelectorAll('.item-galeria');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    const itemWidth = items[0].offsetWidth + 20; 
    const totalItems = items.length;
    const visibleItems = Math.floor(galeriaContainer.offsetWidth / itemWidth);
    
    let firstItemsClone = Array.from(items).slice(0, visibleItems);
    let lastItemsClone = Array.from(items).slice(totalItems - visibleItems);

    firstItemsClone.forEach(item => {
        let clone = item.cloneNode(true);
        galeriaContainer.appendChild(clone);
    });

    lastItemsClone.forEach(item => {
        let clone = item.cloneNode(true);
        galeriaContainer.insertBefore(clone, items[0]);
    });
    
    const allItems = document.querySelectorAll('.item-galeria');
    const allTotalItems = allItems.length;
    
    currentIndex = lastItemsClone.length;
    galeriaContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;


    function updateGallery() {
        galeriaContainer.style.transition = 'transform 0.5s ease-out';
        galeriaContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function movePrev() {
        currentIndex--;
        updateGallery();
    }

    function moveNext() {
        currentIndex++;
        updateGallery();
    }

    prevBtn.addEventListener('click', () => {
        movePrev();
    });

    nextBtn.addEventListener('click', () => {
        moveNext();
    });

    galeriaContainer.addEventListener('transitionend', () => {
        if (currentIndex <= lastItemsClone.length - 1) {
            galeriaContainer.style.transition = 'none';
            currentIndex = lastItemsClone.length + totalItems - visibleItems;
            galeriaContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }

        if (currentIndex >= lastItemsClone.length + totalItems) {
            galeriaContainer.style.transition = 'none';
            currentIndex = lastItemsClone.length;
            galeriaContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    });

    window.addEventListener('resize', () => {
        updateGallery();
    });

    items.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transition = 'transform 0.3s ease';
        });
    });
});

