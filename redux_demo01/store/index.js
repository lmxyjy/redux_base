import {createStore} from 'redux';
const { composeWithDevTools } = require('redux-devtools-extension');
import reducer from './reducer';

const store = createStore(
    reducer,
    composeWithDevTools()
    );
export default store;