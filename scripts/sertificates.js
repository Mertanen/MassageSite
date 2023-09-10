let elements1 = document.querySelectorAll('.element_1');
let elements2 = document.querySelectorAll('.element_2');
let elements3 = document.querySelectorAll('.element_3');
let elements4 = document.querySelectorAll('.element_4');

let elements = [elements1, elements2, elements3, elements4];

let button1 = document.getElementById('abutton1');
let button2 = document.getElementById('abutton2');
let button3 = document.getElementById('abutton3');
let button4 = document.getElementById('abutton4');

let buttons = [button1, button2, button3, button4];

buttons.forEach(item => {
    item.addEventListener('click', () => {
        elements.forEach(item => {
            item.forEach(elem => {
                elem.classList.remove('active');
            });
        });
        let itemID = item.id;
        elements.forEach(item => {
            if (item[0].id == itemID) {
                item.forEach(elem => {
                    elem.classList.add('active');
                });
            }
        });
    });
});