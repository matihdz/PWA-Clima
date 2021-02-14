import { callAPI } from './API.js';
import { form, inpCity, inpCountry } from './SELECTORS.js';
import { passInputsInformation, validateEmpty, regExOnlyLetters, validateRegEx, alertMsg } from './functions.js';

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', e => {
        e.preventDefault();

        const regEx = regExOnlyLetters();
        const fields = passInputsInformation(inpCity, inpCountry);
        const isFormEmpty = validateEmpty(fields);
        const isFormFieldsOnlyLetters = validateRegEx(regEx, fields);

        if(isFormEmpty.type === 'error') alertMsg(isFormEmpty)
        else {
            if(isFormFieldsOnlyLetters.type === 'error') alertMsg(isFormFieldsOnlyLetters)
            else callAPI(fields.city, fields.country)
        }
    });
})