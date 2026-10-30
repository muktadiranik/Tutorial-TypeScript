const form = document.querySelector('#registrationForm');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const gender = document.querySelector('#gender');
const description = document.querySelector('#description');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(name.value, email.value, password.value, confirmPassword.value, gender.value, description.value);
});
export {};
//# sourceMappingURL=index.js.map