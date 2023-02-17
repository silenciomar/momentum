let body = document.querySelector('body');
let btnNext = document.querySelector('.slide-next');
let btnPrev = document.querySelector('.slide-prev');

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfTheDayPhrase = ['night', 'morning', 'afternoon', 'evening'];
  
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

const getRandomNum = () => {
  return Math.trunc(Math.random() * 20) + 1;
}

let randomNum = getRandomNum();
let timeOfDay = getTimeOfDay();
// console.log(timeOfDay)
function setBg() {
  const img = new Image();
  img.src = `./assets/img/${timeOfDay}/${randomNum}.jpg`;
  img.addEventListener('load', () => {
    body.style.backgroundImage = `url(${img.src})`;
  }); 
}
setBg()

function getSlideNext() {
  btnNext.addEventListener('click', () => {
    if(randomNum === 20) {
      randomNum = 1;
    } else {
      randomNum++
    }
    setBg()
  })
}
getSlideNext()

function getSlidePrev() {
  btnPrev.addEventListener('click', () => {
    if(randomNum === 1) {
      randomNum = 20;
    } else {
      randomNum--
    }

    setBg()
  })
}
getSlidePrev()