let dropdownList = document.querySelectorAll('.menu_unit_img-container');

dropdownList.forEach((item) => {
    item.addEventListener('click', () => {
        let parent = item.parentElement.parentElement;
        let listContainer = parent.children[1];;
        let itemHeight = listContainer.scrollHeight;
        
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            listContainer.style.maxHeight = 0 + 'px';
        } else {
            parent.classList.add('active');
            listContainer.style.maxHeight = listContainer.scrollHeight + 'px';
        }
    });
});
