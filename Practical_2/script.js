const weatherData = {
    'Ahmedabad': '40°C',
    'Anand': '35°C',
    'Surat': '35°C',
    'Rajkot': '37°C'
};

document.getElementById('getWeatherButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    const weather = weatherData[city];
    const display = document.getElementById('weatherDisplay');
    const cloudDisplay=document.getElementById('CloudDisplay');
    var lat=0
    var lon=0
    var temp;
    var clouds;
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a9c999408a6cb34806a47dd3e5622075`)
    .then(response => response.json())
    .then((data)=>{
        console.log(data);
        lat=data.lat;
        lon=data.lon;
    })
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a9c999408a6cb34806a47dd3e5622075`)
    .then(response => response.json())
    .then((data)=>{
        console.log(data);
        temp=data.main.temp;
        console.log(temp);
        console.log(data.main.temp)
        clouds=data.weather[0].description;
        // lat=data.lat;
        // lon=data.lon;
        temp=+temp-273.16;
        display.innerText = `The weather in ${city} is ${temp} C`;
        cloudDisplay.innerText = `Clouds:
        ${city}: ${clouds} `;
    })
    

});

// const apiCall=http://api.openweathermap.org/geo/1.0/direct?q=Anand,IND&limit=1&appid=a9c999408a6cb34806a47dd3e5622075