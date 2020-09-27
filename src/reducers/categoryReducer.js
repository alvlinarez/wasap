import { ADD_CATEGORY } from '../types/categoryTypes';
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
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories,
          { id: short.generate(), name: action.payload }
        ]
      };
    default:
      return state;
  }
};
