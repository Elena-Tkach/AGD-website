import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const swiper = (item, numSlide) => {
  new Swiper(item, {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: numSlide,
      },
    },
  });
};
