// Hamburguesa
const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

// Sección 1
const uno = document.querySelector('#uno');
const sec1 = document.querySelector('#sec1');

uno.addEventListener('mouseover', () => {
    sec1.classList.remove('hidden');
});
uno.addEventListener('mouseleave', () => {
    sec1.classList.add('hidden');
});
sec1.addEventListener('mouseover', () => {
    sec1.classList.remove('hidden');
});
sec1.addEventListener('mouseleave', () => {
    sec1.classList.add('hidden');
});

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