const form = document.querySelector('#registrationForm') as HTMLFormElement;
const name = document.querySelector('#name') as HTMLInputElement;
const email = document.querySelector('#email') as HTMLInputElement;
const password = document.querySelector('#password') as HTMLInputElement;
const confirmPassword = document.querySelector('#confirmPassword') as HTMLInputElement;
const gender = document.querySelector('#gender') as HTMLSelectElement;
const description = document.querySelector('#description') as HTMLTextAreaElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(name.value, email.value, password.value, confirmPassword.value, gender.value, description.value);
});