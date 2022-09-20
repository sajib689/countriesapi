const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then (res => res.json())
    .then (data => displayCountries(data));
}


const displayCountries = countries => {
    console.log(countries);
    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(allCountriesHTML)
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML;
}
const getCountryHTML = country => {
    const {name,flags,area,borders} = country
    return`
    <div class='country'>
    <h2>${name.common}</h2>
    <h2>Area:${area}</h2>
    <h2>Border:${borders}</h2>
    
    <img src='${flags.png}'>
    </div>
    
    `
}
loadCountries()