const getCoordinates = (element) => {
  const node = element.getBoundingClientRect();
  return node.top + window.scrollY - document.documentElement.clientHeight;
};

const showElement = (element, coordinateY) => {
  if(window.scrollY > coordinateY) {
    element.classList.add(`play-animation`);
  }
};

const ShowElements = () => {
  const showedElements = document.querySelectorAll(`.js-show`);
  const showedTitleElements = document.querySelectorAll(`.js-head-show`);

  showedElements.forEach((element) => {
    const ELEMENT_COORDINATES_Y = getCoordinates(element);
    window.addEventListener("scroll", () => {
      showElement(element, ELEMENT_COORDINATES_Y);
    });
    showElement(element, ELEMENT_COORDINATES_Y);
  });
  showedTitleElements.forEach((element) => {
    window.addEventListener("load", () => {
      element.classList.add(`play-animation-title`);
    });
  });
};

export default ShowElements;
