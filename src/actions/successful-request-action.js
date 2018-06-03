import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mock = new MockAdapter(axios);
mock.onGet('/successful-request').reply(200, {
  serverMessage: {type: "SUCCESS", message: "Your action was successfull!"}
});

export default successfulRequest = () => {
    return async (dispatch) => {
        const response = await axios.get('/successful-request');
    }
}