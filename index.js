

const searchCountry = (country) => {
  fetch(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
    });
}

searchCountry("brazil");