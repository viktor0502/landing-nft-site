var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // when window width is <= 499px
        450: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 3,
            spaceBetweenSlides: 40
        },
        1024: {
            slidesPerView: 4,
            spaceBetweenSlides: 40
        }
    }
  });
