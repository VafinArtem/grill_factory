// Общий файл скриптов
import MenuOpen from './menu-open';

// Открытие меню
MenuOpen();

// Инициализируем swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  watchOverflow: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      spaceBetween: 20,
    },
    768: {
      freeMode: true,
    },
  }
});
