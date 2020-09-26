import { ADD_MESSAGE, DELETE_MESSAGE } from '../types/messageTypes';

const initialState = {
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: state.messages.push(action.payload)
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message === action.payload) {
            message.deleted = true;
          }
          return message;
        })
      };
    default:
      return state;
  }
};
