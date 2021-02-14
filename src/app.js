import { printDataHTML, getItemLS } from './js/functions.js';
import './style.css';
import './css/layout.css';
import './css/alerts.css';
import './css/spinner.css';

document.addEventListener('DOMContentLoaded', () => {
    const prevInfoInputs = getItemLS('infoInputs') || undefined;
    const prevInfoWeather = getItemLS('infoWeather') || undefined;
    if(prevInfoInputs !== undefined && prevInfoWeather !== undefined){
        printDataHTML(prevInfoWeather, prevInfoInputs.city, prevInfoInputs.country);
    }
})

