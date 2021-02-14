/* FORM FUCTIONS */
export const passInputsInformation = (inpCity, inpCountry) => ({
    city: inpCity.value, 
    country: inpCountry.value
});
export const validateEmpty = obj => {
    if(Object.values(obj).every( input => input !== '')) return {type: 'success', message: 'Satisfactory validation - Not Empty'}
    else return {type: 'error', message: 'All fields are required'}
}
export const regExOnlyLetters = () => /^[A-Z\s\,\u00E0-\u00FC]+$/i;
export const validateRegEx = (regEx, fields) => {
    if(regEx.test(fields['city'])) return {type: 'success', message: 'Satisfactory validation - Only Letters'}
    else return {type: 'error', message: 'Numbers and symbols are not allowed'}
}
/* ALERTS */
export const alertMsg = (info) => {
    const { type, message } = info;
    const msgHTML = document.createElement('p');

    if(!document.querySelector('.alert') && type === 'error'){
        msgHTML.textContent = message;
        msgHTML.classList.add('alert', 'alert-warning')
        form.appendChild(msgHTML);
        setTimeout( () => msgHTML.remove(), 3500);
    } else document.querySelector('.alert').textContent = message;
}
/* TO USE IN API DATA */
export const printDataHTML = (data, city, country) => {
    const kelvinToCelcius = (kelvin) => Math.round(kelvin - 273.15);
    document.querySelector('#city-country-title')
        .textContent = `${city} / ${country}`;
    document.querySelector('#weather-description')
        .textContent = data.weather[0].description;
    document.querySelector('#weather-temp')
        .textContent = `${kelvinToCelcius(data.main.temp)} °C`;
}
export const showOrHideOrErrorInfo = (type) => {
    const spinnerInfo = document.querySelector('#spinner-info');
    const infoContainer = document.querySelector('#infoContainer');
    if(type === 'show') {
        infoContainer.style.display = 'block';
        spinnerInfo.style.display = 'none';
    }
    if(type === 'hiden') {
        infoContainer.style.display = 'none';
        spinnerInfo.style.display = 'block';
    }
    if(type === 'error') {
        infoContainer.style.display = 'none';
        spinnerInfo.style.display = 'none';
    }
}
/* LOCAL STORAGE METHODS */
export const setItemLS = (nameItem, information) => localStorage.setItem(nameItem, JSON.stringify(information));
export const getItemLS = (nameItem) => JSON.parse(localStorage.getItem(nameItem));