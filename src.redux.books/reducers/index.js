import { combineReducers } from 'redux'; // wire up reducers into app
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// combine all reducers here in combineReducers({})
// key: reducer
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
