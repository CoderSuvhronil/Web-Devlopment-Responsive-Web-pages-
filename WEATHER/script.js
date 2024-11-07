const apiKey = '654692827bf3689f9044f798846f7ea6';  // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').textContent = `Weather in ${data.name}`;
            document.getElementById('temperature').textContent = `${data.main.temp} °C`;
            const description = data.weather[0].description;
            const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
            document.getElementById("description").textContent = capitalizedDescription;
            document.getElementById('humidity').textContent = `${data.main.humidity}%`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('City not found, please try again.');
        });
}
