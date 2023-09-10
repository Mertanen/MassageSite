let recordContainer = document.querySelector('#recordContainer');
let recordButtonTop = document.querySelector('#recordButton');
let recordButtonBot = document.querySelector('#recordButtonBot');
let recordButtonUnit = document.querySelectorAll('.recordButtonUnit');
let recordInnerContainer = document.querySelector('#recordInnerContainer');
let closeRecordButton = document.querySelector('#closeButton');

recordButtonTop.addEventListener('click', () => {
    recordContainer.classList.add('active');
});

recordButtonBot.addEventListener('click', () => {
    recordContainer.classList.add('active');
});

closeRecordButton.addEventListener('click', () => {
    recordContainer.classList.remove('active');
});

recordButtonUnit.forEach(item => {
    item.addEventListener('click', () => {
        recordContainer.classList.add('active')
    });
});