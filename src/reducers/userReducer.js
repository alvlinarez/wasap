import {
  GET_USERS,
  ADD_USER,
  EDIT_USER,
  ASSIGN_CURRENT_USER,
  EDIT_CURRENT_USER
} from '../types/userTypes';
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
    case GET_USERS:
    case ADD_USER:
    case EDIT_USER:
    case ASSIGN_CURRENT_USER:
    case EDIT_CURRENT_USER:
    default:
      return state;
  }
};
