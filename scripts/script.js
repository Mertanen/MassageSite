/* ------ Slider -------*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    autoplay: {
        delay: 3000,
    },

    speed: 900,

    effect: 'slide',

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

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
    iconImageHref: '../images/placemark.png',
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

let button = document.getElementById('menu-icon');
let buttonFirst = document.getElementById('button-first');
let buttonThird = document.getElementById('button-third');
let menu = document.getElementById('menu-container');

button.addEventListener('mouseenter', function(e) { 
  buttonFirst.classList.add('active');
  buttonThird.classList.add('active');
})

button.addEventListener('mouseleave', function(e) {
  buttonFirst.classList.remove('active');
  buttonThird.classList.remove('active');
})

button.addEventListener('click', function(e) {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    document.getElementById('button-first-active').id = "button-first";
    document.getElementById('button-third-active').id = "button-third";
  } else {
    menu.classList.add('active');
    document.getElementById('button-first').id = "button-first-active";
    document.getElementById('button-third').id = "button-third-active";
  }
})