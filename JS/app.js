"use strict"
searchbutton.addEventListener('click',searchweather);
function searchweather(){
    loadingText.style.display="block";
    weatherBox.style.display="none";
    var cityName=cityname.value;
    if (cityName.trim().length==0){
        return alert('Please Enter the city Name');
    }
    var http=new XMLHttpRequest();
    var apikey='453939141636c6367760cf586f523a20';
    var url='http://api.openweathermap.org/data/2.5/weather?q='+cityName +'&units=metric&appid='+apikey;
    var method='GET';
    http.open(method,url);
    http.onreadystatechange=function(){
        
        if(http.readyState==XMLHttpRequest.DONE&&http.status===200){
         var data=JSON.parse(http.responseText);
         var weatherdata=new Weather(cityName,data.weather[0].description.toUpperCase());
         weatherdata.temparature=data.main.temp;
         updateWeather(weatherdata);
         console.log(weatherdata);
        }else if(http.readyState===XMLHttpRequest.DONE){
            alert('something went wrong');
        }
    };
    http.send();
    
}
function updateWeather(weatherdata){
    weattherCity.textContent=weatherdata.cityName;
    weatherDescription.textContent=weatherdata.description;
    weathertemperature.textContent=weatherdata.temparature;
    loadingText.style.display='none';
    weatherBox.style.display="block";
}