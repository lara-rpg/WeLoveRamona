 const images = document.querySelectorAll('.carousel-images img');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    const carouselImages = document.querySelector('.carousel-images');
    var currentIndex = 0;
    const totalImages = images.length;

    function updateCarousel(index) {
      carouselImages.style.transform = `translateX(-${index * 100}%)`;
      indicators.forEach((button, i) => {
        button.classList.toggle('active', i === index);
      });
      currentIndex = index;
    }

    function autoSlide() {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel(currentIndex);
    }

    var autoSlideInterval = setInterval(autoSlide, 3000);

    indicators.forEach((button) => {
      button.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        updateCarousel(parseInt(button.dataset.index));
        autoSlideInterval = setInterval(autoSlide, 3000);
      });
    });

    images.forEach((img) => {
      img.addEventListener('click', () => {
        const targetIndex = parseInt(img.dataset.target);
        clearInterval(autoSlideInterval);
        updateCarousel(targetIndex);
        autoSlideInterval = setInterval(autoSlide, 3000);
      });
    });