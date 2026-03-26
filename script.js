const form = document.getElementById('form event')
const username = document.getElementById('username')
const message = document.getElementById('message')
form.addEventListener('submit', function (event){
    if (username.value.trim() === '' || message.value.trim() === ''){
        alert("One or more fields are empty.")
    } else if (username.value.trim() !== '' && message.value.trim() !== ''){
        alert("Submitted")
    }
    event.preventDefault()
})