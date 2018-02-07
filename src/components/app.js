import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';
import Time from '../routes/time';
import Design from '../routes/design';

export default class App extends Component {

    /** Gets fired when the route changes.
     *    @param {Object} event        "change" event from [preact-router](http://git.io/preact-router)
     *    @param {string} event.url    The newly routed URL
     */
    handleRoute = e => {
    	this.currentUrl = e.url;
    };

    render() {
    	return (
    		<div id="app">
    			<Header bgColor="#673AB7" />
    			<Router onChange={this.handleRoute}>
    				<Time path="/" />
    				<Design path="/design" />
    			</Router>
    		</div>
    	);
    }
}
