const apiKey = "ce646c9d219144458f1133031241010";
const apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${accra}`;
const cityName = getElementById("cityName");

async function getWeather() {
    const response = await fetch(apiURL);
    const data = await response.json();

    const weatherInfo = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
    `;

    document.getElementById('weather-info').innerHTML = weatherInfo;
}

getWeather();

console.log('Hello API');







