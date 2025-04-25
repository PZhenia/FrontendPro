'use strict';
const weatherContainer = document.querySelector('#weather-container');
const inputCity = document.querySelector('#input-city');
const errorMessage = document.querySelector('#error-message');

const cityNameRegExp = /^[A-Za-z][a-z'’]+(?:[\s-][A-Za-z][a-z'’]+)*$/;
let currentCity = 'Kyiv';

function formatUnixTime(unixTime, format = 'long') {
    const date = new Date(unixTime * 1000);

    if (format === 'short') {
        return date.toLocaleTimeString('uk-UA', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    } else {
        return date.toLocaleString('uk-UA', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    }
}

function renderDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    return `${day}.${month}.${year}, ${hour}:${minute}`;
}

function renderWeather(weatherData) {
    let currentTime = renderDate(new Date());
    const sunriseTime = formatUnixTime(weatherData.sys.sunrise,'short');
    const sunsetTime = formatUnixTime(weatherData.sys.sunset, 'short');
    weatherContainer.innerHTML = `
    <div class="info">
        <h1>${weatherData.name}, ${weatherData.sys.country}</h1>
        <span class="date">${currentTime}</span>
    </div>
    <div class="main-info">
    <button id="refresh-btn" class="refresh-btn"><span class="refresh-btn-inside"></span></button>
        <ul>
            <li><b>Temperature:</b> ${(weatherData.main.temp - 273.15).toFixed(1)}°C</li>
            <li><b>Feels like:</b> ${(weatherData.main.feels_like - 273.15).toFixed(1)}°C</li>
            <li><b>Clouds:</b> ${weatherData.clouds.all}%</li>
            <li><b>Wind:</b> ${weatherData.wind.speed} m/s</li>
            <li><b>Humidity:</b> ${weatherData.main.humidity}%</li>
        </ul>
        <div class="img-info">
            <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="Weather Icon">
            <div class="sun-info">
                <span><b>Sunrise:</b> ${sunriseTime}</span>
                <span><b>Sunset:</b> ${sunsetTime}</span>
            </div>
        </div>
    </div>
    `
    document.getElementById('refresh-btn').addEventListener('click', () => {
        getWeatherData(currentCity);
    });
}

function getWeatherData(city = 'Kyiv') {
    currentCity = city;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9b19d22710770525a692f86e11da49a8`)
        .then(response => {
            return response.json();
        }).then(data => {
        renderWeather(data);
    }).catch(error => {
        console.log(error);
    })
}

inputCity.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let city = inputCity.value.trim();
        if (city === '') {
            errorMessage.textContent = 'Please enter the name of the city';
            return;
        }
        if(cityNameRegExp.test(city)) {
            getWeatherData(city);
            inputCity.value = '';
        }
        else {
            errorMessage.textContent = 'The format of the city name is incorrect';
            return;
        }
        errorMessage.textContent = '';
    }
});

getWeatherData();