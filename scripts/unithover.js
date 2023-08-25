let linkContainer = document.querySelector('.link-container');
let absoluteButton = document.querySelector('.absolute-button');

linkContainer.addEventListener('mouseenter', function(e) {
    linkContainer.classList.remove('unit_image_link');
    absoluteButton.classList.remove('unit_button_image');
});

linkContainer.addEventListener('mouseleave', function(e) {
    linkContainer.classList.add('unit_image_link');
    absoluteButton.classList.add('unit_button_image');
});