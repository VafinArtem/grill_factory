// Общий файл скриптов
import MenuOpen from "./menu-open";
import displacementSlider from "./displacementSlider";
import ShowElements from "./showElements";
import AddScrollPadding from "./addScrollPadding";
import DatePicker from "./datePicker";
import showDeliveryMessage from "./showDeliveryMessage";
import menuInit from "./menu-init";
import showCathegories from "./showCathegories";

menuInit();

// showCathegories();

document.querySelectorAll(`.js-flame-min`).forEach((element) => {
  lottie.loadAnimation({
    container: element,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/sources/js/plugins/lottie/animations/small_flame.json",
  });
});

document.querySelectorAll(`.js-title`).forEach((element) => {
  lottie.loadAnimation({
    container: element,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "/sources/js/plugins/lottie/animations/title.json",
  });
});

document.querySelectorAll(`.js-flame-title`).forEach((element) => {
  setTimeout(() => {
    lottie.loadAnimation({
      container: element,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/sources/js/plugins/lottie/animations/big_flame.json",
    });
  }, 200);
});

document.querySelectorAll(`.js-half-flame`).forEach((element) => {
  lottie.loadAnimation({
    container: element,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/sources/js/plugins/lottie/animations/small_flame_half.json",
  });
});

const mobileDetect = new MobileDetect(window.navigator.userAgent);

// Добавляем Padding
AddScrollPadding();

// Открытие меню
MenuOpen();

// Инициализируем swiper

const swiper = new Swiper(".swiper-container", {
  slidesPerView: document.location.pathname !== `/menu.html` ? "3" : "auto",
  freeMode: document.location.pathname !== `/menu.html` ? false : true,
  watchOverflow: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      spaceBetween: document.location.pathname !== `/menu.html` ? 20 : 13,
    },
    768: {
      slidesPerView: "auto",
      freeMode: true,
    },
  },
});

const swiperPromo = new Swiper(".swiper-container-promo", {
  effect: "fade",
  slidesPerView: "1",
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

if (mobileDetect.phone()) {
  const swiperPromoPage = new Swiper(".swiper-container-promo-page", {
    effect: "fade",
    slidesPerView: "1",
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
    accessToken:
      "IGQVJXRU1xUWVUUGF0ZA25Gemc4WHRTaHNKSnl2ZADZAqOV9wSzhWbTFrWlhTTjNyNkNVTk43dEhEZAUdfMUVwMEtuaGxXOEVjcmxkMVVlY3RsRERZAeFNmMGhFSjRTdlZAvU3RFTkg3RkxSelk2QXA5RkFrRwZDZD",
    limit: 6,
    template:
      '<div class="instagramm__item"><a href="{{link}}" target="_blank" rel="noreferrer" class="instagramm__link"><img src="{{image}}" alt="{{caption}}" class="instagramm__img" width="354" height="369"><div class="instagramm__wrapper"><p class="instagramm__text"><span class="instagramm__author">@{{model.username}}</span> {{caption}}</p></div></a></div>',
  });
  feed.run();
}

DatePicker(mobileDetect);

showDeliveryMessage();
