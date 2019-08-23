import authReducer from './authReducer';
import recipeReducer from './recipeReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer,
  firestore: firestoreReducer, // 'syncs this property on the state object to data in the database'??
  // data is dependent on which component is active at the time
  firebase: firebaseReducer
});

export default rootReducer;
