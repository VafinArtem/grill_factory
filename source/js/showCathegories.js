const showCathegories = () => {
  const cathegoriesList = document.querySelector(`.js-cathegories`);
  const showButton = document.querySelector(`.js-cathegories-show`);

  if (cathegoriesList && showButton) {
    showButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      cathegoriesList.classList.toggle(`show`);
      showButton.classList.toggle(`show`);
    });
  }
};

export default showCathegories;
