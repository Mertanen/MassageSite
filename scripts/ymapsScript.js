let centerOfPlacemark = [52.96683724981845, 36.06407201901431];
let centerOfMap = [52.96698096977181,36.06399423495288];

function init() {
  let map = new ymaps.Map('map', {
    center: centerOfMap,
    zoom: 17,
    controls: []
  }, {
    suppressMapOpenBlock: true
  });

  let placemark = new ymaps.Placemark(centerOfPlacemark, {}, {
    iconLayout: 'default#image',
    iconImageHref: '../images/location/placemark.png',
    iconImageSize: [40, 40]
  });

  let placemark1 = new ymaps.Placemark(centerOfPlacemark, {
    balloonContent: `
    <div class="balloon-container">
            <div class="balloon">
                <div class="balloon_title balloon_element"><h1>Студия массажа</h1></div>
                <div class="balloon_address balloon_element"><img src="https://dummyimage.com/25//fff.png" alt="">г. Москва, Цветной бульвар, 26 стр. 1</div>
                <div class="balloon_number balloon_element"><img src="https://dummyimage.com/25//fff.png" alt="">+7 (965) 142-97-30</div>
                <div class="balloon_rules balloon_element"><img src="https://dummyimage.com/25//fff.png" alt="">Прием по предварительной записи</div>
                <div class="balloon_time balloon_element"><img src="https://dummyimage.com/25//fff.png" alt="">Ежедневно с 10:00 до 22:00</div>
            </div>
        </div>
    `
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../images/placemark.png',
    iconImageSize: [40, 40]
  });

  map.geoObjects.add(placemark);
  map.geoObjects.add(placemark1);
}

ymaps.ready(init)