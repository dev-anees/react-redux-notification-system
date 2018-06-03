import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mock = new MockAdapter(axios);
mock.onGet('/error-request').reply(500, {
  serverMessage: {type: "ERROR", message: "Some error occured! Please try again!"}
});

export default errorRequest = () => {
    return async (dispatch) => {
        const response = await axios.get('/error-request');
    }
}