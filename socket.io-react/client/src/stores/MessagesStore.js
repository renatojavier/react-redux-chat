import { createStore } from 'redux';
import { MessageReducer } from '../reducers/MessageReducer';

const store = createStore(MessageReducer);

export default store;