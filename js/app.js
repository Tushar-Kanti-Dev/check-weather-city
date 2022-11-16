const API_KEY = `34996ecbb255832960a58afd65972ac6`;
const searchTemparature = () => {
        const city = document.getElementById('city-name').value;
        // to clear input value 
        document.getElementById('city-name').value = '';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayTemperature(data))
            // console.log(url)
    }
    // searchTemparature();
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

    // console.log(temperature);
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
    console.log(url)
}