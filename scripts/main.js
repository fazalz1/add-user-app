// Adding User, and grab the value and then output user in the form

const myForm = document.querySelector('#my-form');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const msg = document.querySelector('.msg');

const userList = document.querySelector('#users');

// Grabing the elements from DOM

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();

	// Form Validation

	if (nameInput.value === ' ' || emailInput.value === '') {
		msg.classList.add('error');

		msg.innerHTML = 'please enter all fields';

		// to disappear the msg after 3 seconds
		// using setTimeout();

		setTimeout(() => msg.remove(), 5000);
	} else {
		// Creating Element

		const li = document.createElement('li');

		// Creating TextNode

		li.appendChild(
			document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
		);

		userList.appendChild(li);

		// Clear Fields

		nameInput.value = '';

		emailInput.value = '';
	}
}
