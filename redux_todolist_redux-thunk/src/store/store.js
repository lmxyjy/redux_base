// 库
import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
// 引入中间件
import thunk from 'redux-thunk';

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
    reducer,
    enhancer
)

export default store

//http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1
