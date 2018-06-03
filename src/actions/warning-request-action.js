import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mock = new MockAdapter(axios);
mock.onGet('/warning-request').reply(200, {
  serverMessage: {type: "WARNING", message: "You've got a warning!"}
});

export default warningRequest = () => {
    return async (dispatch) => {
        const response = await axios.get('/warning-request');
    }
}