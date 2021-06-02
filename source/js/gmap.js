const gmap = () => {
  let map;

  let infoWindows = [];

  const locations = [
    {
      location: { lat: 59.934, lng: 30.333 },
      title: `Невский пр. 48`,
      img: `/img/pages/contacts/contacts-1.jpg`,
    },
    {
      location: { lat: 59.852, lng: 30.147 },
      title: `ул. Адмирала Трибуца 6`,
      img: `/img/pages/contacts/contacts-1.jpg`,
    },
    {
      location: { lat: 59.945, lng: 30.286 },
      title: `Кадетская линия В.О. 25`,
      img: `/img/pages/contacts/contacts-1.jpg`,
    },
  ];

  function initMap() {
    const mapElement = document.querySelector(`#map`);
    if (mapElement) {
      map = new google.maps.Map(mapElement, {
        center: { lat: 59.936, lng: 30.314 },
        zoom: 12,
        mapId: "d42291912907a704",
        disableDefaultUI: true,
      });

      const getContentTemplate = (title, imgUrl) => {
        return `<div class="contacts-page__card">
        <div class="contacts-page__img-box">
          <img src="${imgUrl}" width="120" height="110" alt="Ресторан на ${title}"
            class="contacts-page__img">
        </div>
        <div class="contacts-page__adress-box">
          <p class="contacts-page__adress">
            ${title}
          </p>
          <a href="tel:+78124078000 " class="contacts__phone">+7 (812) 407-80-00</a>
        </div>
      </div>`;
      };

      const createInfoWindow = (title, imgUrl) => {
        return new google.maps.InfoWindow({
          content: getContentTemplate(title, imgUrl),
        });
      };

      const directionsDisplay = new google.maps.DirectionsRenderer({
        suppressInfoWindows: true,
        map: map,
      });

      const markers = locations.map(({ location, title, img }, index) => {
        const marker = new google.maps.Marker({
          position: location,
          icon: `/img/common/icon-dot-test.svg`,
          title: `${title}`,
          map,
        });

        const infowindow = createInfoWindow(title, img);

        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });

        map.addListener("click", () => {
          infowindow.close(map, marker);
        });

        marker.addListener("mouseover", () => {
          infowindow.open(map, marker);
        });

        marker.addListener("mouseout", () => {
          infowindow.close(map, marker);
        });

        infoWindows = [...infoWindows, infowindow];

        return marker;
      });

      if (mapElement.classList.contains(`isContactsPage`)) {
        let index = 0;
        let length = markers.length;

        const getPreviusIndex = () =>
          index - 1 === -1 ? markers.length - 1 : index - 1;

        const doNext = () => {
          let entry = markers[index];

          infoWindows[getPreviusIndex()].close(map, markers[getPreviusIndex()]);
          infoWindows[index].open(map, markers[index]);

          index++;

          if (index < markers.length) {
          } else {
            index = 0;
          }
          setTimeout(doNext, 2000);
        };

        doNext();
      }
    }
  }
};

export default gmap;
