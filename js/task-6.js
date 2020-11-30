let inputRef = document.getElementById("validation-input")
// console.log(inputRef.dataset);
// console.log(inputRef.dataset.length);

inputRef.addEventListener('blur', (event) => {
    let inputLength = event.target.value
    if (inputRef.dataset.length == inputLength.length) {
        inputRef.classList.add('green')
        inputRef.classList.remove('red') 
        
    } else {
        inputRef.classList.add('red')
        inputRef.classList.remove('green') }


    // console.log(event.target.value);
    // console.log('blur');
})