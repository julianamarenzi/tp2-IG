// ------------- Interacción contacto -------------

document.querySelectorAll('.botonFinal').forEach(button => {
    button.addEventListener('click', () => {
        const text = button.nextElementSibling;

        text.classList.toggle('d-none');
        text.classList.toggle('show');

        if (text.classList.contains('show')) {
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