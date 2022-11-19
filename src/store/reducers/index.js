import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import cats from './catsReducer';

export default combineReducers({
    categories: categories,
    cats: cats
});