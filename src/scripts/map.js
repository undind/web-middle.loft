ymaps.ready(init);

var placemarks = [
  {
    latitude: 55.84,
    longitude: 37.60,
    hintContent: 'Chocco',
    balloonContent: ''
  },
  {
    latitude: 55.83,
    longitude: 37.68,
    hintContent: 'Chocco',
    balloonContent: ''
  },
  {
    latitude: 55.82,
    longitude: 37.65,
    hintContent: 'Chocco',
    balloonContent: ''
  },
  {
    latitude: 55.80,
    longitude: 37.60,
    hintContent: 'Chocco',
    balloonContent: ''
  }
];

function init(){  
  var myMap = new ymaps.Map("map", {
      center: [55.82, 37.64],
      zoom: 13,
      controls: ['zoomControl'],
      behaviors: ['drag']
  });

  placemarks.forEach(function (obj) { 
    var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
      hintContent: obj.hintContent,
      balloonContent: obj.balloonContent
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/contacts/map-marker.png',
      iconImageSize: [46, 57],
      iconImageOffset: [-23, -57],
    });

    myMap.geoObjects.add(placemark);
  });

}