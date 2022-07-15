import './style.css';

// document.querySelector('#app').innerHTML = ``;
// eslint-disable-next-line no-undef
const firstNameInput = document.getElementById('fname');

// eslint-disable-next-line no-undef
const lastNameInput = document.getElementById('lname');

// eslint-disable-next-line no-undef
const emailInput = document.getElementById('email');

// eslint-disable-next-line no-undef
const dateInput = document.getElementById('date');

// eslint-disable-next-line no-undef
const summaryInput = document.getElementById('summary');

const checked = [];

// eslint-disable-next-line no-undef
const inputCheckboxes = document.getElementsByClassName('petSelection');
// eslint-disable-next-line no-plusplus
for (let i = 0; i < inputCheckboxes.length; i++) {
  inputCheckboxes[i].addEventListener('change', (event) => {
    if (event.target.checked) {
      checked.push(inputCheckboxes[i].value);
      // eslint-disable-next-line no-empty
    } else if (checked.includes(inputCheckboxes[i].value)) {
      const index = checked.indexOf(inputCheckboxes[i].value);
      checked.splice(index, 1);
    }
  });
}

// eslint-disable-next-line no-undef
const submitButtom = document.getElementById('submit');

// eslint-disable-next-line no-undef
document.getElementById('pets').addEventListener('change', (e) => {
  const petText = e.target.options[e.target.selectedIndex].text;
  console.log(petText);
});

submitButtom.addEventListener('click', () => {
  console.log(
    firstNameInput.value,
    lastNameInput.value,
    emailInput.value,
    dateInput.value,
    summaryInput.value,
    checked
  );
});
