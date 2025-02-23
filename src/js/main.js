let menu_buttons = document.getElementById('menu_button');
let vertical = document.getElementById('vertical');
let horizontal = document.getElementById('horizontal');
let items = document.querySelectorAll('[class*="item"]');
let bigs = document.querySelectorAll('[class*="big"]');
let profil_item =document.getElementById('profil');
let profils = document.querySelectorAll('[class*="profil"]');
items.forEach(item => {
    item.classList.add('hidden');
})
menu_buttons.addEventListener("click", () => {
    vertical.classList.toggle('rotate90')
    horizontal.classList.toggle('rotate180')
    bigs.forEach((big, i) => {
        if (big.classList.contains('hidden')) {
            setTimeout(() => {
                big.classList.remove('hidden');
            }, i * 100);
        } else {
            setTimeout(() => {
                big.classList.add('hidden');
            }, (bigs.length - 1 - i) * 100);
        }
    })
})
profil_item.addEventListener('click', (e) => {
    profil_item.classList.add('clicked');
    profils.forEach((profil, i) => {
        if (profil.classList.contains('hidden')) {
            setTimeout(() => {
                profil.classList.remove('hidden');
            }, i * 100);
        } else {
            setTimeout(() => {
                profil.classList.add('hidden');
            }, (bigs.length - 1 - i) * 100);
        }
    })
})