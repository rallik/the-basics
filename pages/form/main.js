import axios from "axios";
import fs from "fs";
import "./style.scss";

const getParamsString = (countryParams) => {
    const defaultParams = ["name", "nativeName", "area", "population", "region", "subregion", "continents", "capital", "capitalInfo", "latlng", "borders", "flags", "coatOfArms", "maps"];
    return [...defaultParams, ...countryParams].join();
};



const fetchData = async (countryName, countryParams) => {
    console.log("loaded2")
    const searchParams = getParamsString(countryParams);
    const url = `https://restcountries.com/v3.1/name/${countryName}?fields=${searchParams}`
    const resp = await axios.get(url);
    const data = await resp.data[0];
    console.log(await data)
}
console.log("loaded")

const form = document.getElementById("country-form");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = form.elements;
    // console.log(inputs)
    const countryName = inputs["country-name"].value;
    const countryParams = Array.from(inputs).filter(input => input.className === "checkbox" && input.checked === true).map(input => input.value);
    console.log(countryParams);
    console.log(countryName);
    // console.log(countryParams);
    // inputs.forEach((input)  => console.log(input.label, input.value))
    fetchData(countryName, countryParams);
});