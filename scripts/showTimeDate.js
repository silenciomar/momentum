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
  const options = {month: 'long', day: 'numeric', timeZone: 'UTC', weekday: 'long'};
  const currentDate = date.toLocaleDateString('en-EN', options);
  dateContent.textContent = currentDate;
}