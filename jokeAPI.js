//endpoint, path, query

async function getJoke() {
  let data = await fetch("https://v2.jokeapi.dev/joke/Any");
  let parseData = await data.json();
  console.log(parseData);
}

getJoke();
