import { ADD_CATEGORY } from '../types/categoryTypes';

export const addCategory = (name) => ({
  type: ADD_CATEGORY,
  payload: name
});
