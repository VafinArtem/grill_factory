// Общий файл скриптов
import MenuOpen from './menu-open';
import displacementSlider from './displacementSlider';
import ShowElements from './showElements';

// Открытие меню
MenuOpen();

// Инициализируем swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: '3',
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
      slidesPerView: 'auto',
      freeMode: true,
    },
  }
});

const swiperPromo = new Swiper('.swiper-container-promo', {
  effect: 'fade',
  slidesPerView: '1',
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

ShowElements();

// var feed = new Instafeed({
//   accessToken: 'IGQVJYUUtpTTVvZAm9LMW8wWkVXSUZAqRGV6ekJfbDdSOTBrRlBXcFljQ3dOV0NIcXp6MEs2VllSb3dKQ3dKeWVJMVJoNHVOTG95TFZAlRUR2QUZAsWG9BTklaVUJWRjZAtUnFjS09INFluVmZARTFJabEtTcERVb3MxUjB4b2ZAZA'
// });
// feed.run();
