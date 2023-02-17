const greetContent = document.querySelector('.greeting');
const userName = document.querySelector('.name')

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfTheDayPhrase = ['night', 'morning', ' afternoon', 'evening'];

  if (hours == 0 && hours <= 6) {
    return `${timeOfTheDayPhrase[0]}`;
  } else if (hours > 6 && hours < 12) {
    return `${timeOfTheDayPhrase[1]}`;
  } else if (hours >= 12 && hours < 18) {
    return `${timeOfTheDayPhrase[2]}`;
  } else {
    return `${timeOfTheDayPhrase[3]}`;
  }

}
greetContent.textContent = `Good ${getTimeOfDay()},`

getTimeOfDay()

// Сохранение ввода имени
function setLocalStorage() {
  localStorage.setItem('name', userName.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    userName.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage);