const form = document.getElementById('form');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
  // using constraint API
  isValid = form.checkVisibility();

  // style message for error
  if (!isValid) {
    message.textContent = 'Please fill out all field';
    message.style.color = 'lightcoral';
    return;
  }

  // check to see if password match
  if (password.value === password2.value) {
    passwordMatch = true;
    password.style.borderColor = 'lightgreen';
    password2.style.borderColor = 'lightgreen';
  } else {
    passwordMatch = false;
    message.textContent = 'Password does not match';
    message.style.color = 'lightcoral';
    password.style.borderColor = 'lightcoral';
    password2.style.borderColor = 'lightcoral';
    return;
  }

  // if form and password is valid
  if (isValid && passwordMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'lightgreen';
  }
};

function storeForm() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  }

  // // display registered user
  // console.log(user)
}

function processForm(e) {
  e.preventDefault();

  validateForm();

  // submit data if valid
  if (isValid && passwordMatch) {
    storeForm();
  }
}

// event listener
form.addEventListener('submit', processForm)