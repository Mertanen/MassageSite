let buttonM = document.getElementById('menu-icon');
let buttonFirst = document.getElementById('button-first');
let buttonThird = document.getElementById('button-third');
let menu = document.getElementById('menu-container');
let bodyContianer = document.querySelector('.body');

buttonM.addEventListener('mouseenter', function(e) { 
  buttonFirst.classList.add('active');
  buttonThird.classList.add('active');
});

buttonM.addEventListener('mouseleave', function(e) {
  buttonFirst.classList.remove('active');
  buttonThird.classList.remove('active');
});

buttonM.addEventListener('click', function(e) {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    document.getElementById('button-first-active').id = "button-first";
    document.getElementById('button-third-active').id = "button-third";
  } else {
    menu.classList.add('active');
    document.getElementById('button-first').id = "button-first-active";
    document.getElementById('button-third').id = "button-third-active";
  }
});

let closeButton = document.querySelector('.menu_close-button');
let main = document.querySelector('.main-container');

closeButton.addEventListener('click', () => {
  menu.classList.remove('active');
  if (window.screen.width <= 760) {
    bodyContianer.style.overflowY = 'auto';
    menu.style.overflowY = 'auto';
    menu.style.height = window.screen.availHeight + 'px';
  }
});

main.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    document.getElementById('button-first-void-active').id = "button-first-void";
    document.getElementById('button-third-void-active').id = "button-third-void";
  }
});

let buttonVoid = document.getElementById('menu-icon-void');
let buttonFirstVoid = document.getElementById('button-first-void');
let buttonThirdVoid = document.getElementById('button-third-void');

buttonVoid.addEventListener('click', function(e) {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    buttonFirstVoid.id = "button-first-void-active";
    buttonThirdVoid.id = "button-third-void-active";
  } else {
    menu.classList.add('active');
    buttonFirstVoid.id = "button-first-void";
    buttonThirdVoid.id = "button-third-void";
  }
  if (window.screen.width <= 760) {
    bodyContianer.style.overflowY = 'hidden';
    menu.style.overflowY = 'scroll';
    menu.style.height = window.screen.availHeight + 'px';
  }
});
