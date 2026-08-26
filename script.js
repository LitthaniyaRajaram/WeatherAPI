async function getWeather() {

    let city = document.getElementById("city").value;

    let apiKey = "a92f1a69dfc1dd7b85c6c0436fb60753";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        let response = await fetch(url);
        let data = await response.json();

        if(data.cod == 200){

            document.getElementById("result").innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        }
        else{
            document.getElementById("result").innerHTML = "City not found";
        }

    } catch(error){
        document.getElementById("result").innerHTML = "Error loading weather data";
    }
}