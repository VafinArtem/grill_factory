const lottieInit = (() => {
  lottie.loadAnimation({
    container: document.querySelector(`.js-fire-min`),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/sources/js/plugins/lottie/animations/small_flame.json",
  });
})();

export default lottieInit;
