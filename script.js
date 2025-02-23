let currentPosition = 0;

// Открыть меню
function openMenu() {
    document.getElementById('menu').classList.add('show');
    document.getElementById('overlay').style.display = 'block';
}

// Закрыть меню
function closeMenu() {
    document.getElementById('menu').classList.remove('show');
    document.getElementById('overlay').style.display = 'none';
}

// Показать введенный текст в меню
function showText() {
    let userInput = document.getElementById('userInput').value;
    document.getElementById('outputText').textContent = "Ви написали: " + userInput;
}

// Функции анимаций
function moveBox() {
    const box = document.getElementById('box');
    currentPosition += 200;
    box.style.transform = `translateX(${currentPosition}px)`;
}

function moveBoxBack() {
    const box = document.getElementById('box');
    currentPosition -= 200;
    box.style.transform = `translateX(${currentPosition}px)`;
}

function changeColor() {
    const box = document.getElementById('box');
    const colors = ['red', 'blue', 'green', 'orange', 'purple'];
    let currentColor = box.style.backgroundColor;
    let nextColorIndex = (colors.indexOf(currentColor) + 1) % colors.length;
    box.style.backgroundColor = colors[nextColorIndex];
}

function fadeIn() {
    const box = document.getElementById('box');
    box.style.opacity = 1;
}

function fadeOut() {
    const box = document.getElementById('box');
    box.style.opacity = 0;
}

function resizeBox() {
    const box = document.getElementById('box');
    box.style.width = '200px';
    box.style.height = '200px';
}

function resizeBoxSmall() {
    const box = document.getElementById('box');
    box.style.width = '50px';
    box.style.height = '50px';
}

function resetSize() {
    const box = document.getElementById('box');
    box.style.width = '100px';
    box.style.height = '100px';
    currentPosition = 0;
    box.style.transform = `translateX(${currentPosition}px)`;
}

function toggleDarkLightMode() {
    document.body.classList.toggle('dark-mode');
}
