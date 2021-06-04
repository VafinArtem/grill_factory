const showDeliveryMessage = () => {
  const addressInput = document.querySelector(`.js-delivery`);

  if (addressInput) {
    const succesMessageElement = document.querySelector(`.js-delivery-succes`);
    const errorMessageElement = document.querySelector(`.js-delivery-succes`);
    addressInput.addEventListener(`input`, () => {
      if (addressInput.value) {
        succesMessageElement.classList.add(`show`);
      } else {
        succesMessageElement.classList.remove(`show`);
      }
    });
  }
};

export default showDeliveryMessage;
