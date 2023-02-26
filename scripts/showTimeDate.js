export function showTimeDate() {
  const timeContent = document.querySelector('.time');
  const dateContent = document.querySelector('.date');

  function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();

    timeContent.textContent = currentTime;

    setTimeout(showTime, 1000);
    showDate()
  }

  showTime()

  function showDate() {
    const date = new Date();
    const options = { month: 'long', day: 'numeric', timeZone: 'UTC', weekday: 'long' };
    const currentDateEn = date.toLocaleDateString('en-EN', options);
    let currentDateRu = date.toLocaleDateString('ru-RU', options);

    if (localStorage.getItem('lang') === 'Ru') {
      const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
      dateContent.textContent = capitalize(currentDateRu);
    } else {
      dateContent.textContent = currentDateEn;
    }
  }
}

showTimeDate()