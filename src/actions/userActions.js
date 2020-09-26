import { ASSIGN_CURRENT_USER, ADD_USER, EDIT_USER } from '../types/userTypes';

export const assignCurrentUser = (user) => ({
  type: ASSIGN_CURRENT_USER,
  payload: user
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user
});

export const editUser = (user) => ({
  type: EDIT_USER,
  payload: user
});
