import { GET_CATEGORIES, ADD_CATEGORY } from '../types/categoryTypes';
const short = require('short-uuid');

const initialState = {
  categories: [
    {
      id: short.generate(),
      name: 'Films'
    },
    {
      id: short.generate(),
      name: 'Sports'
    },
    {
      id: short.generate(),
      name: 'Music'
    },
    {
      id: short.generate(),
      name: 'Animals'
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
    case ADD_CATEGORY:
    default:
      return state;
  }
};
