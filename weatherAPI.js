const key = "3f0792c9b20f94bb5360360d31e3e977";
const cityName = `Yokohama`;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;

async function getWeather() {
  let data = await fetch(url);
  let dataJ = await data.json();
  console.log(dataJ);
}

getWeather();
