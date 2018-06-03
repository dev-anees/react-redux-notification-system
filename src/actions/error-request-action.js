import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export default function errorRequest(){
    let mock = new MockAdapter(axios);
    mock.onGet('/error-request').reply(500, {
    serverMessage: {type: "ERROR", message: "Some error occured! Please try again!"}
    });
    return async () => {
        const response = await axios.get('/error-request');
    }
}