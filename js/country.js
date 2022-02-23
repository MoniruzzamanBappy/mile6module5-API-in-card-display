const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}

loadCountry();

const displayCountry = data => {
    const allCountry = document.getElementById('country-data');
    data.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h1>Name: ${country.name.official}</h1>
        <h2>Capital: ${country.capital}</h2>
        <h3>Area: ${country.area}</h3>
        <h3>Population: ${country.population}</h3>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;
        allCountry.appendChild(div);
    });
}

const loadCountryByName = cName => {
    const url = `https://restcountries.com/v3.1/name/${cName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}