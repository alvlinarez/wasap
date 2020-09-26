import { combineReducers } from 'redux';
import userReducer from './userReducer';
import conversationReducer from './conversationReducer';
import messageReducer from './messageReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  user: userReducer,
  category: categoryReducer,
  conversation: conversationReducer,
  message: messageReducer
});
