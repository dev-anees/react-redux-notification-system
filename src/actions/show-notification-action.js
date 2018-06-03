import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants/action-types';

const addNotification = (id, requestStatus) => {
    return { type: ADD_NOTIFICATION, payload: {id: id, data: requestStatus}}
  }
const removeNotification = (id) => {
    return { type: REMOVE_NOTIFICATION, payload: id }
  }
  
let nextNotificationId = 0;
export function showNotification(requestStatus) {
    return function (dispatch) {
      const id = nextNotificationId++;
      dispatch(addNotification(id, requestStatus));
      dispatch(removeNotification(id));
    }
}
  