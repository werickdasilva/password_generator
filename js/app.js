const sliderCounterInput = document.querySelector('#slider-counter')
const sliderCountValue = document.querySelector('#slider-value')
const boxGeneratePassword = document.querySelector('#box-generate-password')
const password = document.querySelector('#password')
const boxGeneratedPassword = document.querySelector('#generated-password')
const iconCopy = document.querySelector('#icon-copy')

const charset = 'abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ1234567890&$!_-'
let newPassword = ''

sliderCountValue.innerHTML = messageCharacterInfo(sliderCounterInput.value)

sliderCounterInput.addEventListener('input', _ => {
    sliderCountValue.innerHTML = messageCharacterInfo(sliderCounterInput.value)
})


boxGeneratePassword.addEventListener('submit', e => {
   e.preventDefault()
    const resultPassword = generatePassword()
    boxGeneratedPassword.classList.remove('hide')
    password.innerHTML = resultPassword
    iconCopy.innerHTML = 'content_copy'
    boxGeneratedPassword.classList.remove('done')
})

boxGeneratedPassword.addEventListener('click', _ => {
    const resultPassword = password.innerHTML;
    navigator.clipboard.writeText(resultPassword)
    iconCopy.innerHTML = 'done'
    boxGeneratedPassword.classList.add('done')
})

function generatePassword() {
    let resultPassword = ''
    let lenghtCharset = charset.length;
    const valueSlider = sliderCounterInput.value

    for (let i = 0; i < valueSlider; ++i) {
        const letter = charset.charAt(Math.floor(Math.random() * lenghtCharset))
        resultPassword += letter
    }
    return resultPassword
}

function messageCharacterInfo(lenghtCharacter) {
    return `Your password will have ${lenghtCharacter} characters?`;
}