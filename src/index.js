import './style';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { Provider } from 'preact-redux';
import App from './components/app';
import Server from './components/Server';

import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from './middleware/api'

import reducers from './reducers';
import actions from './actions'

const loggerMiddleware = createLogger()
let store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        apiMiddleware,
        loggerMiddleware
      )
);

Promise.all([
    store.dispatch(actions.getColors()),
    store.dispatch(actions.getTime())
])

export default function Main () {
    return (<div id="outer">
        <h1 id="Q">Q</h1>
        <Provider store={store}>
            <App />
        </Provider>
    </div>);
}
