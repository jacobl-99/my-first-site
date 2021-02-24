console.log("Test")
const form = document.getElementById('form');
function getNumber(event) {
    event.preventDefault();
    console.log("HERE")
}
form.addEventListener('submit', getNumber);