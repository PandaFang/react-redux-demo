import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const initialState = {};
const middware = [thunk];
// const store = createStore(rootReducer, initialState, applyMiddleware(...middleware)); 
// 以上是原本写法，如果要用 调试工具 Redux DevTools 需要下面遮阳写
const store = createStore(rootReducer, initialState,
    compose(
        applyMiddleware(...middware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )

export default store