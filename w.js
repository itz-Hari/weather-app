
function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "4fa2a73e9425e848d91c7dea9c73e2eb"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
       .then(data => {
        if (data.cod === 200) {
          const name = data.name;
          const temp = data.main.temp;
          const desc = data.weather[0].description;
  
          document.getElementById("result").innerHTML = `
            <p><strong>${name}</strong></p>
            <p>Temperature: ${temp}°C</p>
            <p>${desc}</p>
          `;
        } else {
          document.getElementById("result").textContent = "City not found!";
        }
      });
  }
  