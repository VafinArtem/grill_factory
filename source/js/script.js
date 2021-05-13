// Общий файл скриптов
import MenuOpen from './menu-open';
import displacementSlider from './displacementSlider';
import ShowElements from './showElements';
import AddScrollPadding from './addScrollPadding';
import DatePicker from './datePicker';

const mobileDetect = new MobileDetect(window.navigator.userAgent);

// Добавляем Padding
AddScrollPadding();

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

if (mobileDetect.phone()) {
  const sliderContainer = document.querySelector(`.swiper-container-promo-page`);
  if (sliderContainer) {
    sliderContainer.classList.add(`js-show`);
  }
} else {
  const sliderItems = document.querySelectorAll(`.promo__item--page`);
  if (sliderItems) {
    sliderItems.forEach((element) => element.classList.add(`js-show`));
  }
}

ShowElements();

if (document.querySelector(`#instafeed`)) {
  var feed = new Instafeed({
    accessToken: 'IGQVJXRU1xUWVUUGF0ZA25Gemc4WHRTaHNKSnl2ZADZAqOV9wSzhWbTFrWlhTTjNyNkNVTk43dEhEZAUdfMUVwMEtuaGxXOEVjcmxkMVVlY3RsRERZAeFNmMGhFSjRTdlZAvU3RFTkg3RkxSelk2QXA5RkFrRwZDZD',
    limit: 6,
    template: '<div class="instagramm__item"><a href="{{link}}" class="instagramm__link"><img src="{{image}}" alt="{{caption}}" class="instagramm__img" width="354" height="369"><div class="instagramm__wrapper"><p class="instagramm__text"><span class="instagramm__author">@{{model.username}}</span> {{caption}}</p></div></a></div>',
  });
  feed.run();
}

DatePicker(mobileDetect);
