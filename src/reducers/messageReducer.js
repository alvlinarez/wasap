import {
  GET_MESSAGES,
  ADD_MESSAGE,
  DELETE_MESSAGE
} from '../types/messageTypes';

const initialState = {
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
    case ADD_MESSAGE:
    case DELETE_MESSAGE:
    default:
      return state;
  }
};
