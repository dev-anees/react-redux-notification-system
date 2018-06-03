import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export default function infoRequest(){
    let mock = new MockAdapter(axios);
    mock.onGet('/info-request').reply(200, {
    serverMessage: {type: "INFO", message: "Great work! Keep it up"}
    });
    return async () => {
        const response = await axios.get('/info-request');
    }
}