const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function(){
   const inputBtn = document.getElementById('input-btn').value;
   
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=13790aecc23896d43ca8d3693c248062')
   .then(response => response.json())
   .then(data => {
       const cityName = data.name;
       const tem = data.main.temp;
       const temp = tem - 273.15;
       const description = data.weather[0].description;

       document.getElementById('city').textContent = cityName;
       document.getElementById('temp').textContent = temp.toFixed(1) + '°c';
       document.getElementById('descr').textContent = description;
       document.getElementById('pic').innerHTML = `<img src = "http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" >`
   })
   .catch(res => alert('City name not found'))
})