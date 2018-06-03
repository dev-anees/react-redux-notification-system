import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants/action-types';

export default function(state = {}, action){
    switch (action.type){
        case ADD_NOTIFICATION:
            //return [...state, [{notification: action.payload, type: "success"}]];
            let notification = {}
            notification[action.payload.id] = {type: action.payload.type, message: action.payload.message}
            return Object.assign({}, state, notification)
        case REMOVE_NOTIFICATION:
            let copy = Object.assign({}, state) 
            delete copy[action.payload]
            return copy;
        default:
            return state;
    }
}