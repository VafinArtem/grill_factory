const menuInit = () => {
  const cathegoriesList = document.querySelector(`.js-cathegories`);

  const MENU_PATH = `/menu.html`;

  const menu = {
    "гриль/мангал": {
      title: `Гриль/мангал`,
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
    шашлыки: {
      title: `Шашлыки`,
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
    сеты: {
      title: `Сеты`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/sets.svg`,
    },
    default: {
      title: `Стандарт`,
      text: `Прекрасная закуска станет неотъемлемой частью любой вечеринки.`,
      background: `/img/pages/menu/cards/default.svg`,
    },
  };

  const setFirstLetterUppercase = (string) => {
    if (!string) {
      return string;
    }

    return string[0].toUpperCase() + string.slice(1);
  };

  const getCathegoryTemplate = (title, link) => {
    return `<div class="cathegories__item cathegories__item--menu js-item">
    <a href="${link}" class="cathegories__link cathegories__link--menu js-link">
      <div class="cathegories__icon-box cathegories__icon-box--menu">
        <img src="/img/pages/menu/icon-default.svg" alt="Контур огонька" class="cathegories__icon" width="50" height="50">
      </div>
      <h3 class="cathegories__title cathegories__title--menu js-c-title">${setFirstLetterUppercase(title)}</h3>
    </a>
  </div>`;
  };

  const getMainCathegoryTemplate = (title, link) => {
    return `<div class=" cathegories__item js-item swiper-slide">
    <a href="${link}" class="cathegories__link js-link">
      <div class="cathegories__icon-box">
        <div class="cathegories__amount js-amount">0</div>
        <img src="/img/pages/menu/icon-default.svg" alt="Контур огонька" class="cathegories__icon" width="118" height="118">
      </div>
      <h3 class="cathegories__title js-c-title">${setFirstLetterUppercase(title)}</h3>
    </a>
  </div>`;
  };

  const getCardTemplate = ({title, text, background}) => {
    return `<div class="menu__item js-first-card" style="background-image: url('${background}')">
      <h3 class="menu__title">${title}</h3>
      <p class="menu__text">${text}</p>
    </div>`;
  };

  const getAdditionalCardTemplate = (title, price, link, img) => {
    const DEFAULT_IMAGE_URL = `/img/pages/dish/default-dish-min.svg`;
    return `<li class="other-dish__item">
    <a href="${link}" class="other-dish__link">
      <img src="${!img ? DEFAULT_IMAGE_URL : img}" alt="${title}" width="126" height="166" class="other-dish__img">
      <div class="other-dish__inner">
        <p class="other-dish__name">${title}</p>
        <p class="other-dish__price">${price} <span class="rouble">a</span></p>
      </div>
    </a>
  </li>`;
  };

  const renderElement = (parent, element) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = element;

    parent.append(newElement.firstChild);
  };

  const renderFirstCard = (parent, element) => {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = getCardTemplate(element);

    parent.prepend(newElement.firstChild);
  };

  const renderAdditionalItems = () => {
    const timerId = setInterval(() => {
      const otherDishesList = document.querySelector(`.js-other-dishes`);

      if (otherDishesList) {
        clearInterval(timerId);

        const additionalItems = document.querySelectorAll(`.js-menu-add-item`);

        additionalItems.forEach((item) => {
          const link = item.querySelector(`.js-menu-add-link`).href;
          const title = item.querySelector(`.js-menu-add-link`).textContent;
          const price = item.querySelector(`.js-menu-add-price`).textContent;
          const img = item.querySelector(`.js-menu-add-img`).src;

          renderElement(otherDishesList, getAdditionalCardTemplate(title, price, link, img));
        });
      }
    });
  };

  if (cathegoriesList) {
    const titles = cathegoriesList.querySelectorAll(`.js-c-title`);
    let items = cathegoriesList.querySelectorAll(`.js-item`);
    const lspMenu = document.querySelector(`#lsp-block-tree`);

    const timerId = setInterval(() => {
      const lspItems = lspMenu.querySelectorAll(`li.jstore-tag`);
      if (lspItems.length) {
        clearInterval(timerId);

        let MenuLinks = {};

        const lspMenulinks = lspMenu.querySelectorAll(`a`);

        lspMenulinks.forEach((item) => {
          const obj = {};

          let title = item.textContent.trim().toLowerCase();

          obj[title] = item.href;
          MenuLinks = {...MenuLinks, ...obj};
        });

        const getHref = (title) => {
          const href = MenuLinks[title];
          const hashIndex = href.indexOf(`#`);
          delete MenuLinks[title];
          return `${MENU_PATH}${href.slice(hashIndex, href.length)}`;
        };

        titles.forEach((title) => {
          title.closest(`.js-link`).href = MenuLinks[title.textContent.toLowerCase()]
            ? getHref(title.textContent.toLowerCase())
            : title.closest(`.js-item`).remove();
        });

        for (let [key, value] of Object.entries(MenuLinks)) {
          const newElement = document.createElement(`div`);
          if (document.location.pathname === MENU_PATH) {
            newElement.innerHTML = getCathegoryTemplate(key, value);
          } else {
            console.log(key, value);
            newElement.innerHTML = getMainCathegoryTemplate(key, value);
          }

          cathegoriesList.append(newElement.firstChild);
        }

        const renderFirstCards = () => {
          const timerId = setInterval(() => {
            const listElements = document.querySelectorAll(`.lsp-block-items-list`);

            if (listElements.length) {
              clearInterval(timerId);

              listElements.forEach((list) => {
                const firstCard = list.querySelector(`.js-first-card`);

                if (!firstCard) {
                  let title = list.querySelector(`.jstore-tag.h1`);
                  const parent = list.querySelector(`.lsp-block-items`);

                  title = title.textContent.trim().toLowerCase();

                  if (menu[title]) {
                    renderFirstCard(parent, menu[title]);
                  } else {
                    menu.default.title = title;
                    renderFirstCard(parent, menu.default);
                  }
                }
              });
            }
          });
        };

        renderFirstCards();

        items = cathegoriesList.querySelectorAll(`.js-item`);

        let currentСategory;

        items.forEach((item) => {
          if (item.querySelector(`.js-link`).href === document.location.href) {
            currentСategory = item;
            item.classList.add(`checked`);
          }

          item.addEventListener(`click`, (evt) => {
            if (evt.currentTarget === currentСategory) {
              evt.currentTarget.classList.remove(`checked`);

              currentСategory = null;

              evt.currentTarget.querySelector(`.js-link`).href = `${MENU_PATH}`;

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

          if (
            evt.target.classList.contains(`lsp-block-item`) ||
            evt.target.closest(`.lsp-block-item`) ||
            evt.target.classList.contains(`other-dish__link`) ||
            evt.target.closest(`.other-dish__link`)
          ) {
            renderAdditionalItems();
          }
        });

        if (document.location.pathname === MENU_PATH && document.location.hash.split(`/`).length - 1 >= 2) {
          document.body.classList.add(`menu-open`);
          renderAdditionalItems();
        }

        if (document.location.pathname !== MENU_PATH) {
          let amountItems = {};
          let cathegoryMenyElements = document.querySelectorAll(`.jstore-tag.h1`);

          cathegoryMenyElements.forEach((element) => {
            let obj = {};
            const title = element.textContent.trim().toLowerCase();
            const amount = element.nextElementSibling.childNodes.length;

            obj[title] = amount;

            amountItems = {...amountItems, ...obj};
          });
          console.log(amountItems);

          titles.forEach((title) => {
            title.closest(`.js-link`).querySelector(`.js-amount`).textContent = amountItems[title.textContent.toLowerCase()];
          });
        }
      }
    }, 100);
  }
};

export default menuInit;
