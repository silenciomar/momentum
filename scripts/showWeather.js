const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=ca55bd165376b22b02d4119f986cb3f4&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === "404" || city.value.length === 0) {
    alert('Неправильный ввод данных! Пожалуйста, введите правильные данные!')
  }

  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`
  humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`
}

city.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    getWeather();
  }
});

function setLocalStorage() {
  localStorage.setItem("city", city.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
    getWeather();
  } else {
    city.value = "Minsk";
    getWeather();
  }
}
window.addEventListener("load", getLocalStorage);