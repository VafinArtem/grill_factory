// Общий файл скриптов
import MenuOpen from './menu-open';
import displacementSlider from './displacementSlider';
import ShowElements from './showElements';

const mobileDetect = new MobileDetect(window.navigator.userAgent);

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

if (mobileDetect.phone()) {
  const swiperPromoPage = new Swiper('.swiper-container-promo-page', {
    effect: 'fade',
    slidesPerView: '1',
    autoHeight: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

ShowElements();

if (document.querySelector(`#instafeed`)) {
  var feed = new Instafeed({
    accessToken: 'IGQVJVeDhQaXFLTWZAEWWVFbHFwVzlFR2JSY1dlVTZAnYWtHcjV5NGp2SjZAMNnlUSUlocnVmc3dwTlV1ZA29aaW5TVU5ZAR3dTXy04VW00Y0VvQUxScXBndmdVTkdBVndVSHR6WldsM1Jn',
    limit: 3,
    template: '<div class="instagramm__item"><a href="{{link}}" class="instagramm__link"><header class="instagramm__header"><div class="instagramm__logo-box"><img src="/img/pages/about/logo_inst.jpg" alt="Логотип Grill Factory" class="instagramm__logo"></div><p class="instagramm__author">{{model.username}}</p></header><img src="{{image}}" alt="{{caption}}" class="instagramm__img"><p class="instagramm__text"><span class="instagramm__author">{{model.username}}</span> {{caption}}</p></a></div>',
  });
  feed.run();
}
