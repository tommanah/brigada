document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger_menu');
    const menu = document.querySelector('.menu');

    burgerMenu.addEventListener('click', function() {
        menu.classList.toggle('menu_collapsed'); // Переключаем класс
    });
});

function toggle_text() {
    var buttons = document.querySelectorAll('.button_menu');

    // Переключаем класс для каждой кнопки
    buttons.forEach(button => {
        button.classList.toggle('hidden');
    });

    // переворот кнопки
    let img = document.querySelector('.burger_menu img');
    // img.style.transform = 'rotate(90deg)'; // Поворот на 90 градусов
    img.classList.toggle('rotated');
}