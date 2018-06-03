import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export default function warningRequest(){
    let mock = new MockAdapter(axios);
    mock.onGet('/warning-request').reply(200, {
    serverMessage: {type: "WARNING", message: "You've got a warning!"}
    });
    
    return async () => {
        const response = await axios.get('/warning-request');
    }
}