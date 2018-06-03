import { combineReducers } from 'redux';
import NotificationsReducer from './notifications-reducer';

const rootReducer = combineReducers({
    notifications: NotificationsReducer
});
export default rootReducer;