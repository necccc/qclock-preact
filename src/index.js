import './style';
import { Provider } from 'preact-redux';
import App from './components/app';

import { createStore } from 'redux';

import app from './reducers';

let store = createStore(app);

export default function Main () {
	return (<div id="outer">
		<h1 id="Q">Q</h1>
		<Provider store={store}>
			<App />
		</Provider>
	</div>);
}
