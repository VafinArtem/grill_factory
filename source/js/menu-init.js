const menuInit = () => {
  const cathegoriesList = document.querySelector(`.js-cathegories`);

  const getCathegoryTemplate = (title, link) => {
    return `<div class="cathegories__item cathegories__item--menu js-item">
    <a href="${link}" class="cathegories__link cathegories__link--menu js-link">
      <div class="cathegories__icon-box cathegories__icon-box--menu">
        <img src="/img/pages/menu/icon-default.svg" alt="Контур огонька" class="cathegories__icon" width="50" height="50">
      </div>
      <h3 class="cathegories__title cathegories__title--menu js-c-title">${title}</h3>
    </a>
  </div>`;
  };

  const getCardTemplate = ({ title, text, background }) => {
    return `<div class="menu__item" style="background-image: url('${background}')">
      <h3 class="menu__title">${title}</h3>
      <p class="menu__text">${text}</p>
    </div>`;
  };

  const renderFirstCard = (parent, element) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = getCardTemplate(element);

    parent.prepend(newElement.firstChild);
  };

  const menu = {
    гриль: {
      title: `Гриль`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/grill.svg`,
    },
    пицца: {
      title: `Пицца`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/pizza.svg`,
    },
    "суши/роллы": {
      title: `Суши/роллы`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/sushi.svg`,
    },
    вок: {
      title: `Вок`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/vok.svg`,
    },
    закуски: {
      title: `Закуски`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/watermelon.svg`,
    },
    супы: {
      title: `Супы`,
      text: `У нас большой выбор как традиционных супов, так и приготовленных по нашему фирменному рецепту.`,
      background: `/img/pages/menu/cards/soup.svg`,
    },
    десерты: {
      title: `Десерты`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/cake.svg`,
    },
    соусы: {
      title: `Соусы`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/sauce.svg`,
    },
    напитки: {
      title: `Напитки`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/coctails.svg`,
    },
    "горячие блюда": {
      title: `Горячие блюда`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/meat.svg`,
    },
    салаты: {
      title: `Салаты`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/salad.svg`,
    },
    мангал: {
      title: `Мангал`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/barbecue.svg`,
    },
    паста: {
      title: `Паста`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/pasta.svg`,
    },
    гарниры: {
      title: `Гарниры`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/side-dishes.svg`,
    },
    "наборы/сеты": {
      title: `Наборы/сеты`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/sets.svg`,
    },
    default: {
      title: `Стандарт`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/default.svg`,
    },
  };

  if (cathegoriesList) {
    const titles = cathegoriesList.querySelectorAll(`.js-c-title`);
    let items = cathegoriesList.querySelectorAll(`.js-item`);
    const lspMenu = document.querySelector(`#lsp-block-tree`);

    const timerId = setInterval(() => {
      const lspItems = lspMenu.querySelectorAll(`li.jstore-tag`);
      if (lspItems.length) {
        clearInterval(timerId);

        let mainMenuList;
        let MenuLinks = {};

        for (const item of lspItems) {
          if (item.querySelector(`a`).textContent === `Меню для сайта`) {
            const parent = item.closest(`.jstore-tag`);
            mainMenuList = parent.querySelector(`.lsp-js-menu-childs`);
            break;
          }
        }

        const lspMenulinks = mainMenuList.querySelectorAll(`a`);

        lspMenulinks.forEach((item) => {
          const obj = {};
          obj[item.textContent.toLowerCase()] = item.href;
          MenuLinks = { ...MenuLinks, ...obj };
        });

        const getHref = (title) => {
          const href = MenuLinks[title];
          delete MenuLinks[title];
          return href;
        };

        titles.forEach((title) => {
          title.closest(`.js-link`).href = MenuLinks[
            title.textContent.toLowerCase()
          ]
            ? getHref(title.textContent.toLowerCase())
            : title.closest(`.js-item`).remove();
        });

        for (let [key, value] of Object.entries(MenuLinks)) {
          const newElement = document.createElement(`div`);
          newElement.innerHTML = getCathegoryTemplate(key, value);

          cathegoriesList.append(newElement.firstChild);
        }

        items = cathegoriesList.querySelectorAll(`.js-item`);

        const renderFirstCards = () => {
          const timerId = setInterval(() => {
            const listElements = document.querySelectorAll(
              `.lsp-block-items-list`
            );

            if (listElements.length) {
              clearInterval(timerId);

              listElements.forEach((list) => {
                const title = list.querySelector(`.jstore-tag.h1`).textContent;
                const parent = list.querySelector(`.lsp-block-items`);

                if (menu[title]) {
                  renderFirstCard(parent, menu[title]);
                } else if (title === `Меню для сайта`) {
                } else {
                  menu.default.title = title;
                  renderFirstCard(parent, menu.default);
                }
              });
            }
          });
        };

        renderFirstCards();

        let currentСategory;

        items.forEach((item) => {
          item.addEventListener(`click`, (evt) => {
            if (evt.currentTarget === currentСategory) {
              evt.currentTarget.classList.remove(`checked`);
              console.log(evt.currentTarget);

              currentСategory = null;

              evt.currentTarget.querySelector(
                `.js-link`
              ).href = `/menu.html#!/Menyu_dlya_sayta`;

              renderFirstCards();

              return;
            }

            if (currentСategory) {
              currentСategory.classList.remove(`checked`);
            }

            item.classList.add(`checked`);
            currentСategory = item;

            renderFirstCards();
          });
        });

        document.body.addEventListener(`click`, (evt) => {
          if (evt.target.classList.contains(`dish__back-link`)) {
            renderFirstCards();
          }
        });
      }
    }, 100);
  }
};

export default menuInit;
