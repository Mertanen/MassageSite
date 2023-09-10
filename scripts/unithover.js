let linkContainerAll = document.querySelectorAll('.link-container');
let absoluteButton = document.querySelectorAll('.absolute-button');

linkContainerAll.forEach(item => {
    item.addEventListener('mouseenter', () => {
        index = Array.prototype.indexOf.call(linkContainerAll, item);
        item.classList.remove('unit_image_link');
        absoluteButton[index].classList.remove('unit_button_image');
    });
});

linkContainerAll.forEach(item => {
    item.addEventListener('mouseleave', () => {
        index = Array.prototype.indexOf.call(linkContainerAll, item);
        item.classList.add('unit_image_link');
        absoluteButton[index].classList.add('unit_button_image');
    })
})