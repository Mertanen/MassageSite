vklink = document.querySelectorAll('.vklink');
whatsapplink = document.querySelectorAll('.whatsapplink');

vklink.forEach(element => {
    element.href = window.innerWidth <= 1200 ? "vk://vk.me/id518706918" : "https://vk.me/id518706918";
});

whatsapplink.forEach(element => {
    element.href = window.innerWidth <= 1200 ? "whatsapp://send?phone=79102004942" : "https://api.whatsapp.com/send?phone=79102004942";
});