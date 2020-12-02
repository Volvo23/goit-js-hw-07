const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener('blur', onInputValidation);

function onInputValidation() {
    if (inputValidation.value.length < inputValidation.dataset.length || inputValidation.value.length > inputValidation.dataset.length) {
        inputValidation.classList.add('invalid');
        inputValidation.classList.remove('valid');
    } else {
        inputValidation.classList.add('valid');
        inputValidation.classList.remove('invalid');
    }
}