import axios from 'axios';
import { showNotification } from '../actions/show-notification-action';
import { store } from '../index';

axios.interceptors.response.use(function (response) {
    store.dispatch(showNotification(
        response.data.serverMessage
    ));
    return response;
  }, function (error) {
    store.dispatch(showNotification(
        error.response.data.serverMessage
    ));
    return Promise.reject(error.response);
  });