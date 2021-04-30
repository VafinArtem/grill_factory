

const MenuOpen = () => {
  const openMenuElement = document.querySelector(`.js-menu-open`);

  const getStatusMenu = () => document.body.classList.contains(`menu-open`);

  openMenuElement.addEventListener(`click`, () => {
    if (getStatusMenu()) {
      document.body.classList.remove(`menu-open`);
    } else {
      document.body.classList.add(`menu-open`);
    }
  });
};

export default MenuOpen;
