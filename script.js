const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('mail')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('re-password')
const check = document.getElementById('agree')
const reset = document.getElementById('reset')

form.addEventListener('submit', e => {
    e.preventDefault()

    checkInputs()
})

reset.addEventListener('click', () => {
    username.value = ''
    email.value = ''
    password.value = ''
    passwordConfirmation.value = ''
})

function checkInputs() {
    const usernameValue = username.value.trim()
    const passwordValue = password.value.trim()
    const passwordConfirmationValue = passwordConfirmation.value.trim()
    const emailValue = email.value.trim()

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank')
    } else {
        setSuccesFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email')
    } else {
        setSuccesFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else {
        setSuccesFor(password)
    }

    if (passwordConfirmationValue === '') {
        setErrorFor(passwordConfirmation, 'Please re-enter password')
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, ' Passwords do not match')
    } else {
        setSuccesFor(passwordConfirmation)
    }

    if (!check.checked) {
        setErrorFor(check, 'Check this too')
    } else {
        setSuccesFor(check)
    }
}

function setSuccesFor(input, message) {
    const formControl = input.parentElement
    formControl.classList.add('success')
}

function setErrorFor(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.classList.add('error')
    small.innerText = message
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}