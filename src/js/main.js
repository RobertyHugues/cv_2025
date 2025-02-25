let menu_button = document.getElementById('menu_button');
let vertical = document.getElementById('vertical');
let horizontal = document.getElementById('horizontal');
let items_list = document.querySelectorAll('[class*="item"]');


items_list.forEach(item => {
    item.classList.add('hidden');
})
function hidden_menu(items){
    items.forEach((e, i) => {
        if (e.classList.contains('hidden')) {
            setTimeout(() => {
                e.classList.remove('hidden');
            }, i * 100);
        } else {
            setTimeout(() => {
                e.classList.add('hidden');
            }, (items.length - 1 - i) * 100);
        }
    })
}
function setupToggle(name) {
    let button = document.getElementById(name);
    let elements = document.querySelectorAll(`[class*="${name}"]`);

    button.addEventListener('click', () => {
        button.classList.toggle('clicked');
        hidden_menu(elements);
    });
}
menu_button.addEventListener("click", () => {
    vertical.classList.toggle('rotate90')
    horizontal.classList.toggle('rotate180')
    let bigs = document.querySelectorAll('[class*="big"]');
    hidden_menu(bigs);
})
setupToggle('profil');
setupToggle('valeur');
setupToggle('projet');
setupToggle('formation');




let texts = document.querySelectorAll('.opacity');
let boxes = document.querySelectorAll('.rounded');
function checkVisibility(elements) {
    elements.forEach(element => {
        let e = element.getBoundingClientRect();
        let isVisible = e.top < window.innerHeight - e.height/2 && e.bottom > e.height/2;

        if (isVisible) {
            element.classList.remove('noVisible');
        } else {
            element.classList.add('noVisible');
        }
    });
}
function allCheck(){
    checkVisibility(texts)
    checkVisibility(boxes)
}

document.addEventListener("DOMContentLoaded", allCheck);
window.addEventListener('scroll', allCheck);
