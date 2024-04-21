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

// Получаем ссылку на <canvas> и создаем контекст
let canvas = document.getElementById('menu_image');
let ctx = canvas.getContext('2d');

// Создаем новый объект изображения
let img = new Image();

// Указываем источник изображения
img.src = 'menu.png';

// Когда изображение загружено
img.onload = function() {
    // Отрисовываем изображение на холсте
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Получаем данные изображения из холста
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;

    // Проходим по каждому пикселю и меняем его цвет
    for (let i = 0; i < data.length; i += 4) {
        // Изменяем цвет на красный (255, 0, 0)
        data[i] = 255;     // Красный
        data[i + 1] = 255;   // Зеленый
        data[i + 2] = 255;   // Синий
        // data[i + 3] оставляем без изменений (альфа-канал)
    }

    // Помещаем измененные данные обратно на холст
    ctx.putImageData(imageData, 0, 0);
};