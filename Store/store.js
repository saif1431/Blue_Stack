var swiper = new Swiper(".mySwiper", {
  slidesPerView: 7,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 30,
  loop: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
