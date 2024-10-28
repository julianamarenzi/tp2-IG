// Hamburguesa
const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

// Sección 2
const dos = document.querySelector('#dos');
const sec2 = document.querySelector('#sec2');

dos.addEventListener('mouseover', () => {
    sec2.classList.remove('hidden');
});
dos.addEventListener('mouseleave', () => {
    sec2.classList.add('hidden');
});
sec2.addEventListener('mouseover', () => {
    sec2.classList.remove('hidden');
});
sec2.addEventListener('mouseleave', () => {
    sec2.classList.add('hidden');
});

// Sección 4
const cuatro = document.querySelector('#cuatro');
const sec4 = document.querySelector('#sec4');

cuatro.addEventListener('mouseover', () => {
    sec4.classList.remove('hidden');
});
cuatro.addEventListener('mouseleave', () => {
    sec4.classList.add('hidden');
});
sec4.addEventListener('mouseover', () => {
    sec4.classList.remove('hidden');
});
sec4.addEventListener('mouseleave', () => {
    sec4.classList.add('hidden');
});