// form logic
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
// dark mode logic
function toggle() {
    let button = document.getElementsByClassName("toggle-btn")
    if (button[0].textContent === "Light mode"){
        button[0].textContent = "Dark mode"
    } else button[0].textContent = "Light mode"
  var element = document.body;
  element.classList.toggle("light-mode");

}
