

const MenuOpen = () => {
  const menuElement = document.querySelector(`.js-menu`);
  const openMenuElement = document.querySelector(`.js-menu-open`);

  const getStatusMenu = () => menuElement.classList.contains(`is-open`);

  openMenuElement.addEventListener(`click`, () => {
    if (getStatusMenu()) {
      menuElement.classList.remove(`is-open`);
      document.body.classList.remove(`menu-open`);
    } else {
      menuElement.classList.add(`is-open`);
      document.body.classList.add(`menu-open`);
    }
  });
};

export default MenuOpen;
