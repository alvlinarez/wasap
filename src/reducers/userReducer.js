import { ADD_USER, EDIT_USER, ASSIGN_CURRENT_USER } from '../types/userTypes';
import { uniqueNamesGenerator, names } from 'unique-names-generator';

const short = require('short-uuid');

const configUniqueNames = {
  dictionaries: [names]
};

const userId = short.generate();
const username = uniqueNamesGenerator(configUniqueNames);

const initialState = {
  currentUser: {
    id: userId,
    name: username
  },
  users: [
    {
      id: userId,
      name: username
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
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
