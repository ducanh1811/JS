var search = document.querySelector(".search input");
var country = document.querySelector(".country");
var city = document.querySelector(".city");
var date = document.querySelector(".time");
//var icon = document.querySelector(".weather-icon .material-symbols-outlined");
var temp = document.querySelector(".temperature");
var visibility = document.querySelector(".visibility .text");
var wind = document.querySelector(".wind .text");
var humidity = document.querySelector(".humidity .text");
var description = document.querySelector(".description");
var body = document.querySelector("body");
var wrapper = document.querySelector(".wrapper");


const weather = ['cold', 'foggy', 'hot',
 'sleet', 'stormy', 'sunny'];

updateWeather('Ho Chi Minh');

async function updateWeather(value) {
    
    search.value.trim();
    let api = `
    https://api.openweathermap.org/data/2.5/weather?q=${search.value ? search.value : value}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
    let data = await fetch(api)
        .then(response => response.json())
    
    city.innerHTML = data.name;
    country.innerHTML = data.sys.country;
    // lấy giờ hiện tại
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    date.innerHTML = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, "0")} ${ampm}`;
    date.innerHTML += `, ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`;

    // lay mo ta
    description.innerHTML = data.weather[0].description;

    // lấy nhiet do
    temp.innerHTML = `${Math.round(data.main.temp)}°C`;

    // lấy icon ??
    //icon.innerText = 'cloud'

    // lấy tốc độ gió
    wind.innerHTML = `${data.wind.speed} m/s`;

    // lấy độ ẩm
    humidity.innerHTML = `${data.main.humidity}%`;

    // lấy độ nhìn thấy
    visibility.innerHTML = `${data.visibility / 1000} km`;

    updateImage(Math.round(data.main.temp));

}

function updateImage(temperature) {
    // thay đổi background
    var image = `url(./image/${weather[0]}.jpeg)`;
    weather.forEach((item, i) => {
        if (temperature < 10*(i+1) && temperature >= 10*(i)) {
            image = `url(./image/${item}.jpeg)`;
        }
    });
    body.style.setProperty("--image", image);
    wrapper.style.setProperty("--image", image);
}

search.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        updateWeather();
    }
});

