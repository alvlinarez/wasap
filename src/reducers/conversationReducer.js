import {
  ADD_CONVERSATION,
  GET_CONVERSATIONS
} from '../types/conversationTypes';

const initialState = {
  conversations: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONVERSATIONS:
    case ADD_CONVERSATION:
    default:
      return state;
  }
};
