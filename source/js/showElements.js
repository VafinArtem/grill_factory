const getCoordinates = (element) => {
  const node = element.getBoundingClientRect();
  return node.top + window.pageYOffset - document.documentElement.clientHeight;
};

const showElement = (element, coordinateY) => {
  if(window.pageYOffset > coordinateY) {
    element.classList.add(`play-animation`);
  }
};

const ShowElements = () => {
  const showedElements = document.querySelectorAll(`.js-show`);

  showedElements.forEach((element) => {
    const ELEMENT_COORDINATES_Y = getCoordinates(element);
    window.addEventListener("scroll", () => {
      showElement(element, ELEMENT_COORDINATES_Y)
    });
    window.addEventListener("load", () => {
      showElement(element, ELEMENT_COORDINATES_Y)
    });
  });
};

export default ShowElements;
