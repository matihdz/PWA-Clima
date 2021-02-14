import { alertMsg } from './functions.js';
import { printDataHTML, showOrHideOrErrorInfo, setItemLS} from './functions.js';

export const callAPI = (city, country) => {
    const APIkey = 'a2fc80395ff945a9b690da80e6c1c9a0'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}`;

    setItemLS('infoInputs', {
        city,
        country,
    });

    showOrHideOrErrorInfo('hiden');
    fetch(url)
        .then( res => res.json())
        .then( data => {
            if(Number(data.cod) === 404){
                showOrHideOrErrorInfo('error')
                alertMsg({ type: 'error', message: 'The location could not be found'});

                setItemLS('infoInputs', '');
                setItemLS('infoWeather', {});
                return;
            }
            showOrHideOrErrorInfo('show');
            printDataHTML(data, city, country);
            setItemLS('infoWeather', data);
        })
        .catch(e => {
            console.log('Error: ', e)
        })
}