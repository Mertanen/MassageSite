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