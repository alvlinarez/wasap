import { ADD_CONVERSATION } from '../types/conversationTypes';

const initialState = {
  conversations: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.push(action.payload)
      };
    default:
      return state;
  }
};
