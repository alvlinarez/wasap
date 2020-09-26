import { ADD_USER, EDIT_USER, ASSIGN_CURRENT_USER } from '../types/userTypes';
const short = require('short-uuid');

const userId = short.generate();

const initialState = {
  currentUser: {
    id: userId,
    name: userId
  },
  users: [
    {
      id: userId,
      name: userId
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: state.users.push(action.payload)
      };
    case EDIT_USER:
      return {
        ...state,
        currentUser: action.payload,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        )
      };
    case ASSIGN_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
