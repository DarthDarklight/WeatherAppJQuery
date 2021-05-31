const apiKey="b10ef87689c429843f8351a602a22184";
const city = "Chisinau";
const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById('dat1').innerHTML = today;
console.log(url)

$.getJSON(url, (response) =>{
    console.log(response);
    function getCurrentWeather(data){
        let imgUrl= `./media/${data.weather[0].icon}.png`;
        // $('#dat1').text(today);
        $('#weather-main p').text(data.weather[0].main);
        $('#main img').attr('src',imgUrl);
        $('#temp').text(Math.round(data.main.temp) + '°C');
        $('#feel-like').text('Real feel ' + Math.round(data.main.feels_like)+'°');
        $('#sunrise').text('Sunrise:' + data.sys.sunrise);
        $('#sunset').text('Sunset:' + data.sys.sunset);
        $('#duration').text('Duration:' + data.sys.duration);
    }

    getCurrentWeather(response);
})