const menuInit = () => {
  const cathegoriesList = document.querySelector(`.js-cathegories`);

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

        titles.forEach((title) => {
          title.closest(`.js-link`).href = MenuLinks[title.textContent]
            ? MenuLinks[title.textContent]
            : title.closest(`.js-item`).remove();
        });

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
