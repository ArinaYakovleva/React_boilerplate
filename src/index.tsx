import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.scss';
import {AppContainer} from './containers/AppContainer';
 import {Provider} from 'react-redux';
 import {store} from './store';


ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root'));