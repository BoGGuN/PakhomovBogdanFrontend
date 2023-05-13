function clearal () {
   document.querySelector('#input').value='';
   if (document.querySelector('.weatherwindow'))
   document.querySelector('.weatherwindow').remove();
}

a='';

function getal () {
a=document.querySelector('#input').value;
if (a!='')
{
   if (document.querySelector('.weatherwindow'))
   document.querySelector('.weatherwindow').remove();
   document.querySelector('#input').value='';
fetch('http://api.weatherapi.com/v1/current.json?key=0e0b5cfd424c4aa89bc180522230505&q='+a+'&aqi=no')
.then(function (resp){return resp.json()}).then(function (data) {
   b=data;
   weatherwindow=document.createElement('div');
   weatherwindow.classList.add('weatherwindow');
   labelcity=document.createElement('span');
   labelcity.classList.add('cityname');
   labelcity.classList.add('text');
   labelcity.classList.add('text2');
   labelcountry=document.createElement('span');
   labelcountry.classList.add('countryname');
   labelcountry.classList.add('text');
   labelcountry.classList.add('text2');
   condition=document.createElement('span');
   condition.classList.add('condition');
   condition.classList.add('text');
   condition.classList.add('text2');
   tempwindow=document.createElement('div');
   tempwindow.classList.add('tempwindow');
   cels=document.createElement('div');
   cels.classList.add('celswindow');
   cels.classList.add('windowt');
   labelcels=document.createElement('span');
   labelcels.classList.add('labelcels');
   labelcels.classList.add('text');
   labelcels.classList.add('text3');
   far=document.createElement('div');
   far.classList.add('farwindow');
   far.classList.add('windowt');
   labelfar=document.createElement('span');
   labelfar.classList.add('labelfar');
   labelfar.classList.add('text');
   labelfar.classList.add('text3');
   labelvis=document.createElement('span');
   labelvis.classList.add('labelvis');
   labelvis.classList.add('text');
   labelvis.classList.add('text2');
   labelcloud=document.createElement('span');
   labelcloud.classList.add('labelcloud');
   labelcloud.classList.add('text');
   labelcloud.classList.add('text2');
   labelwind=document.createElement('span');
   labelwind.classList.add('wind');
   labelwind.classList.add('text');
   labelwind.classList.add('text2');
   labelwinddir=document.createElement('span');
   labelwinddir.classList.add('winddir');
   labelwinddir.classList.add('text');
   labelwinddir.classList.add('text2');
   time=document.createElement('span');
   time.classList.add('time');
   time.classList.add('text');
   time.classList.add('text2');

   labelcity.textContent="Город: "+a;
   labelcountry.textContent="Страна: "+b.location.country;
   time.textContent="Местное время: "+b.location.localtime;
   condition.textContent="Погода: "+b.current.condition.text;
   labelcels.textContent=b.current.temp_c+"°C";
   labelfar.textContent=b.current.temp_f+"°F";
   labelvis.textContent="Видимость: "+b.current.vis_km+" км";
   labelcloud.textContent="Облачность: "+b.current.cloud+"%";
   labelwinddir.textContent="Направление ветра: "+b.current.wind_dir;
   labelwind.textContent="Скорость ветра: "+b.current.wind_kph+' км/ч';

   document.querySelector('.wrapper').appendChild(weatherwindow);
   document.querySelector('.weatherwindow').appendChild(labelcity);
   document.querySelector('.weatherwindow').appendChild(labelcountry);
   document.querySelector('.weatherwindow').appendChild(time);
   document.querySelector('.weatherwindow').appendChild(condition);
   document.querySelector('.weatherwindow').appendChild(tempwindow);
   document.querySelector('.tempwindow').appendChild(cels);
   document.querySelector('.tempwindow').appendChild(far);
   document.querySelector('.celswindow').appendChild(labelcels);
   document.querySelector('.farwindow').appendChild(labelfar);
   document.querySelector('.weatherwindow').appendChild(labelvis);
   document.querySelector('.weatherwindow').appendChild(labelcloud);
   document.querySelector('.weatherwindow').appendChild(labelwinddir);
   document.querySelector('.weatherwindow').appendChild(labelwind);

}).catch(function(){alert('Ошибка')});
} else if (a=='')
alert('Заполните поле ввода!');
}

document.querySelector('.clear').onclick=clearal;
document.querySelector('.out').onclick=getal;