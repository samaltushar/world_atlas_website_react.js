import axios from "axios";

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1"
});

//Creating a get request function ---------->>>>>>>>>>
export const getCountryData = () =>{
    return api.get("/all?fields=name,population,region,capital,flags")
}

//Creating a get Method for the Individual country Name ----------------->>>>>>>>>>>>>>
export const getCountryIndData = (name) =>{
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
}