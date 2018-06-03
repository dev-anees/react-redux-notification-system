import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mock = new MockAdapter(axios);
mock.onGet('/info-request').reply(200, {
  serverMessage: {type: "INFO", message: "Great work! Keep it uo"}
});

export default infoRequest = () => {
    return async (dispatch) => {
        const response = await axios.get('/info-request');
    }
}