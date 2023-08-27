button1 = document.getElementById('abonement_button_element_1');
button2 = document.getElementById('abonement_button_element_2');
button3 = document.getElementById('abonement_button_element_3');
button4 = document.getElementById('abonement_button_element_4');
elem1Image = document.getElementById('elem1Image');
elem2Image = document.getElementById('elem2Image');
elem3Image = document.getElementById('elem3Image');
elem4Image = document.getElementById('elem4Image');
elem1Desc = document.getElementById('elem1Desc');
elem2Desc = document.getElementById('elem2Desc');
elem3Desc = document.getElementById('elem3Desc');
elem4Desc = document.getElementById('elem4Desc');

button1.addEventListener('click', function() {
    if (button1.classList.contains('active')) {

    } else {
        button1.classList.add('active');
        button2.classList.remove('active');
        button3.classList.remove('active');
        button4.classList.remove('active');
        if (elem2Desc.classList.contains('active')) {
            elem2Desc.classList.remove('active');
            elem2Image.classList.remove('active');
        }
        if (elem3Desc.classList.contains('active')) {
            elem3Desc.classList.remove('active');
            elem3Image.classList.remove('active');
        }
        if (elem4Desc.classList.contains('active')) {
            elem4Desc.classList.remove('active');
            elem4Image.classList.remove('active');
        }
        elem1Desc.classList.add('active');
        elem1Image.classList.add('active');
    }
});

button2.addEventListener('click', function() {
    if (button2.classList.contains('active')) {

    } else {
        button2.classList.add('active');
        button1.classList.remove('active');
        button3.classList.remove('active');
        button4.classList.remove('active');
        if (elem1Desc.classList.contains('active')) {
            elem1Desc.classList.remove('active');
            elem1Image.classList.remove('active');
        }
        if (elem3Desc.classList.contains('active')) {
            elem3Desc.classList.remove('active');
            elem3Image.classList.remove('active');
        }
        if (elem4Desc.classList.contains('active')) {
            elem4Desc.classList.remove('active');
            elem4Image.classList.remove('active');
        }
        elem2Desc.classList.add('active');
        elem2Image.classList.add('active');
    }
});

button3.addEventListener('click', function() {
    if (button3.classList.contains('active')) {

    } else {
        button3.classList.add('active');
        button1.classList.remove('active');
        button2.classList.remove('active');
        button4.classList.remove('active');
        if (elem1Desc.classList.contains('active')) {
            elem1Desc.classList.remove('active');
            elem1Image.classList.remove('active');
        }
        if (elem2Desc.classList.contains('active')) {
            elem2Desc.classList.remove('active');
            elem2Image.classList.remove('active');
        }
        if (elem4Desc.classList.contains('active')) {
            elem4Desc.classList.remove('active');
            elem4Image.classList.remove('active');
        }
        elem3Desc.classList.add('active');
        elem3Image.classList.add('active');
    }
});

button4.addEventListener('click', function() {
    if (button4.classList.contains('active')) {

    } else {
        button4.classList.add('active');
        button1.classList.remove('active');
        button2.classList.remove('active');
        button3.classList.remove('active');
        if (elem1Desc.classList.contains('active')) {
            elem1Desc.classList.remove('active');
            elem1Image.classList.remove('active');
        }
        if (elem2Desc.classList.contains('active')) {
            elem2Desc.classList.remove('active');
            elem2Image.classList.remove('active');
        }
        if (elem3Desc.classList.contains('active')) {
            elem3Desc.classList.remove('active');
            elem3Image.classList.remove('active');
        }
        elem4Desc.classList.add('active');
        elem4Image.classList.add('active');
    }
});