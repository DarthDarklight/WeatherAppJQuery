const apiKey="b10ef87689c429843f8351a602a22184";
const apiKey2="234f8c1aa47546c4be4155623212406";
const city = "Chisinau";
const nearby_city1 = "Orhei";
const nearby_city2 = "Iasi";
const nearby_city3 = "Odessa";
const nearby_city4 = "Tiraspol";
const lat = "47.0056";
const lon = "28.8575";
const part = "";
const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const url_nearby1 =`http://api.weatherapi.com/v1/current.json?key=${apiKey2}&q=${nearby_city1}&days=5&alerts=yes&aqi=yes`;
const url_nearby2 =`http://api.weatherapi.com/v1/current.json?key=${apiKey2}&q=${nearby_city2}&days=5&alerts=yes&aqi=yes`;
const url_nearby3 =`http://api.weatherapi.com/v1/current.json?key=${apiKey2}&q=${nearby_city3}&days=5&alerts=yes&aqi=yes`;
const url_nearby4 =`http://api.weatherapi.com/v1/current.json?key=${apiKey2}&q=${nearby_city4}&days=5&alerts=yes&aqi=yes`;
const url2 =`http://api.weatherapi.com/v1/forecast.json?key=${apiKey2}&q=${city}&days=5&alerts=yes&aqi=yes`;
const urlautocomplete = 'https://countriesnow.space/api/v0.1/countries';
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var chour = Number(today.getHours())


today = mm + '/' + dd + '/' + yyyy;
document.getElementById('dat1').innerHTML = today;
console.log(url);
console.log(url2);

$.getJSON(url, (response) =>{
    console.log(response);
    function getCurrentWeather(data){
        let imgUrl= `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        let sunrise =new Date(data.sys.sunrise*1000);
        let sunset = new Date (data.sys.sunset*1000);
        // $('#dat1').text(today);
        $('#weather-main p').text(data.weather[0].main);
        
        $('#temp').text(Math.round(data.main.temp) + '°C');
        $('#feel-like').text('Real feel ' + Math.round(data.main.feels_like)+'°');
        $('#sunrise').text('Sunrise: ' +sunrise.getHours()+ ':' +sunrise.getMinutes()+ ' AM');
        $('#sunset').text('Sunset: ' + sunset.getHours() + ':' + sunset.getMinutes() + ' PM');
        $('#duration').text('Duration: ' + Math.round((data.sys.sunset*1000-data.sys.sunrise*1000)/3600000)+' Hours');

        
    }
    

    getCurrentWeather(response);
   
})

$.getJSON(url2,(response)=>{
    console.log(response);
    function getWeatherForecast(data){
        let fcast =(data.forecast.forecastday);
        console.log(fcast);
         let imgUrl1= fcast[0].hour[chour].condition.icon;
         $('#weather-main img').attr('src',imgUrl1);
            for (let index = chour; index < 24; index++) {

                var curhour = new Date(fcast[0].hour[index].time);
                let imgUrl2= fcast[0].hour[index].condition.icon;
                $( "#hour " ).append( `<div class="col"><p>${curhour.getHours() + ':00'}</p><img src="${imgUrl2}" alt="" ></div>` );
                $('#fcast ').append( `<div class="col"><p>${fcast[0].hour[index].condition.text}</p></div>` );
                $('#ftemp').append( `<div class="col"><p>${fcast[0].hour[index].temp_c+'°C'}</p></div>`  );
                $('#rfeel').append( `<div class="col"><p>${fcast[0].hour[index].feelslike_c+'°C'}</p></div>` );
                $('#wind ').append(`<div class="col"><p>${fcast[0].hour[index].wind_kph + ' ' + fcast[0].hour[index].wind_dir}</p></div>`  );

            }
            
        
        //$('#hour p').text(curhour.getHours() + ':00');
        // $('#fcast p').text(fcast[0].hour[chour].condition.text);
        //$('#ftemp p').text(fcast[0].hour[chour].temp_c+'°C');
        //$('#hour img').attr('src',imgUrl2); 
        //$('#rfeel p').text(fcast[0].hour[chour].feelslike_c+'°C');
        //$('#wind p ').text(fcast[0].hour[chour].wind_kph + ' ' + fcast[0].hour[chour].wind_dir  );
    }
    getWeatherForecast(response);
})

$.getJSON(url_nearby1, (response) =>{
    console.log(response);
    
    function getNearbyPlace1(data){
        let newimgUrl= data.current.condition.icon;
        $( "#cityname" ).append( `<div class="content"  ><p>${data.location.name}</p><img src="${newimgUrl}" alt="" class="center" ><p>${data.current.temp_c + '°C'}</p></div>` );   
    }
    getNearbyPlace1(response);
   
})
$.getJSON(url_nearby2, (response) =>{
    console.log(response);
    
    function getNearbyPlace2(data){
        let newimgUrl1= data.current.condition.icon;
        $( "#cityname1" ).append( `<div class="content" ><p>${data.location.name}</p><img src="${newimgUrl1}" alt="" class="center" ><p>${data.current.temp_c + '°C'}</p></div>` );   
    }
    getNearbyPlace2(response);
   
})
$.getJSON(url_nearby3, (response) =>{
    console.log(response);
    
    function getNearbyPlace3(data){
        let newimgUrl2= data.current.condition.icon;
        $( "#cityname2" ).append( `<div class="content" ><p>${data.location.name}</p><img src="${newimgUrl2}" alt="" class="center"><p>${data.current.temp_c + '°C'}</p></div>` );   
    }
    getNearbyPlace3(response);
   
})
$.getJSON(url_nearby4, (response) =>{
    console.log(response);
    
    function getNearbyPlace4(data){
        let newimgUrl3= data.current.condition.icon;
        $( "#cityname3" ).append( `<div class="content" ><p>${data.location.name}</p><img src="${newimgUrl3}" alt="" class="center" ><p>${data.current.temp_c + '°C'}</p></div>` );   
    }
    getNearbyPlace4(response);
   
})



//    $.getJSON(urlautocomplete, (response) =>{
//     console.log(response);
    
//     function getAutocomplete(data){
//         $( "#search" ).autocomplete({
//             source: data.cities   
            
//               });
//             console.log(data.cities) ;
           
//     }
//     getAutocomplete(response);
   
// })   