import {createStore} from 'redux';
import reduc from './combine';
const store=createStore(
reduc,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
export default store;