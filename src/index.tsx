import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { configureStore } from './state';

const storeConfig = configureStore();

class Root extends React.Component<IProps, {}> {
    render(): JSX.Element {
        return (
            <Provider store={this.props.store}>
                <App />
            </Provider>
        );
    }
}

/**
 * Properties available on the <code>props</code> property.
 */
interface IProps {
    readonly store: Store<any>;
}

ReactDOM.render(
    <Root store={storeConfig}><App /></Root>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
