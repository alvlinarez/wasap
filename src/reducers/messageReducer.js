import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  GET_MESSAGES
} from '../types/messageTypes';

const initialState = {
  messages: [],
  currentMessages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        currentMessages: state.messages
          .filter((message) => message.conversationId === action.payload.id)
          .sort((a, b) => a.time - b.time)
        // currentMessages: action.payload.isPrivate
        //   ? state.messages
        //       .filter(
        //         (message) =>
        //           message.conversationId === action.payload.id &&
        //           (message.senderId === action.payload.user_1 ||
        //             message.senderId === action.payload.user_2)
        //       )
        //       .sort((a, b) => a.time - b.time)
        //   : state.messages
        //       .filter((message) => message.conversationId === action.payload.id)
        //       .sort((a, b) => a.time - b.time)
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
        currentMessages: [...state.currentMessages, action.payload]
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message.id === action.payload) {
            message.deleted = true;
          }
          return message;
        }),
        currentMessages: state.currentMessages.map((message) => {
          if (message.id === action.payload) {
            message.deleted = true;
          }
          return message;
        })
      };
    default:
      return state;
  }
};
