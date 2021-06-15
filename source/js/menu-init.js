const menuInit = () => {
  const cathegoriesList = document.querySelector(`.js-cathegories`);

  const getCardTemplate = (title, link) => {
    return `<div class="cathegories__item cathegories__item--menu js-item">
    <a href="${link}" class="cathegories__link cathegories__link--menu js-link">
      <div class="cathegories__icon-box cathegories__icon-box--menu">
        <img src="/img/pages/menu/icon-default.svg" alt="Контур огонька" class="cathegories__icon" width="50" height="50">
      </div>
      <h3 class="cathegories__title cathegories__title--menu js-c-title">${title}</h3>
    </a>
  </div>`;
  };

  if (cathegoriesList) {
    const titles = cathegoriesList.querySelectorAll(`.js-c-title`);
    const items = cathegoriesList.querySelectorAll(`.js-item`);
    const lspMenu = document.querySelector(`#lsp-block-tree`);
    const lspFood = document.querySelector(`#lsp-block-content`);

    const timerId = setInterval(() => {
      const lspItems = lspMenu.querySelectorAll(`li.jstore-tag`);
      if (lspItems.length) {
        clearInterval(timerId);

        let mainMenuList;
        let MenuLinks = {};

        for (const item of lspItems) {
          if (item.querySelector(`a`).textContent === `Меню`) {
            const parent = item.closest(`.jstore-tag`);
            mainMenuList = parent.querySelector(`.lsp-js-menu-childs`);
            break;
          }
        }

        const lspMenulinks = mainMenuList.querySelectorAll(`a`);

        lspMenulinks.forEach((item) => {
          const obj = {};
          obj[item.textContent] = item.href;
          MenuLinks = { ...MenuLinks, ...obj };
        });

        const getHref = (title) => {
          const href = MenuLinks[title];
          delete MenuLinks[title];
          return href;
        };

        titles.forEach((title) => {
          title.closest(`.js-link`).href = MenuLinks[title.textContent]
            ? getHref(title.textContent)
            : title.closest(`.js-item`).remove();
        });

        for (let [key, value] of Object.entries(MenuLinks)) {
          const newElement = document.createElement(`div`);
          newElement.innerHTML = getCardTemplate(key, value);

          cathegoriesList.appendChild(newElement.firstChild);
        }

        let currentСategory;
        items.forEach((item) => {
          item.addEventListener(`click`, () => {
            if (currentСategory) {
              currentСategory.classList.remove(`checked`);
            }
            item.classList.add(`checked`);
            currentСategory = item;
          });
        });
      }
    }, 100);
  }
};

export default menuInit;
