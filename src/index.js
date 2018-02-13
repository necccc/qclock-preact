import './style';
import { Provider } from 'preact-redux';
import App from './components/app';
import store from './store'
import actions from './actions'

if (typeof window !== 'undefined') {
    Promise.all([
        store.dispatch(actions.getColors()),
        store.dispatch(actions.getTime())
    ])
}

export default function Main () {
    return (<div id="outer">
        <h1 id="Q">Q</h1>
        <Provider store={store}>
            <App />
        </Provider>
    </div>);
}
