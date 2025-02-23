let menu_buttons = document.getElementById('menu_button');
let vertical = document.getElementById('vertical');
let horizontal = document.getElementById('horizontal');
menu_buttons.addEventListener("click", () => {
    vertical.classList.toggle('rotate90')
    horizontal.classList.toggle('rotate180')
})