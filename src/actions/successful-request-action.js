import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export default function successfulRequest(){
    let mock = new MockAdapter(axios);
    mock.onGet('/successful-request').reply(200, {
    serverMessage: {type: "SUCCESS", message: "Your action was successfull!"}
    });
    return async (dispatch) => {
        const response = await axios.get('/successful-request');
    }
}