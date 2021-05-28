const gmap = () => {
  let map;

  const locations = [
    {
      location: { lat: 59.934, lng: 30.333 },
      title: `Невский пр. 48`,
      img: `/img/pages/contacts/contacts-1.jpg`
    },
    {
      location: { lat: 59.852, lng: 30.147 },
      title: `ул. Адмирала Трибуца 6`,
      img: `/img/pages/contacts/contacts-1.jpg`
    },
    {
      location: { lat: 59.945, lng: 30.286 },
      title: `Кадетская линия В.О. 25`,
      img: `/img/pages/contacts/contacts-1.jpg`
    },
  ];

  function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 59.936, lng: 30.314 },
      zoom: 12,
      mapId: 'd42291912907a704',
      disableDefaultUI: true,
    });

    const getContentTemplate = (title, imgUrl) => {
      return `
      <div class="contacts-page__card">
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
      </div>
    `;
    };

    const createInfoWindow = (title, imgUrl) => {
      return new google.maps.InfoWindow({
        content: getContentTemplate(title, imgUrl),
      });
    };

    const markers = locations.map(({ location, title, img }) => {
      const marker = new google.maps.Marker({
        position: location,
        icon: `/sources/js/icon-dot.svg`,
        title: `${title}`,
        map
      });

      const infowindow = createInfoWindow(title, img);

      console.log(infowindow);

      marker.addListener("mouseover", () => {
        infowindow.open(map, marker);
      });

      marker.addListener("mouseout", () => {
        infowindow.close(map, marker);
      });

      return marker;
    });
  }
};

export default gmap;
