#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = '18';

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to fetch data. Status code: ${response.statusCode}`);
    return;
  }

  const films = JSON.parse(body).results;
  const moviesWithWedgeAntilles = films.filter((film) =>
    film.characters.includes(`https://swapi-api.hbtn.io/api/people/18/`));

  console.log(moviesWithWedgeAntilles.length);
});

