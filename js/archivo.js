// ------------- Interacción contacto -------------

document.querySelectorAll('.botonFinal').forEach(button => {
    button.addEventListener('click', () => {
        const texto = button.nextElementSibling;

        texto.classList.toggle('d-none');
        texto.classList.toggle('show');

        if (texto.classList.contains('show')) {
            button.textContent = 'Ver menos...';
        } else {
            button.textContent = 'Ver más...';
        }
    });
});

// ------------- Validación de Formulario -------------

(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')
    
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }
    
            form.classList.add('was-validated')
        }, false)
    })
})()