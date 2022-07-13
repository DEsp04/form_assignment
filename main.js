import './style.css';

// document.querySelector('#app').innerHTML = ``;
// eslint-disable-next-line no-undef
const firstNameInput = document.getElementById('fname');
// eslint-disable-next-line no-undef
const submitButtom = document.getElementById('submit');

// eslint-disable-next-line no-undef
document.getElementById('pets').addEventListener('change', (e) => {
  const petText = e.target.options[e.target.selectedIndex].text;
  console.log(petText);
});

submitButtom.addEventListener('click', () => {
  console.log(firstNameInput.value);
});
