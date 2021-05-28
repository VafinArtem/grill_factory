const gmap = () => {
  // let academy = { lat: 59.938635, lng: 30.323118 };
  // let map = new google.maps.Map(
  //   document.getElementById("map"), {
  //   zoom: 17,
  //   center: academy,
  //   disableDefaultUI: true
  // }
  // );
  // let marker = new google.maps.Marker({
  //   position: academy,
  //   map: map,
  //   icon: "/img/icon-map-pin.svg"
  // });
  let map;

  const initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 59.9368, lng: 30.31407},
      zoom: 12,
      mapId: 'd42291912907a704'
    });
  };
};

export default gmap;
